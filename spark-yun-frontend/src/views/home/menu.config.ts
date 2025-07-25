export interface Menu {
    icon: string
    name: string
    code: string
    authType?: Array<string>
    childPage?: Array<string>
    children?: Array<Menu>
}

// ROLE_SYS_ADMIN
export const menuListData: Array<Menu> = [
    {
        code: 'index',
        name: '首页',
        icon: 'Monitor',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        childPage: []
    },
    {
        code: 'resource-management',
        name: '资源管理',
        icon: 'School',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'computer-group',
                name: '计算集群',
                icon: 'UploadFilled',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['computer-pointer']
            },
            {
                code: 'driver-management',
                name: '驱动上传',
                icon: 'Cpu',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'file-center',
                name: '资源中心',
                icon: 'Paperclip',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            }
        ]
    },
    {
        code: 'data-planning',
        name: '数据规划',
        icon: 'Odometer',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'data-layer',
                name: '数据分层',
                icon: 'Files',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['layer-area']
            },
            {
                code: 'field-format',
                name: '字段标准',
                icon: 'Notebook',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'data-model',
                name: '数据模型',
                icon: 'List',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['model-field']
            }
        ]
    },
    {
        code: 'data-dev',
        name: '数据开发',
        icon: 'Wallet',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'workflow',
                name: '作业流',
                icon: 'SetUp',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['workflow-page']
            },
            {
                code: 'custom-func',
                name: '函数仓库',
                icon: 'Mouse',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'realtime-computing',
                name: '实时计算',
                icon: 'Iphone',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['computing-detail']
            },
            {
                code: 'spark-container',
                name: '计算容器',
                icon: 'Box',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            }
        ]
    },
    {
        code: 'schedule-management',
        name: '任务调度',
        icon: 'ScaleToOriginal',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'schedule',
                name: '调度历史',
                icon: 'DocumentRemove',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            }
        ]
    },
    {
        code: 'message-management',
        name: '基线告警',
        icon: 'ChatDotRound',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'message-notifications',
                name: '消息体',
                icon: 'Message',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'warning-config',
                name: '基线配置',
                icon: 'TakeawayBox',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'warning-schedule',
                name: '告警实例',
                icon: 'List',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            }
        ]
    },
    {
        code: 'metadata-page',
        name: '元数据',
        icon: 'Coin',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'datasource',
                name: '数据源',
                icon: 'DataLine',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'metadata-management',
                name: '数据地图',
                icon: 'Connection',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'acquisition-task',
                name: '数据采集',
                icon: 'Collection',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'acquisition-instance',
                name: '采集实例',
                icon: 'List',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            }
        ]
    },
    {
        code: 'data-server',
        name: '数据服务',
        icon: 'DataAnalysis',
        authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'report-components',
                name: '数据卡片',
                icon: 'Grid',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['report-item']
            },
            {
                code: 'report-views',
                name: '数据大屏',
                icon: 'Histogram',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['report-views-detail']
            },
            {
                code: 'custom-api',
                name: '接口服务',
                icon: 'MessageBox',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: []
            },
            {
                code: 'custom-form',
                name: '分享表单',
                icon: 'Files',
                authType: ['ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN'],
                childPage: ['form-list', 'form-query', 'form-setting']
            }
        ]
    },
    {
        code: 'tenant-management',
        name: '租户管理',
        icon: 'OfficeBuilding',
        authType: ['ROLE_TENANT_ADMIN'],
        children: [
            {
                code: 'tenant-user',
                name: '租户成员',
                icon: 'User',
                authType: ['ROLE_TENANT_ADMIN'],
                childPage: []
            }
        ]
    },
    {
        code: 'user-center',
        name: '用户中心',
        icon: 'UserFilled',
        authType: ['ROLE_SYS_ADMIN'],
        childPage: []
    },
    {
        code: 'tenant-list',
        name: '租户列表',
        icon: 'List',
        authType: ['ROLE_SYS_ADMIN'],
        childPage: []
    },
    {
        code: 'tenant-user',
        name: '租户成员',
        icon: 'User',
        authType: ['ROLE_SYS_ADMIN'],
        childPage: []
    },
    {
        code: 'oauth-management',
        name: '免密登录',
        icon: 'Position',
        authType: ['ROLE_SYS_ADMIN'],
        childPage: []
    },
    {
        code: 'license',
        name: '证书安装',
        icon: 'Files',
        authType: ['ROLE_SYS_ADMIN'],
        childPage: []
    }
]
