import { isNil } from 'ramda';
import { EExtention } from '../../entity/common/enums';
import { AbstractBaseHandler } from './handlers/abstract-base-handler';

export class DataContainer {
    constructor(
        private _data: Record<string, any>,
        private _handler: AbstractBaseHandler | null,
    ) {}

    to(format: EExtention): string {
        let handler: (data: Record<string, any>) => string;

        switch (format) {
            case EExtention.Json:
                handler = this._handler.toJson;
            break;
            case EExtention.Xlsx:
                handler = this._handler?.toXlsx;
            break;
            case EExtention.Xml:
                handler = this._handler?.toXml;
            break;
        }

        if (isNil(handler)) {
            throw new Error("Обработчика данных для этого формата не существует");
        }

        return handler(this._data);
    }
}