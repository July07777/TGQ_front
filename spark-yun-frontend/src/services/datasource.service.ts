/*
 * @Author: fanciNate
 * @Date: 2023-04-26 17:01:16
 * @LastEditTime: 2023-05-03 21:36:23
 * @LastEditors: fanciNate
 * @Description: In User Settings Edit
 * @FilePath: /zqy-web/src/services/computer-group.service.ts
 */
import { http } from '@/utils/http'
interface SerchParams {
    page: number
    pageSize: number
    searchKeyWord: string
    datasourceType?: string
}

export function GetDatasourceList(params: SerchParams): Promise<any> {
    return http.request({
        method: 'get',
        // url: '/datasource/pageDatasource',/separate/connection
        url: '/separate/connection',
        params: params
    })
}

// 添加
export function AddDatasourceData(params: any): Promise<any> {
    return http.request({
        method: 'post',
        url: '/connection',
        params: params
    })
}

// 更新
export function UpdateDatasourceData(params: any): Promise<any> {
    return http.request({
        method: 'put',
        url: '/connection',
        params: params
    })
}

// 检测
export function CheckDatasourceData(params: any): Promise<any> {
    return http.request({
        method: 'post',
        url: '/datasource/testConnect',
        params: params
    })
}

// 测试数据源链接
export function TestDatasourceData(params: any): Promise<any> {
    return http.request({
        method: 'post',
        url: '/separate/connection/test',
        params: params
    })
}

// 删除
export function DeleteDatasourceData(id: any): Promise<any> {
    return http.request({
        method: 'delete',
        url: `/connection?id=${id}`
    })
}

// // 获取数据源驱动
// export function GetDriverListData(params: any): Promise<any> {
//   return http.request({
//     method: 'post',
//     url: '/datasource/pageDatabaseDriver',
//     params: params
//   })
// }
// // 获取默认驱动
// export function GetDefaultDriverData(params: any): Promise<any> {
//   return http.request({
//     method: 'post',
//     url: '/datasource/getDefaultDatabaseDriver',
//     params: params
//   })
// }
