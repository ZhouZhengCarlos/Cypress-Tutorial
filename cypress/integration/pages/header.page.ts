import Page from "../pages/page";

class HeaderPage extends Page {
    get dropdownUserProfile() {
        return "button#menu-button-3";
      }
      get dialogUserProfile() {
        return "[role=menu]";
      }
      get lblName() {
        return "[role=menu] > div:first-child > div > p";
      }
      get lblOrganization() {
        return "[role=menu] > div:first-child > div > i";
      }
      get lblSupport() {
        return "[role=menu] > div:first-child  > a > button";
      }
      get lblLogout() {
        return "#menuitem-5";
      }
}

export default new HeaderPage();