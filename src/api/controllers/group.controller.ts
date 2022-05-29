import { ExegesisContext } from 'exegesis';
import { GroupService } from '../services/group.services';

export async function getItem(ctx: ExegesisContext) {
    const service = new GroupService();    

    return service.getItem(ctx.params.path.id);
}

export async function getList(ctx: ExegesisContext) {
    const service = new GroupService();

    return service.getList({
        conditions: {},
        pagination: {
            take: ctx.params.query?.take || 0,
            skip: ctx.params.query?.skip || 0,
        },
    });
}

export async function createItem(ctx: ExegesisContext) {
    const data = ctx.requestBody as { name: string };
    const service = new GroupService();

    return service.saveItem(data);
}

export async function updateItem(ctx: ExegesisContext) {
    const service = new GroupService();

    return service.saveItem({
        id: ctx.params.path.id,
        ...ctx.requestBody,
    });
}

export async function deleteItem(ctx: ExegesisContext) {
    const service = new GroupService();

    return service.deleteItem(ctx.params.path.id);
}