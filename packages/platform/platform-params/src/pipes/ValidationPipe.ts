import {Inject, Injectable} from "@tsed/di";
import {deserialize} from "@tsed/json-mapper";
import {getJsonSchema, JsonParameterStore, PipeMethods} from "@tsed/schema";
import {ParamTypes} from "../domain/ParamTypes";
import {RequiredValidationError} from "../errors/RequiredValidationError";

function cast(value: any, metadata: JsonParameterStore) {
  try {
    return deserialize(value, {
      type: metadata.type
    });
  } catch (er) {
    return value;
  }
}

export type ValidatorServiceMethods = {validate(value: any, options: any): Promise<any>};

@Injectable({
  type: "validator"
})
export class ValidationPipe implements PipeMethods {
  private validator: ValidatorServiceMethods;

  constructor(@Inject("validator:service") validators: ValidatorServiceMethods[]) {
    this.validator = validators[0];
  }

  coerceTypes(value: any, metadata: JsonParameterStore) {
    if (value === undefined) {
      return value;
    }

    if (value === "null") {
      return null;
    }

    if (metadata.isArray) {
      return [].concat(value);
    }

    if (metadata.isPrimitive) {
      return cast(value, metadata);
    }

    return value;
  }

  skip(value: any, metadata: JsonParameterStore) {
    return metadata.paramType === ParamTypes.PATH && !metadata.isPrimitive;
  }

  async transform(value: any, metadata: JsonParameterStore): Promise<any> {
    if (!this.validator) {
      this.checkIsRequired(value, metadata);
      return value;
    }

    if (this.skip(value, metadata)) {
      return value;
    }

    value = this.coerceTypes(value, metadata);

    this.checkIsRequired(value, metadata);

    if (value === undefined) {
      return value;
    }

    const schema = getJsonSchema(metadata, {
      customKeys: true
    });

    await this.validator.validate(value, {
      schema,
      type: metadata.isClass ? metadata.type : undefined,
      collectionType: metadata.collectionType
    });

    return value;
  }

  protected checkIsRequired(value: any, metadata: JsonParameterStore) {
    if (metadata.isRequired(value)) {
      throw RequiredValidationError.from(metadata);
    }

    return true;
  }
}
