/*
 * @Author: fanciNate
 * @Date: 2023-05-23 17:00:06
 * @LastEditTime: 2023-06-05 22:32:18
 * @LastEditors: fanciNate
 * @Description: In User Settings Edit
 * @FilePath: /spark-yun/spark-yun-website/src/utils/http/index.ts
 */
import { createAxios } from '@/plugins/http-request'
import router from '@/router'
import { merge } from '../checkType'
import { ElMessage } from 'element-plus'
import * as process from 'process'
import { useAuthStore } from '@/store/useAuth'

const message = ElMessage

const whiteList = ['/vip/auth/open/querySsoAuth']

export const httpOption = {
    transform: {
        requestInterceptors: (config: any) => {
            const authStore = useAuthStore()
            config.headers['authorization'] = config.headers['authorization'] || authStore.token
            config.headers['tenant'] = config.headers['tenant'] || authStore.tenantId

            return config
        },
        responseInterceptors: (config: any): any => {
            // getTokenFromResponse(config);

            return config
        }
    },
    requestOptions: {
        // urlPrefix: 'http://isxcode.com:30211',
        urlPrefix: 'http://192.168.12.81:8115',
        // urlPrefix: import.meta.env.VITE_VUE_APP_BASE_DOMAIN,
        showSuccessMessage: (msg: string): void => {
            message.success(msg)
        },
        showErrorMessage: (msg: string): void => {
            message.error(msg)
        },
        checkStatus: (status: number, msg: string, showMsg: any, response: any): void => {
            try {
                if (status == 401) {
                    router.push({
                        name: 'login'
                    })
                } else if (status == 403) {
                    message.error('许可证无效，请联系管理员')
                } else if (status == 404) {
                    if (response.config.url.match('/vip/')) {
                        if (!whiteList.some((url) => response.config.url.match(url))) {
                            message.error('请升级到企业版')
                        }
                    } else {
                        showMsg(msg)
                    }
                } else {
                    showMsg(msg)
                }
            } catch (error) {
                console.error('error', error)
                // console.log('err', error);
                // router.replace({
                //     name: LOGIN_NAME,
                //     query: {
                //         redirect: '/home'
                //     }
                // });
            }
        }
    },
    timeout: 30 * 1e3
}

export const createHttp = (option = {}) => {
    return createAxios(
        merge(
            {},
            {
                ...httpOption
            },
            {
                ...option
            }
        )
    )
}

export const http = createHttp()
