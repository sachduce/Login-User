export let getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
  }
  
  export let deleteCookie = (name) => {
    document.cookie = name + '='  + '; expires=' + '-1';
  }

  export const normalizeBoolean = value => {
    if (value === "true") {
        return true;
    }

    if (value === "false") {
        return false;
    }

    return value;
};