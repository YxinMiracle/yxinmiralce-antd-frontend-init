// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** editPost POST /api/nsfc/edit */
export async function editPostUsingPost(
  body: API.PostEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/nsfc/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getPostVOById GET /api/nsfc/get/vo */
export async function getPostVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePostVO_>('/api/nsfc/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUsvByPage POST /api/nsfc/list/enemy/page */
export async function listUsvByPageUsingPost(
  body: API.NsfcEnemyQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageEnemyDyn_>('/api/nsfc/list/enemy/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listPostVOByPage POST /api/nsfc/list/page/vo */
export async function listPostVoByPageUsingPost(
  body: API.PostQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/nsfc/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listEnemyByPage POST /api/nsfc/list/usv/page */
export async function listEnemyByPageUsingPost(
  body: API.NsfcUsvQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUsvDyn_>('/api/nsfc/list/usv/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
