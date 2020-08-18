import colors from 'vuetify/es5/util/colors';
import IconSearch from '~/assets/images/svg/icon_search.svg?inline';

const search_icon = {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render () {
    const Tag = this.tag;
    return (
      <Tag>
        <IconSearch />
      </Tag>
    );
  }
};

export default {
  theme: {
    themes: {
      dark: {
        primary: '#208CB2',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: '#208CB2'
      }
    }
  },
  icons: {
    values: {
      search: {
        component: search_icon
      }
    }
  }
};
