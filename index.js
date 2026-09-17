import { power_user } from '../../../power-user.js';
import { macros } from '../../../macros/macro-system.js';

const SOURCE = 'third-party:literal-user-tag';
const PLACEHOLDER = '\uE000ST_LITERAL_USER_TAG\uE001';

function protectLiteralUserTag(text) {
    return text.replace(/<user>/gi, PLACEHOLDER);
}

function restoreLiteralUserTag(text) {
    return text.replaceAll(PLACEHOLDER, '<user>');
}

function init() {
    macros.engine.addPreProcessor(protectLiteralUserTag, {
        priority: 15,
        source: SOURCE,
    });

    macros.engine.addPostProcessor(restoreLiteralUserTag, {
        priority: 1000,
        source: SOURCE,
    });

    if (!power_user.experimental_macro_engine) {
        toastr.warning(
            'Enable Experimental Macro Engine for this extension to work.',
            'Literal <user> Tag',
        );
    }

    console.info('[Literal <user> Tag] Extension loaded.');
}

jQuery(init);
