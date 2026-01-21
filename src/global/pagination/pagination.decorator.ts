import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const PaginationDecorator = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const query = request.query;
  if (!query.page) query.page = 1;
  if (!query.limit) query.limit = 10;
  query.skip = (query.page - 1) * query.limit;
  return query;
});
