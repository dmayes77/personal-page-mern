import * as baseService from './base';

function getByHandle( handle ) {
    return baseService.get(`/api/profile/handle/${handle}`);
}

export { getByHandle }