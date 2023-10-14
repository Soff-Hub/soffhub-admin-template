import React from "react";




export const authRoutes = [
    {
        key: 'login',
        path: '/login',
        component: React.lazy(() => import('views/auth/login'))
    }
]


export const adminRoutes = [
    {
        key: 'home',
        path: '/*',
        component: React.lazy(() => import('views/home/home'))
    }
]

export const adminActionRoutes = [
    {
        key: 'dashboard',
        path: '/dashboard',
        component: React.lazy(() => import('views/home/pages/dashboard'))
    },
    {
        key: 'components',
        path: '/components',
        component: React.lazy(() => import('views/home/pages/components'))
    },
    {
        key: 'documentation',
        path: '/documentation',
        component: React.lazy(() => import('views/home/pages/documentation'))
    },
]