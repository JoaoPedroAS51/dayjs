import { ModuleOptions } from './module'

export const makeImports = ({ locales, plugins }: ModuleOptions ) => {
  return ` // Generated by dayjs-nuxt-module
  import dayjs from 'dayjs'
  ${locales?.map(locale => `import ${locale} from 'dayjs/locale/${locale}'`).join('\n')}
  ${plugins?.map(plugin => `import ${plugin} from 'dayjs/plugin/${plugin}'`).join('\n')}

  ${locales?.map(locale => `dayjs.locale(${locale})`).join('\n')}
  ${plugins?.map(plugin => `dayjs.extend(${plugin})`).join('\n')}
  `
}