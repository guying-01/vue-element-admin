/*
 * @Author       : gy
 * @Date         : 2021-01-04 19:56:52
 * @LastEditors  : gy
 * @LastEditTime : 2021-01-04 20:06:03
 * @FilePath     : /yufufei/src/settings.js
 * @Description  : 页面描述
 */
module.exports = {
  title: '预付费云平台',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
