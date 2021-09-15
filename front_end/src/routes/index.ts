import { lazy } from 'react';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import {
  appConstants,
  resourceConstants,
  actionConstants,
} from 'constants/index';
import { t } from 'helpers/i18n';
import { permission } from 'helpers/common';

const { CATALOG } = appConstants;
const { BRAND } = resourceConstants;
const { READ, CREATE } = actionConstants;

// App pages
const Home = lazy(() => import('containers/Home'));
const BrandList = lazy(() => import('containers/Brand/BrandList'));
const BrandCreate = lazy(() => import('containers/Brand/BrandCreate'));

/*
 * If route has children, it's a parent menu (not link to any pages)
 * You can change permissions to your IAM's permissions
 */
const routes = [
  // This is a menu/route which has no children (sub-menu)
  {
    exact: true,
    path: '/',
    name: t('Home'),
    component: Home,
    icon: HomeOutlined,
  },
  // This is a parent menu which has children (sub-menu) and requires catalog:brand:X permission to display
  // X maybe read/create/update/delete...
  {
    path: '/brands',
    name: t('Brands'),
    permissions: [permission(CATALOG, BRAND)],
    icon: AppstoreOutlined,
    children: ['/brands', '/brands/create'], // Specifies sub-menus/routes (sub-menu path)
  },
  // This is a sub-menu/route which requires catalog:brand:read permission to display/access
  {
    exact: true,
    path: '/brands',
    name: t('Brands'),
    component: BrandList,
    permissions: [permission(CATALOG, BRAND, READ)],
  },
  // This is a sub-menu/route which requires catalog:brand:create permission to display/access
  {
    exact: true,
    path: '/brands/create',
    name: t('BrandCreate'),
    component: BrandCreate,
    permissions: [permission(CATALOG, BRAND, CREATE)],
  },
];

export default routes;
