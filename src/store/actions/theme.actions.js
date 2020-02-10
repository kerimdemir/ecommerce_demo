import * as keys from '../keys/theme.key';
import _ from 'lodash';
import {Colors} from '../../themes';

let basketData = [];


const LIGHT_THEME = {
    TEMPLATE: '#1E1E1E',
    TEMPLATE_VIEW: '#1E1E1E',
    TEMPLATE_TEXT: '#FFF',

    TEMPLATE_COLOR: '#0F5ADF',
    BUTTON_ACTIVE_COLOR:'#0F5ADF',
    BUTTON_INACTIVE_COLOR:'#738185',
    LAYOUT_LINEAR_GRADIENT1:'#FFF',
    LAYOUT_LINEAR_GRADIENT2:'#EBEBEB',
    BLACK: '#2d2d2d',
    GREEN: '#278d3c',
    GREEN_LITE: '#41f25f',
    RED: '#8d262b',
    RED_LITE: '#e23e44',
    WHITE: '#FFF',
    GRAY:'#AEBBCC',
    FACEBOOK_COLOR: '#3b5998',
    LOGIN_COMPONENT_BORDER:'#a1a1a1',
    CARD_BORDER:'#a1a1a1',
    TEMPLATE_COLOR_RGBA: 'rgba(33, 168, 182, 1)',
    CARD_BACKGROUND: '#d5d5d5',
    SEARCH: '#E5E5E5',

    FAB_COLOR: '#21A8B6',
    VIEW_GRADIENT1: 'white',
    VIEW_GRADIENT2: 'black',
    black: '#000000',
};

const DARK_THEME = {
    TEMPLATE: '#ffffff',
    TEMPLATE_VIEW: '#1e1e1e',
    TEMPLATE_TEXT: '#FFF',

    TEMPLATE_COLOR: '#0F5ADF',
    BUTTON_ACTIVE_COLOR:'#0F5ADF',
    BUTTON_INACTIVE_COLOR:'#738185',
    LAYOUT_LINEAR_GRADIENT1:'#FFF',
    LAYOUT_LINEAR_GRADIENT2:'#EBEBEB',
    BLACK: '#2d2d2d',
    GREEN: '#278d3c',
    GREEN_LITE: '#41f25f',
    RED: '#8d262b',
    RED_LITE: '#e23e44',
    WHITE: '#FFF',
    GRAY:'#AEBBCC',
    FACEBOOK_COLOR: '#3b5998',
    LOGIN_COMPONENT_BORDER:'#a1a1a1',
    CARD_BORDER:'#a1a1a1',
    TEMPLATE_COLOR_RGBA: 'rgba(33, 168, 182, 1)',
    CARD_BACKGROUND: '#d5d5d5',
    SEARCH: '#E5E5E5',

    FAB_COLOR: '#21A8B6',
    VIEW_GRADIENT1: 'white',
    VIEW_GRADIENT2: 'black',
    black: '#000000',
};

export const setTheme = (theme) => dispatch => {


    if(theme=='dark') {
        dispatch({
            type: keys.DARK_THEME,
            payload:DARK_THEME
        });
    }
    else{
        dispatch({
            type: keys.LIGHT_THEME,
            payload: LIGHT_THEME
        });
    }
};
