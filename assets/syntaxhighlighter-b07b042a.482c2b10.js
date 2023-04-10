var __defProp = Object.defineProperty;
var __name = (target2, value) => __defProp(target2, "name", { value, configurable: true });
import { I as memoize, l as logger } from "./iframe.16f10e94.js";
import { c as commonjsGlobal, w as window_1, _ as __awaiter, S as ScrollArea, a as __rest, A as ActionBar, b as _objectWithoutPropertiesLoose } from "./index.64c5d0bf.js";
import "./es.string.from-code-point.028af391.js";
import "./es.regexp.flags.63f8c339.js";
import { a as styled } from "./index.31bee4a5.js";
import { j as jsx$2, r as react, a as jsxs } from "./jsx-runtime.1846cd15.js";
import "./es.map.constructor.edb80200.js";
import "./es.number.to-fixed.45361398.js";
import "./string.c8a6e64c.js";
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
__name(_defineProperty2, "_defineProperty2");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
__name(_slicedToArray, "_slicedToArray");
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableRest, "_nonIterableRest");
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
__name(_unsupportedIterableToArray2, "_unsupportedIterableToArray2");
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
__name(_arrayLikeToArray2, "_arrayLikeToArray2");
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
__name(_iterableToArrayLimit, "_iterableToArrayLimit");
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
__name(_arrayWithHoles, "_arrayWithHoles");
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
__name(_typeof, "_typeof");
var jsx_1 = jsx;
jsx.displayName = "jsx";
jsx.aliases = [];
function jsx(Prism2) {
  (function(Prism3) {
    var javascript2 = Prism3.util.clone(Prism3.languages.javascript);
    var space2 = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function re2(source, flags) {
      source = source.replace(/<S>/g, function() {
        return space2;
      }).replace(/<BRACES>/g, function() {
        return braces;
      }).replace(/<SPREAD>/g, function() {
        return spread;
      });
      return RegExp(source, flags);
    }
    __name(re2, "re");
    spread = re2(spread).source;
    Prism3.languages.jsx = Prism3.languages.extend("markup", javascript2);
    Prism3.languages.jsx.tag.pattern = re2(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
    Prism3.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
    Prism3.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
    Prism3.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
    Prism3.languages.jsx.tag.inside["comment"] = javascript2["comment"];
    Prism3.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: re2(/<SPREAD>/.source),
        inside: Prism3.languages.jsx
      }
    }, Prism3.languages.jsx.tag);
    Prism3.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: re2(/=<BRACES>/.source),
        alias: "language-javascript",
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: Prism3.languages.jsx
        }
      }
    }, Prism3.languages.jsx.tag);
    var stringifyToken = /* @__PURE__ */ __name(function stringifyToken2(token) {
      if (!token) {
        return "";
      }
      if (typeof token === "string") {
        return token;
      }
      if (typeof token.content === "string") {
        return token.content;
      }
      return token.content.map(stringifyToken2).join("");
    }, "stringifyToken");
    var walkTokens = /* @__PURE__ */ __name(function walkTokens2(tokens) {
      var openedTags = [];
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var notTagNorBrace = false;
        if (typeof token !== "string") {
          if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
            if (token.content[0].content[0].content === "</") {
              if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                openedTags.pop();
              }
            } else {
              if (token.content[token.content.length - 1].content === "/>")
                ;
              else {
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                });
              }
            }
          } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
            openedTags[openedTags.length - 1].openedBraces++;
          } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
            openedTags[openedTags.length - 1].openedBraces--;
          } else {
            notTagNorBrace = true;
          }
        }
        if (notTagNorBrace || typeof token === "string") {
          if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
            var plainText = stringifyToken(token);
            if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
              plainText += stringifyToken(tokens[i + 1]);
              tokens.splice(i + 1, 1);
            }
            if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
              plainText = stringifyToken(tokens[i - 1]) + plainText;
              tokens.splice(i - 1, 1);
              i--;
            }
            tokens[i] = new Prism3.Token("plain-text", plainText, null, plainText);
          }
        }
        if (token.content && typeof token.content !== "string") {
          walkTokens2(token.content);
        }
      }
    }, "walkTokens");
    Prism3.hooks.add("after-tokenize", function(env) {
      if (env.language !== "jsx" && env.language !== "tsx") {
        return;
      }
      walkTokens(env.tokens);
    });
  })(Prism2);
}
__name(jsx, "jsx");
var jsx$1 = jsx_1;
var bash_1 = bash;
bash.displayName = "bash";
bash.aliases = ["shell"];
function bash(Prism2) {
  (function(Prism3) {
    var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
    var commandAfterHeredoc = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: true,
      alias: "punctuation",
      inside: null
    };
    var insideString = {
      bash: commandAfterHeredoc,
      environment: {
        pattern: RegExp("\\$" + envVars),
        alias: "constant"
      },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            variable: [{
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: true
            }, /^\$\(\(/],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + envVars),
              lookbehind: true,
              alias: "constant"
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
    Prism3.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: "important"
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      "function-name": [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: "function"
        },
        {
          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
          alias: "function"
        }
      ],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: true
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
            lookbehind: true,
            alias: "constant"
          }
        },
        alias: "variable",
        lookbehind: true
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true,
          inside: {
            bash: commandAfterHeredoc
          }
        },
        {
          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        },
        {
          pattern: /(^|[^$\\])'[^']*'/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: true,
          inside: {
            entity: insideString.entity
          }
        }
      ],
      environment: {
        pattern: RegExp("\\$?" + envVars),
        alias: "constant"
      },
      variable: insideString.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: true,
        alias: "class-name"
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      "file-descriptor": {
        pattern: /\B&\d\b/,
        alias: "important"
      },
      operator: {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          "file-descriptor": {
            pattern: /^\d/,
            alias: "important"
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    };
    commandAfterHeredoc.inside = Prism3.languages.bash;
    var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"];
    var inside = insideString.variable[1].inside;
    for (var i = 0; i < toBeCopied.length; i++) {
      inside[toBeCopied[i]] = Prism3.languages.bash[toBeCopied[i]];
    }
    Prism3.languages.shell = Prism3.languages.bash;
  })(Prism2);
}
__name(bash, "bash");
var bash$1 = bash_1;
var css_1 = css$1;
css$1.displayName = "css";
css$1.aliases = [];
function css$1(Prism2) {
  (function(Prism3) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism3.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      string: {
        pattern: string,
        greedy: true
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      punctuation: /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup2 = Prism3.languages.markup;
    if (markup2) {
      markup2.tag.addInlined("style", "css");
      markup2.tag.addAttribute("style", "css");
    }
  })(Prism2);
}
__name(css$1, "css$1");
var css$2 = css_1;
var jsExtras_1 = jsExtras;
jsExtras.displayName = "jsExtras";
jsExtras.aliases = [];
function jsExtras(Prism2) {
  (function(Prism3) {
    Prism3.languages.insertBefore("javascript", "function-variable", {
      "method-variable": {
        pattern: RegExp("(\\.\\s*)" + Prism3.languages.javascript["function-variable"].pattern.source),
        lookbehind: true,
        alias: ["function-variable", "method", "function", "property-access"]
      }
    });
    Prism3.languages.insertBefore("javascript", "function", {
      method: {
        pattern: RegExp("(\\.\\s*)" + Prism3.languages.javascript["function"].source),
        lookbehind: true,
        alias: ["function", "property-access"]
      }
    });
    Prism3.languages.insertBefore("javascript", "constant", {
      "known-class-name": [{
        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
        alias: "class-name"
      }, {
        pattern: /\b(?:[A-Z]\w*)Error\b/,
        alias: "class-name"
      }]
    });
    function withId(source, flags) {
      return RegExp(source.replace(/<ID>/g, function() {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }), flags);
    }
    __name(withId, "withId");
    Prism3.languages.insertBefore("javascript", "keyword", {
      imports: {
        pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
        lookbehind: true,
        inside: Prism3.languages.javascript
      },
      exports: {
        pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
        lookbehind: true,
        inside: Prism3.languages.javascript
      }
    });
    Prism3.languages.javascript["keyword"].unshift({
      pattern: /\b(?:as|default|export|from|import)\b/,
      alias: "module"
    }, {
      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow"
    }, {
      pattern: /\bnull\b/,
      alias: ["null", "nil"]
    }, {
      pattern: /\bundefined\b/,
      alias: "nil"
    });
    Prism3.languages.insertBefore("javascript", "operator", {
      spread: {
        pattern: /\.{3}/,
        alias: "operator"
      },
      arrow: {
        pattern: /=>/,
        alias: "operator"
      }
    });
    Prism3.languages.insertBefore("javascript", "punctuation", {
      "property-access": {
        pattern: withId(/(\.\s*)#?<ID>/.source),
        lookbehind: true
      },
      "maybe-class-name": {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: true
      },
      dom: {
        pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: "variable"
      },
      console: {
        pattern: /\bconsole(?=\s*\.)/,
        alias: "class-name"
      }
    });
    var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
    for (var i = 0; i < maybeClassNameTokens.length; i++) {
      var token = maybeClassNameTokens[i];
      var value = Prism3.languages.javascript[token];
      if (Prism3.util.type(value) === "RegExp") {
        value = Prism3.languages.javascript[token] = {
          pattern: value
        };
      }
      var inside = value.inside || {};
      value.inside = inside;
      inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
    }
  })(Prism2);
}
__name(jsExtras, "jsExtras");
var jsExtras$1 = jsExtras_1;
var json_1 = json;
json.displayName = "json";
json.aliases = ["webmanifest"];
function json(Prism2) {
  Prism2.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  };
  Prism2.languages.webmanifest = Prism2.languages.json;
}
__name(json, "json");
var json$1 = json_1;
var graphql_1 = graphql;
graphql.displayName = "graphql";
graphql.aliases = [];
function graphql(Prism2) {
  Prism2.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: true,
      alias: "string",
      inside: {
        "language-markdown": {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: Prism2.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: "function"
    },
    "attr-name": {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: true
    },
    "atom-input": {
      pattern: /\b[A-Z]\w*Input\b/,
      alias: "class-name"
    },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    "class-name": {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: true
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: "function"
    },
    "definition-mutation": {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: "function"
    },
    "definition-query": {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: "function"
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    "property-query": /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
  };
  Prism2.hooks.add("after-tokenize", /* @__PURE__ */ __name(function afterTokenizeGraphql(env) {
    if (env.language !== "graphql") {
      return;
    }
    var validTokens = env.tokens.filter(function(token) {
      return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
    });
    var currentIndex = 0;
    function getToken(offset) {
      return validTokens[currentIndex + offset];
    }
    __name(getToken, "getToken");
    function isTokenType(types2, offset) {
      offset = offset || 0;
      for (var i2 = 0; i2 < types2.length; i2++) {
        var token = getToken(i2 + offset);
        if (!token || token.type !== types2[i2]) {
          return false;
        }
      }
      return true;
    }
    __name(isTokenType, "isTokenType");
    function findClosingBracket(open, close) {
      var stackHeight = 1;
      for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
        var token = validTokens[i2];
        var content = token.content;
        if (token.type === "punctuation" && typeof content === "string") {
          if (open.test(content)) {
            stackHeight++;
          } else if (close.test(content)) {
            stackHeight--;
            if (stackHeight === 0) {
              return i2;
            }
          }
        }
      }
      return -1;
    }
    __name(findClosingBracket, "findClosingBracket");
    function addAlias(token, alias2) {
      var aliases = token.alias;
      if (!aliases) {
        token.alias = aliases = [];
      } else if (!Array.isArray(aliases)) {
        token.alias = aliases = [aliases];
      }
      aliases.push(alias2);
    }
    __name(addAlias, "addAlias");
    for (; currentIndex < validTokens.length; ) {
      var startToken = validTokens[currentIndex++];
      if (startToken.type === "keyword" && startToken.content === "mutation") {
        var inputVariables = [];
        if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
          currentIndex += 2;
          var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
          if (definitionEnd === -1) {
            continue;
          }
          for (; currentIndex < definitionEnd; currentIndex++) {
            var t = getToken(0);
            if (t.type === "variable") {
              addAlias(t, "variable-input");
              inputVariables.push(t.content);
            }
          }
          currentIndex = definitionEnd + 1;
        }
        if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
          currentIndex++;
          addAlias(getToken(0), "property-mutation");
          if (inputVariables.length > 0) {
            var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
            if (mutationEnd === -1) {
              continue;
            }
            for (var i = currentIndex; i < mutationEnd; i++) {
              var varToken = validTokens[i];
              if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
                addAlias(varToken, "variable-input");
              }
            }
          }
        }
      }
    }
  }, "afterTokenizeGraphql"));
}
__name(graphql, "graphql");
var graphql$1 = graphql_1;
var markup_1 = markup$1;
markup$1.displayName = "markup";
markup$1.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
function markup$1(Prism2) {
  Prism2.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    value: /* @__PURE__ */ __name(function addInlined(tagName, lang2) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang2] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang2]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang2] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang2]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }, "addInlined")
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
    value: /* @__PURE__ */ __name(function value(attrName, lang2) {
      Prism2.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang2, "language-" + lang2],
                inside: Prism2.languages[lang2]
              },
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          }
        }
      });
    }, "value")
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
}
__name(markup$1, "markup$1");
var markup$2 = markup_1;
var markdown_1 = markdown;
markdown.displayName = "markdown";
markdown.aliases = ["md"];
function markdown(Prism2) {
  (function(Prism3) {
    var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function createInline(pattern) {
      pattern = pattern.replace(/<inner>/g, function() {
        return inner;
      });
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
    }
    __name(createInline, "createInline");
    var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
    var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
      return tableCell;
    });
    var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    Prism3.languages.markdown = Prism3.languages.extend("markup", {});
    Prism3.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: Prism3.languages.yaml
          }
        }
      },
      blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
      },
      table: {
        pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
            lookbehind: true,
            inside: {
              "table-data": {
                pattern: RegExp(tableCell),
                inside: Prism3.languages.markdown
              },
              punctuation: /\|/
            }
          },
          "table-line": {
            pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          "table-header-row": {
            pattern: RegExp("^" + tableRow + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(tableCell),
                alias: "important",
                inside: Prism3.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [{
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: true,
        alias: "keyword"
      }, {
        pattern: /^```[\s\S]*?^```$/m,
        greedy: true,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: true
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: true
          },
          punctuation: /```/
        }
      }],
      title: [{
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      }, {
        pattern: /(^\s*)#.+/m,
        lookbehind: true,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: "punctuation"
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: "punctuation"
      },
      "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
      },
      bold: {
        pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {}
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {}
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {}
          },
          punctuation: /~~?/
        }
      },
      "code-snippet": {
        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: true,
        greedy: true,
        alias: ["code", "keyword"]
      },
      url: {
        pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {}
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: true
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: true
          }
        }
      }
    });
    ["url", "bold", "italic", "strike"].forEach(function(token) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
        if (token !== inside) {
          Prism3.languages.markdown[token].inside.content.inside[inside] = Prism3.languages.markdown[inside];
        }
      });
    });
    Prism3.hooks.add("after-tokenize", function(env) {
      if (env.language !== "markdown" && env.language !== "md") {
        return;
      }
      function walkTokens(tokens) {
        if (!tokens || typeof tokens === "string") {
          return;
        }
        for (var i = 0, l2 = tokens.length; i < l2; i++) {
          var token = tokens[i];
          if (token.type !== "code") {
            walkTokens(token.content);
            continue;
          }
          var codeLang = token.content[1];
          var codeBlock = token.content[3];
          if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
            var lang2 = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            lang2 = (/[a-z][\w-]*/i.exec(lang2) || [""])[0].toLowerCase();
            var alias2 = "language-" + lang2;
            if (!codeBlock.alias) {
              codeBlock.alias = [alias2];
            } else if (typeof codeBlock.alias === "string") {
              codeBlock.alias = [codeBlock.alias, alias2];
            } else {
              codeBlock.alias.push(alias2);
            }
          }
        }
      }
      __name(walkTokens, "walkTokens");
      walkTokens(env.tokens);
    });
    Prism3.hooks.add("wrap", function(env) {
      if (env.type !== "code-block") {
        return;
      }
      var codeLang = "";
      for (var i = 0, l2 = env.classes.length; i < l2; i++) {
        var cls = env.classes[i];
        var match = /language-(.+)/.exec(cls);
        if (match) {
          codeLang = match[1];
          break;
        }
      }
      var grammar = Prism3.languages[codeLang];
      if (!grammar) {
        if (codeLang && codeLang !== "none" && Prism3.plugins.autoloader) {
          var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
          env.attributes["id"] = id;
          Prism3.plugins.autoloader.loadLanguages(codeLang, function() {
            var ele = document.getElementById(id);
            if (ele) {
              ele.innerHTML = Prism3.highlight(ele.textContent, Prism3.languages[codeLang], codeLang);
            }
          });
        }
      } else {
        env.content = Prism3.highlight(textContent(env.content.value), grammar, codeLang);
      }
    });
    var tagPattern = RegExp(Prism3.languages.markup.tag.pattern.source, "gi");
    var KNOWN_ENTITY_NAMES = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    };
    var fromCodePoint = String.fromCodePoint || String.fromCharCode;
    function textContent(html2) {
      var text = html2.replace(tagPattern, "");
      text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, code) {
        code = code.toLowerCase();
        if (code[0] === "#") {
          var value;
          if (code[1] === "x") {
            value = parseInt(code.slice(2), 16);
          } else {
            value = Number(code.slice(1));
          }
          return fromCodePoint(value);
        } else {
          var known = KNOWN_ENTITY_NAMES[code];
          if (known) {
            return known;
          }
          return m;
        }
      });
      return text;
    }
    __name(textContent, "textContent");
    Prism3.languages.md = Prism3.languages.markdown;
  })(Prism2);
}
__name(markdown, "markdown");
var markdown$1 = markdown_1;
var yaml_1 = yaml;
yaml.displayName = "yaml";
yaml.aliases = ["yml"];
function yaml(Prism2) {
  (function(Prism3) {
    var anchorOrAlias = /[*&][^\s[\]{},]+/;
    var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
    var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
    var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
      return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
    });
    var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function createValuePattern(value, flags) {
      flags = (flags || "").replace(/m/g, "") + "m";
      var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
        return properties;
      }).replace(/<<value>>/g, function() {
        return value;
      });
      return RegExp(pattern, flags);
    }
    __name(createValuePattern, "createValuePattern");
    Prism3.languages.yaml = {
      scalar: {
        pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
          return properties;
        })),
        lookbehind: true,
        alias: "string"
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
          return properties;
        }).replace(/<<key>>/g, function() {
          return "(?:" + plainKey + "|" + string + ")";
        })),
        lookbehind: true,
        greedy: true,
        alias: "atrule"
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: true,
        alias: "important"
      },
      datetime: {
        pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
        lookbehind: true,
        alias: "number"
      },
      boolean: {
        pattern: createValuePattern(/false|true/.source, "i"),
        lookbehind: true,
        alias: "important"
      },
      null: {
        pattern: createValuePattern(/null|~/.source, "i"),
        lookbehind: true,
        alias: "important"
      },
      string: {
        pattern: createValuePattern(string),
        lookbehind: true,
        greedy: true
      },
      number: {
        pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
        lookbehind: true
      },
      tag,
      important: anchorOrAlias,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    };
    Prism3.languages.yml = Prism3.languages.yaml;
  })(Prism2);
}
__name(yaml, "yaml");
var yaml$1 = yaml_1;
var typescript_1 = typescript;
typescript.displayName = "typescript";
typescript.aliases = ["ts"];
function typescript(Prism2) {
  (function(Prism3) {
    Prism3.languages.typescript = Prism3.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    });
    Prism3.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    );
    delete Prism3.languages.typescript["parameter"];
    delete Prism3.languages.typescript["literal-property"];
    var typeInside = Prism3.languages.extend("typescript", {});
    delete typeInside["class-name"];
    Prism3.languages.typescript["class-name"].inside = typeInside;
    Prism3.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: typeInside
          }
        }
      }
    });
    Prism3.languages.ts = Prism3.languages.typescript;
  })(Prism2);
}
__name(typescript, "typescript");
var typescript$1 = typescript_1;
var refractorJsx = jsx_1;
var refractorTypescript = typescript_1;
var tsx_1 = tsx;
tsx.displayName = "tsx";
tsx.aliases = [];
function tsx(Prism2) {
  Prism2.register(refractorJsx);
  Prism2.register(refractorTypescript);
  (function(Prism3) {
    var typescript2 = Prism3.util.clone(Prism3.languages.typescript);
    Prism3.languages.tsx = Prism3.languages.extend("jsx", typescript2);
    delete Prism3.languages.tsx["parameter"];
    delete Prism3.languages.tsx["literal-property"];
    var tag = Prism3.languages.tsx.tag;
    tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
    tag.lookbehind = true;
  })(Prism2);
}
__name(tsx, "tsx");
var tsx$1 = tsx_1;
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target2[key] = source[key];
    }
  }
  return target2;
}
__name(_objectWithoutProperties, "_objectWithoutProperties");
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
__name(_arrayWithoutHoles, "_arrayWithoutHoles");
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
__name(_iterableToArray, "_iterableToArray");
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableSpread, "_nonIterableSpread");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
__name(_toConsumableArray, "_toConsumableArray");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
__name(_defineProperty, "_defineProperty");
function _objectSpread(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target2, key, source[key]);
    });
  }
  return target2;
}
__name(_objectSpread, "_objectSpread");
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1)
    return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
__name(powerSetPermutations, "powerSetPermutations");
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1)
    return classNames;
  var key = classNames.join(".");
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
__name(getClassNameCombinations, "getClassNameCombinations");
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread({}, styleObject, stylesheet[className]);
  }, elementStyle);
}
__name(createStyleObject, "createStyleObject");
function createClassNameString(classNames) {
  return classNames.join(" ");
}
__name(createClassNameString, "createClassNameString");
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
__name(createChildren, "createChildren");
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style2 = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
  if (type === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread({}, properties, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split(".").forEach(function(className2) {
          if (!classes.includes(className2))
            classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread({}, properties, {
        className: createClassNameString(className) || void 0,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style2), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ jsx$2(TagName, {
      ...props,
      children
    }, key);
  }
}
__name(createElement, "createElement");
var checkForListedLanguage = /* @__PURE__ */ __name(function checkForListedLanguage2(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
}, "checkForListedLanguage");
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
__name(getNewLines, "getNewLines");
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style2 = _ref.style;
  return lines.map(function(_, i) {
    var number2 = i + startingLineNumber;
    return /* @__PURE__ */ jsx$2("span", {
      className: "react-syntax-highlighter-line-number",
      style: typeof style2 === "function" ? style2(number2) : style2,
      children: "".concat(number2, "\n")
    }, "line-".concat(i));
  });
}
__name(getAllLineNumbers, "getAllLineNumbers");
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return /* @__PURE__ */ jsx$2("code", {
    style: Object.assign({}, codeStyle, containerStyle),
    children: getAllLineNumbers({
      lines: codeString.replace(/\n$/, "").split("\n"),
      style: numberStyle,
      startingLineNumber
    })
  });
}
__name(AllLineNumbers, "AllLineNumbers");
function getEmWidthOfNumber(num2) {
  return "".concat(num2.toString().length, ".25em");
}
__name(getEmWidthOfNumber, "getEmWidthOfNumber");
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: inlineLineNumberStyle
    },
    children: [{
      type: "text",
      value: lineNumber
    }]
  };
}
__name(getInlineLineNumber, "getInlineLineNumber");
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = {
    display: "inline-block",
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  };
  var customLineNumberStyle = typeof lineNumberStyle === "function" ? lineNumberStyle(lineNumber) : lineNumberStyle;
  var assembledStyle = _objectSpread({}, defaultLineNumberStyle, customLineNumberStyle);
  return assembledStyle;
}
__name(assembleLineNumberStyles, "assembleLineNumberStyles");
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === "function" ? lineProps(lineNumber) : lineProps;
  properties["className"] = className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread({}, properties.style, {
      display: "flex"
    });
  }
  return {
    type: "element",
    tagName: "span",
    properties,
    children
  };
}
__name(createLineElement, "createLineElement");
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === "text") {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }
  return newTree;
}
__name(flattenCodeTree, "flattenCodeTree");
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines
    });
  }
  __name(createWrappedLine, "createWrappedLine");
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  __name(createUnwrappedLine, "createUnwrappedLine");
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  __name(createLine, "createLine");
  var _loop = /* @__PURE__ */ __name(function _loop2() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split("\n");
      splitValue.forEach(function(text, i) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: "text",
          value: "".concat(text, "\n")
        };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          var _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: "text",
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [newChild];
            var _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  }, "_loop");
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
__name(processLines, "processLines");
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}
__name(defaultRenderer, "defaultRenderer");
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== "undefined";
}
__name(isHighlightJs, "isHighlightJs");
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);
    if (language === "text") {
      return {
        value: defaultCodeValue,
        language: "text"
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== "text" ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
__name(getCodeTree, "getCodeTree");
function highlight$1(defaultAstGenerator, defaultStyle) {
  return /* @__PURE__ */ __name(function SyntaxHighlighter3(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style2 = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : void 0,
      style: _objectSpread({}, style2['code[class*="language-"]'], style2['code[class*="language-'.concat(language, '"]')])
    } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /* @__PURE__ */ jsx$2(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style2.hljs || style2['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    };
    var generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs";
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });
    if (!astGenerator) {
      return /* @__PURE__ */ jsxs(PreTag, {
        ...preProps,
        children: [allLineNumbers, /* @__PURE__ */ jsx$2(CodeTag, {
          ...codeTagProps,
          children: code
        })]
      });
    }
    if (wrapLines === void 0 && renderer || wrapLongLines)
      wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: "text",
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread({}, codeTagProps.style, {
        whiteSpace: "pre-wrap"
      });
    } else {
      codeTagProps.style = _objectSpread({}, codeTagProps.style, {
        whiteSpace: "pre"
      });
    }
    return /* @__PURE__ */ jsx$2(PreTag, {
      ...preProps,
      children: /* @__PURE__ */ jsxs(CodeTag, {
        ...codeTagProps,
        children: [!showInlineLineNumbers && allLineNumbers, renderer({
          rows,
          stylesheet: style2,
          useInlineStyles
        })]
      })
    });
  }, "SyntaxHighlighter");
}
__name(highlight$1, "highlight$1");
var immutable = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
  var target2 = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
}
__name(extend, "extend");
var schema$1 = Schema$2;
var proto$1 = Schema$2.prototype;
proto$1.space = null;
proto$1.normal = {};
proto$1.property = {};
function Schema$2(property, normal, space2) {
  this.property = property;
  this.normal = normal;
  if (space2) {
    this.space = space2;
  }
}
__name(Schema$2, "Schema$2");
var xtend = immutable;
var Schema$1 = schema$1;
var merge_1 = merge$1;
function merge$1(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index = -1;
  var info2;
  var space2;
  while (++index < length) {
    info2 = definitions[index];
    property.push(info2.property);
    normal.push(info2.normal);
    space2 = info2.space;
  }
  return new Schema$1(xtend.apply(null, property), xtend.apply(null, normal), space2);
}
__name(merge$1, "merge$1");
var normalize_1 = normalize$3;
function normalize$3(value) {
  return value.toLowerCase();
}
__name(normalize$3, "normalize$3");
var info = Info$2;
var proto = Info$2.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto.boolean = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;
function Info$2(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}
__name(Info$2, "Info$2");
var types$3 = {};
var powers = 0;
types$3.boolean = increment();
types$3.booleanish = increment();
types$3.overloadedBoolean = increment();
types$3.number = increment();
types$3.spaceSeparated = increment();
types$3.commaSeparated = increment();
types$3.commaOrSpaceSeparated = increment();
function increment() {
  return Math.pow(2, ++powers);
}
__name(increment, "increment");
var Info$1 = info;
var types$2 = types$3;
var definedInfo = DefinedInfo$2;
DefinedInfo$2.prototype = new Info$1();
DefinedInfo$2.prototype.defined = true;
var checks = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"];
var checksLength = checks.length;
function DefinedInfo$2(property, attribute, mask, space2) {
  var index = -1;
  var check2;
  mark(this, "space", space2);
  Info$1.call(this, property, attribute);
  while (++index < checksLength) {
    check2 = checks[index];
    mark(this, check2, (mask & types$2[check2]) === types$2[check2]);
  }
}
__name(DefinedInfo$2, "DefinedInfo$2");
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
__name(mark, "mark");
var normalize$2 = normalize_1;
var Schema = schema$1;
var DefinedInfo$1 = definedInfo;
var create_1 = create$5;
function create$5(definition) {
  var space2 = definition.space;
  var mustUseProperty = definition.mustUseProperty || [];
  var attributes2 = definition.attributes || {};
  var props = definition.properties;
  var transform = definition.transform;
  var property = {};
  var normal = {};
  var prop2;
  var info2;
  for (prop2 in props) {
    info2 = new DefinedInfo$1(prop2, transform(attributes2, prop2), props[prop2], space2);
    if (mustUseProperty.indexOf(prop2) !== -1) {
      info2.mustUseProperty = true;
    }
    property[prop2] = info2;
    normal[normalize$2(prop2)] = prop2;
    normal[normalize$2(info2.attribute)] = prop2;
  }
  return new Schema(property, normal, space2);
}
__name(create$5, "create$5");
var create$4 = create_1;
var xlink$1 = create$4({
  space: "xlink",
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function xlinkTransform(_, prop2) {
  return "xlink:" + prop2.slice(5).toLowerCase();
}
__name(xlinkTransform, "xlinkTransform");
var create$3 = create_1;
var xml$1 = create$3({
  space: "xml",
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
function xmlTransform(_, prop2) {
  return "xml:" + prop2.slice(3).toLowerCase();
}
__name(xmlTransform, "xmlTransform");
var caseSensitiveTransform_1 = caseSensitiveTransform$1;
function caseSensitiveTransform$1(attributes2, attribute) {
  return attribute in attributes2 ? attributes2[attribute] : attribute;
}
__name(caseSensitiveTransform$1, "caseSensitiveTransform$1");
var caseSensitiveTransform = caseSensitiveTransform_1;
var caseInsensitiveTransform_1 = caseInsensitiveTransform$2;
function caseInsensitiveTransform$2(attributes2, property) {
  return caseSensitiveTransform(attributes2, property.toLowerCase());
}
__name(caseInsensitiveTransform$2, "caseInsensitiveTransform$2");
var create$2 = create_1;
var caseInsensitiveTransform$1 = caseInsensitiveTransform_1;
var xmlns$1 = create$2({
  space: "xmlns",
  attributes: {
    xmlnsxlink: "xmlns:xlink"
  },
  transform: caseInsensitiveTransform$1,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});
var types$1 = types$3;
var create$1 = create_1;
var booleanish$1 = types$1.booleanish;
var number$1 = types$1.number;
var spaceSeparated$1 = types$1.spaceSeparated;
var aria$1 = create$1({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish$1,
    ariaAutoComplete: null,
    ariaBusy: booleanish$1,
    ariaChecked: booleanish$1,
    ariaColCount: number$1,
    ariaColIndex: number$1,
    ariaColSpan: number$1,
    ariaControls: spaceSeparated$1,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated$1,
    ariaDetails: null,
    ariaDisabled: booleanish$1,
    ariaDropEffect: spaceSeparated$1,
    ariaErrorMessage: null,
    ariaExpanded: booleanish$1,
    ariaFlowTo: spaceSeparated$1,
    ariaGrabbed: booleanish$1,
    ariaHasPopup: null,
    ariaHidden: booleanish$1,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated$1,
    ariaLevel: number$1,
    ariaLive: null,
    ariaModal: booleanish$1,
    ariaMultiLine: booleanish$1,
    ariaMultiSelectable: booleanish$1,
    ariaOrientation: null,
    ariaOwns: spaceSeparated$1,
    ariaPlaceholder: null,
    ariaPosInSet: number$1,
    ariaPressed: booleanish$1,
    ariaReadOnly: booleanish$1,
    ariaRelevant: null,
    ariaRequired: booleanish$1,
    ariaRoleDescription: spaceSeparated$1,
    ariaRowCount: number$1,
    ariaRowIndex: number$1,
    ariaRowSpan: number$1,
    ariaSelected: booleanish$1,
    ariaSetSize: number$1,
    ariaSort: null,
    ariaValueMax: number$1,
    ariaValueMin: number$1,
    ariaValueNow: number$1,
    ariaValueText: null,
    role: null
  }
});
function ariaTransform(_, prop2) {
  return prop2 === "role" ? prop2 : "aria-" + prop2.slice(4).toLowerCase();
}
__name(ariaTransform, "ariaTransform");
var types = types$3;
var create = create_1;
var caseInsensitiveTransform = caseInsensitiveTransform_1;
var boolean = types.boolean;
var overloadedBoolean = types.overloadedBoolean;
var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
var html$2 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
var merge = merge_1;
var xlink = xlink$1;
var xml = xml$1;
var xmlns = xmlns$1;
var aria = aria$1;
var html$1 = html$2;
var html_1$1 = merge([xml, xlink, xmlns, aria, html$1]);
var normalize$1 = normalize_1;
var DefinedInfo = definedInfo;
var Info = info;
var data = "data";
var find_1 = find$1;
var valid = /^data[-\w.:]+$/i;
var dash$1 = /-[a-z]/g;
var cap$1 = /[A-Z]/g;
function find$1(schema2, value) {
  var normal = normalize$1(value);
  var prop2 = value;
  var Type = Info;
  if (normal in schema2.normal) {
    return schema2.property[schema2.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    if (value.charAt(4) === "-") {
      prop2 = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }
    Type = DefinedInfo;
  }
  return new Type(prop2, value);
}
__name(find$1, "find$1");
function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash$1, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}
__name(datasetToProperty, "datasetToProperty");
function datasetToAttribute(property) {
  var value = property.slice(4);
  if (dash$1.test(value)) {
    return property;
  }
  value = value.replace(cap$1, kebab);
  if (value.charAt(0) !== "-") {
    value = "-" + value;
  }
  return data + value;
}
__name(datasetToAttribute, "datasetToAttribute");
function kebab($0) {
  return "-" + $0.toLowerCase();
}
__name(kebab, "kebab");
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
__name(camelcase, "camelcase");
var hastUtilParseSelector = parse$3;
var search = /[#.]/g;
function parse$3(selector, defaultTagName) {
  var value = selector || "";
  var name2 = defaultTagName || "div";
  var props = {};
  var start = 0;
  var subvalue;
  var previous;
  var match;
  while (start < value.length) {
    search.lastIndex = start;
    match = search.exec(value);
    subvalue = value.slice(start, match ? match.index : value.length);
    if (subvalue) {
      if (!previous) {
        name2 = subvalue;
      } else if (previous === "#") {
        props.id = subvalue;
      } else if (props.className) {
        props.className.push(subvalue);
      } else {
        props.className = [subvalue];
      }
      start += subvalue.length;
    }
    if (match) {
      previous = match[0];
      start++;
    }
  }
  return {
    type: "element",
    tagName: name2,
    properties: props,
    children: []
  };
}
__name(parse$3, "parse$3");
var spaceSeparatedTokens = {};
spaceSeparatedTokens.parse = parse$2;
spaceSeparatedTokens.stringify = stringify$2;
var empty$2 = "";
var space$2 = " ";
var whiteSpace = /[ \t\n\r\f]+/g;
function parse$2(value) {
  var input = String(value || empty$2).trim();
  return input === empty$2 ? [] : input.split(whiteSpace);
}
__name(parse$2, "parse$2");
function stringify$2(values) {
  return values.join(space$2).trim();
}
__name(stringify$2, "stringify$2");
var commaSeparatedTokens = {};
commaSeparatedTokens.parse = parse$1;
commaSeparatedTokens.stringify = stringify$1;
var comma$1 = ",";
var space$1 = " ";
var empty$1 = "";
function parse$1(value) {
  var values = [];
  var input = String(value || empty$1);
  var index = input.indexOf(comma$1);
  var lastIndex = 0;
  var end = false;
  var val;
  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }
    val = input.slice(lastIndex, index).trim();
    if (val || !end) {
      values.push(val);
    }
    lastIndex = index + 1;
    index = input.indexOf(comma$1, lastIndex);
  }
  return values;
}
__name(parse$1, "parse$1");
function stringify$1(values, options) {
  var settings = options || {};
  var left = settings.padLeft === false ? empty$1 : space$1;
  var right = settings.padRight ? space$1 : empty$1;
  if (values[values.length - 1] === empty$1) {
    values = values.concat(empty$1);
  }
  return values.join(right + comma$1 + left).trim();
}
__name(stringify$1, "stringify$1");
var find = find_1;
var normalize = normalize_1;
var parseSelector = hastUtilParseSelector;
var spaces = spaceSeparatedTokens.parse;
var commas = commaSeparatedTokens.parse;
var factory_1 = factory$1;
var own$3 = {}.hasOwnProperty;
function factory$1(schema2, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
  return h2;
  function h2(selector, properties) {
    var node = parseSelector(selector, defaultTagName);
    var children = Array.prototype.slice.call(arguments, 2);
    var name2 = node.tagName.toLowerCase();
    var property;
    node.tagName = adjust && own$3.call(adjust, name2) ? adjust[name2] : name2;
    if (properties && isChildren(properties, node)) {
      children.unshift(properties);
      properties = null;
    }
    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property]);
      }
    }
    addChild(node.children, children);
    if (node.tagName === "template") {
      node.content = {
        type: "root",
        children: node.children
      };
      node.children = [];
    }
    return node;
  }
  __name(h2, "h");
  function addProperty(properties, key, value) {
    var info2;
    var property;
    var result;
    if (value === null || value === void 0 || value !== value) {
      return;
    }
    info2 = find(schema2, key);
    property = info2.property;
    result = value;
    if (typeof result === "string") {
      if (info2.spaceSeparated) {
        result = spaces(result);
      } else if (info2.commaSeparated) {
        result = commas(result);
      } else if (info2.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(" "));
      }
    }
    if (property === "style" && typeof value !== "string") {
      result = style(result);
    }
    if (property === "className" && properties.className) {
      result = properties.className.concat(result);
    }
    properties[property] = parsePrimitives(info2, property, result);
  }
  __name(addProperty, "addProperty");
}
__name(factory$1, "factory$1");
function isChildren(value, node) {
  return typeof value === "string" || "length" in value || isNode(node.tagName, value);
}
__name(isChildren, "isChildren");
function isNode(tagName, value) {
  var type = value.type;
  if (tagName === "input" || !type || typeof type !== "string") {
    return false;
  }
  if (_typeof(value.children) === "object" && "length" in value.children) {
    return true;
  }
  type = type.toLowerCase();
  if (tagName === "button") {
    return type !== "menu" && type !== "submit" && type !== "reset" && type !== "button";
  }
  return "value" in value;
}
__name(isNode, "isNode");
function addChild(nodes, value) {
  var index;
  var length;
  if (typeof value === "string" || typeof value === "number") {
    nodes.push({
      type: "text",
      value: String(value)
    });
    return;
  }
  if (_typeof(value) === "object" && "length" in value) {
    index = -1;
    length = value.length;
    while (++index < length) {
      addChild(nodes, value[index]);
    }
    return;
  }
  if (_typeof(value) !== "object" || !("type" in value)) {
    throw new Error("Expected node, nodes, or string, got `" + value + "`");
  }
  nodes.push(value);
}
__name(addChild, "addChild");
function parsePrimitives(info2, name2, value) {
  var index;
  var length;
  var result;
  if (_typeof(value) !== "object" || !("length" in value)) {
    return parsePrimitive(info2, name2, value);
  }
  length = value.length;
  index = -1;
  result = [];
  while (++index < length) {
    result[index] = parsePrimitive(info2, name2, value[index]);
  }
  return result;
}
__name(parsePrimitives, "parsePrimitives");
function parsePrimitive(info2, name2, value) {
  var result = value;
  if (info2.number || info2.positiveNumber) {
    if (!isNaN(result) && result !== "") {
      result = Number(result);
    }
  } else if (info2.boolean || info2.overloadedBoolean) {
    if (typeof result === "string" && (result === "" || normalize(value) === normalize(name2))) {
      result = true;
    }
  }
  return result;
}
__name(parsePrimitive, "parsePrimitive");
function style(value) {
  var result = [];
  var key;
  for (key in value) {
    result.push([key, value[key]].join(": "));
  }
  return result.join("; ");
}
__name(style, "style");
function createAdjustMap(values) {
  var length = values.length;
  var index = -1;
  var result = {};
  var value;
  while (++index < length) {
    value = values[index];
    result[value.toLowerCase()] = value;
  }
  return result;
}
__name(createAdjustMap, "createAdjustMap");
var schema = html_1$1;
var factory = factory_1;
var html = factory(schema, "div");
html.displayName = "html";
var html_1 = html;
var hastscript = html_1;
var AElig$1 = "\xC6";
var AMP$1 = "&";
var Aacute$1 = "\xC1";
var Acirc$1 = "\xC2";
var Agrave$1 = "\xC0";
var Aring$1 = "\xC5";
var Atilde$1 = "\xC3";
var Auml$1 = "\xC4";
var COPY$1 = "\xA9";
var Ccedil$1 = "\xC7";
var ETH$1 = "\xD0";
var Eacute$1 = "\xC9";
var Ecirc$1 = "\xCA";
var Egrave$1 = "\xC8";
var Euml$1 = "\xCB";
var GT$1 = ">";
var Iacute$1 = "\xCD";
var Icirc$1 = "\xCE";
var Igrave$1 = "\xCC";
var Iuml$1 = "\xCF";
var LT$1 = "<";
var Ntilde$1 = "\xD1";
var Oacute$1 = "\xD3";
var Ocirc$1 = "\xD4";
var Ograve$1 = "\xD2";
var Oslash$1 = "\xD8";
var Otilde$1 = "\xD5";
var Ouml$1 = "\xD6";
var QUOT$1 = '"';
var REG$1 = "\xAE";
var THORN$1 = "\xDE";
var Uacute$1 = "\xDA";
var Ucirc$1 = "\xDB";
var Ugrave$1 = "\xD9";
var Uuml$1 = "\xDC";
var Yacute$1 = "\xDD";
var aacute$1 = "\xE1";
var acirc$1 = "\xE2";
var acute$1 = "\xB4";
var aelig$1 = "\xE6";
var agrave$1 = "\xE0";
var amp$1 = "&";
var aring$1 = "\xE5";
var atilde$1 = "\xE3";
var auml$1 = "\xE4";
var brvbar$1 = "\xA6";
var ccedil$1 = "\xE7";
var cedil$1 = "\xB8";
var cent$1 = "\xA2";
var copy$1 = "\xA9";
var curren$1 = "\xA4";
var deg$1 = "\xB0";
var divide$1 = "\xF7";
var eacute$1 = "\xE9";
var ecirc$1 = "\xEA";
var egrave$1 = "\xE8";
var eth$1 = "\xF0";
var euml$1 = "\xEB";
var frac12$1 = "\xBD";
var frac14$1 = "\xBC";
var frac34$1 = "\xBE";
var gt$1 = ">";
var iacute$1 = "\xED";
var icirc$1 = "\xEE";
var iexcl$1 = "\xA1";
var igrave$1 = "\xEC";
var iquest$1 = "\xBF";
var iuml$1 = "\xEF";
var laquo$1 = "\xAB";
var lt$1 = "<";
var macr$1 = "\xAF";
var micro$1 = "\xB5";
var middot$1 = "\xB7";
var nbsp$1 = "\xA0";
var not$1 = "\xAC";
var ntilde$1 = "\xF1";
var oacute$1 = "\xF3";
var ocirc$1 = "\xF4";
var ograve$1 = "\xF2";
var ordf$1 = "\xAA";
var ordm$1 = "\xBA";
var oslash$1 = "\xF8";
var otilde$1 = "\xF5";
var ouml$1 = "\xF6";
var para$1 = "\xB6";
var plusmn$1 = "\xB1";
var pound$1 = "\xA3";
var quot$1 = '"';
var raquo$1 = "\xBB";
var reg$1 = "\xAE";
var sect$1 = "\xA7";
var shy$1 = "\xAD";
var sup1$1 = "\xB9";
var sup2$1 = "\xB2";
var sup3$1 = "\xB3";
var szlig$1 = "\xDF";
var thorn$1 = "\xFE";
var times$1 = "\xD7";
var uacute$1 = "\xFA";
var ucirc$1 = "\xFB";
var ugrave$1 = "\xF9";
var uml$1 = "\xA8";
var uuml$1 = "\xFC";
var yacute$1 = "\xFD";
var yen$1 = "\xA5";
var yuml$1 = "\xFF";
var require$$0$1 = {
  AElig: AElig$1,
  AMP: AMP$1,
  Aacute: Aacute$1,
  Acirc: Acirc$1,
  Agrave: Agrave$1,
  Aring: Aring$1,
  Atilde: Atilde$1,
  Auml: Auml$1,
  COPY: COPY$1,
  Ccedil: Ccedil$1,
  ETH: ETH$1,
  Eacute: Eacute$1,
  Ecirc: Ecirc$1,
  Egrave: Egrave$1,
  Euml: Euml$1,
  GT: GT$1,
  Iacute: Iacute$1,
  Icirc: Icirc$1,
  Igrave: Igrave$1,
  Iuml: Iuml$1,
  LT: LT$1,
  Ntilde: Ntilde$1,
  Oacute: Oacute$1,
  Ocirc: Ocirc$1,
  Ograve: Ograve$1,
  Oslash: Oslash$1,
  Otilde: Otilde$1,
  Ouml: Ouml$1,
  QUOT: QUOT$1,
  REG: REG$1,
  THORN: THORN$1,
  Uacute: Uacute$1,
  Ucirc: Ucirc$1,
  Ugrave: Ugrave$1,
  Uuml: Uuml$1,
  Yacute: Yacute$1,
  aacute: aacute$1,
  acirc: acirc$1,
  acute: acute$1,
  aelig: aelig$1,
  agrave: agrave$1,
  amp: amp$1,
  aring: aring$1,
  atilde: atilde$1,
  auml: auml$1,
  brvbar: brvbar$1,
  ccedil: ccedil$1,
  cedil: cedil$1,
  cent: cent$1,
  copy: copy$1,
  curren: curren$1,
  deg: deg$1,
  divide: divide$1,
  eacute: eacute$1,
  ecirc: ecirc$1,
  egrave: egrave$1,
  eth: eth$1,
  euml: euml$1,
  frac12: frac12$1,
  frac14: frac14$1,
  frac34: frac34$1,
  gt: gt$1,
  iacute: iacute$1,
  icirc: icirc$1,
  iexcl: iexcl$1,
  igrave: igrave$1,
  iquest: iquest$1,
  iuml: iuml$1,
  laquo: laquo$1,
  lt: lt$1,
  macr: macr$1,
  micro: micro$1,
  middot: middot$1,
  nbsp: nbsp$1,
  not: not$1,
  ntilde: ntilde$1,
  oacute: oacute$1,
  ocirc: ocirc$1,
  ograve: ograve$1,
  ordf: ordf$1,
  ordm: ordm$1,
  oslash: oslash$1,
  otilde: otilde$1,
  ouml: ouml$1,
  para: para$1,
  plusmn: plusmn$1,
  pound: pound$1,
  quot: quot$1,
  raquo: raquo$1,
  reg: reg$1,
  sect: sect$1,
  shy: shy$1,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  szlig: szlig$1,
  thorn: thorn$1,
  times: times$1,
  uacute: uacute$1,
  ucirc: ucirc$1,
  ugrave: ugrave$1,
  uml: uml$1,
  uuml: uuml$1,
  yacute: yacute$1,
  yen: yen$1,
  yuml: yuml$1
};
var require$$1 = {
  "0": "\uFFFD",
  "128": "\u20AC",
  "130": "\u201A",
  "131": "\u0192",
  "132": "\u201E",
  "133": "\u2026",
  "134": "\u2020",
  "135": "\u2021",
  "136": "\u02C6",
  "137": "\u2030",
  "138": "\u0160",
  "139": "\u2039",
  "140": "\u0152",
  "142": "\u017D",
  "145": "\u2018",
  "146": "\u2019",
  "147": "\u201C",
  "148": "\u201D",
  "149": "\u2022",
  "150": "\u2013",
  "151": "\u2014",
  "152": "\u02DC",
  "153": "\u2122",
  "154": "\u0161",
  "155": "\u203A",
  "156": "\u0153",
  "158": "\u017E",
  "159": "\u0178"
};
var isDecimal = decimal$2;
function decimal$2(character) {
  var code = typeof character === "string" ? character.charCodeAt(0) : character;
  return code >= 48 && code <= 57;
}
__name(decimal$2, "decimal$2");
var isHexadecimal = hexadecimal$1;
function hexadecimal$1(character) {
  var code = typeof character === "string" ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
}
__name(hexadecimal$1, "hexadecimal$1");
var isAlphabetical = alphabetical$1;
function alphabetical$1(character) {
  var code = typeof character === "string" ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
__name(alphabetical$1, "alphabetical$1");
var alphabetical = isAlphabetical;
var decimal$1 = isDecimal;
var isAlphanumerical = alphanumerical$1;
function alphanumerical$1(character) {
  return alphabetical(character) || decimal$1(character);
}
__name(alphanumerical$1, "alphanumerical$1");
var AEli = "\xC6";
var AElig = "\xC6";
var AM = "&";
var AMP = "&";
var Aacut = "\xC1";
var Aacute = "\xC1";
var Abreve = "\u0102";
var Acir = "\xC2";
var Acirc = "\xC2";
var Acy = "\u0410";
var Afr = "\u{1D504}";
var Agrav = "\xC0";
var Agrave = "\xC0";
var Alpha = "\u0391";
var Amacr = "\u0100";
var And = "\u2A53";
var Aogon = "\u0104";
var Aopf = "\u{1D538}";
var ApplyFunction = "\u2061";
var Arin = "\xC5";
var Aring = "\xC5";
var Ascr = "\u{1D49C}";
var Assign = "\u2254";
var Atild = "\xC3";
var Atilde = "\xC3";
var Aum = "\xC4";
var Auml = "\xC4";
var Backslash = "\u2216";
var Barv = "\u2AE7";
var Barwed = "\u2306";
var Bcy = "\u0411";
var Because = "\u2235";
var Bernoullis = "\u212C";
var Beta = "\u0392";
var Bfr = "\u{1D505}";
var Bopf = "\u{1D539}";
var Breve = "\u02D8";
var Bscr = "\u212C";
var Bumpeq = "\u224E";
var CHcy = "\u0427";
var COP = "\xA9";
var COPY = "\xA9";
var Cacute = "\u0106";
var Cap = "\u22D2";
var CapitalDifferentialD = "\u2145";
var Cayleys = "\u212D";
var Ccaron = "\u010C";
var Ccedi = "\xC7";
var Ccedil = "\xC7";
var Ccirc = "\u0108";
var Cconint = "\u2230";
var Cdot = "\u010A";
var Cedilla = "\xB8";
var CenterDot = "\xB7";
var Cfr = "\u212D";
var Chi = "\u03A7";
var CircleDot = "\u2299";
var CircleMinus = "\u2296";
var CirclePlus = "\u2295";
var CircleTimes = "\u2297";
var ClockwiseContourIntegral = "\u2232";
var CloseCurlyDoubleQuote = "\u201D";
var CloseCurlyQuote = "\u2019";
var Colon = "\u2237";
var Colone = "\u2A74";
var Congruent = "\u2261";
var Conint = "\u222F";
var ContourIntegral = "\u222E";
var Copf = "\u2102";
var Coproduct = "\u2210";
var CounterClockwiseContourIntegral = "\u2233";
var Cross = "\u2A2F";
var Cscr = "\u{1D49E}";
var Cup = "\u22D3";
var CupCap = "\u224D";
var DD = "\u2145";
var DDotrahd = "\u2911";
var DJcy = "\u0402";
var DScy = "\u0405";
var DZcy = "\u040F";
var Dagger = "\u2021";
var Darr = "\u21A1";
var Dashv = "\u2AE4";
var Dcaron = "\u010E";
var Dcy = "\u0414";
var Del = "\u2207";
var Delta = "\u0394";
var Dfr = "\u{1D507}";
var DiacriticalAcute = "\xB4";
var DiacriticalDot = "\u02D9";
var DiacriticalDoubleAcute = "\u02DD";
var DiacriticalGrave = "`";
var DiacriticalTilde = "\u02DC";
var Diamond = "\u22C4";
var DifferentialD = "\u2146";
var Dopf = "\u{1D53B}";
var Dot = "\xA8";
var DotDot = "\u20DC";
var DotEqual = "\u2250";
var DoubleContourIntegral = "\u222F";
var DoubleDot = "\xA8";
var DoubleDownArrow = "\u21D3";
var DoubleLeftArrow = "\u21D0";
var DoubleLeftRightArrow = "\u21D4";
var DoubleLeftTee = "\u2AE4";
var DoubleLongLeftArrow = "\u27F8";
var DoubleLongLeftRightArrow = "\u27FA";
var DoubleLongRightArrow = "\u27F9";
var DoubleRightArrow = "\u21D2";
var DoubleRightTee = "\u22A8";
var DoubleUpArrow = "\u21D1";
var DoubleUpDownArrow = "\u21D5";
var DoubleVerticalBar = "\u2225";
var DownArrow = "\u2193";
var DownArrowBar = "\u2913";
var DownArrowUpArrow = "\u21F5";
var DownBreve = "\u0311";
var DownLeftRightVector = "\u2950";
var DownLeftTeeVector = "\u295E";
var DownLeftVector = "\u21BD";
var DownLeftVectorBar = "\u2956";
var DownRightTeeVector = "\u295F";
var DownRightVector = "\u21C1";
var DownRightVectorBar = "\u2957";
var DownTee = "\u22A4";
var DownTeeArrow = "\u21A7";
var Downarrow = "\u21D3";
var Dscr = "\u{1D49F}";
var Dstrok = "\u0110";
var ENG = "\u014A";
var ET = "\xD0";
var ETH = "\xD0";
var Eacut = "\xC9";
var Eacute = "\xC9";
var Ecaron = "\u011A";
var Ecir = "\xCA";
var Ecirc = "\xCA";
var Ecy = "\u042D";
var Edot = "\u0116";
var Efr = "\u{1D508}";
var Egrav = "\xC8";
var Egrave = "\xC8";
var Element = "\u2208";
var Emacr = "\u0112";
var EmptySmallSquare = "\u25FB";
var EmptyVerySmallSquare = "\u25AB";
var Eogon = "\u0118";
var Eopf = "\u{1D53C}";
var Epsilon = "\u0395";
var Equal = "\u2A75";
var EqualTilde = "\u2242";
var Equilibrium = "\u21CC";
var Escr = "\u2130";
var Esim = "\u2A73";
var Eta = "\u0397";
var Eum = "\xCB";
var Euml = "\xCB";
var Exists = "\u2203";
var ExponentialE = "\u2147";
var Fcy = "\u0424";
var Ffr = "\u{1D509}";
var FilledSmallSquare = "\u25FC";
var FilledVerySmallSquare = "\u25AA";
var Fopf = "\u{1D53D}";
var ForAll = "\u2200";
var Fouriertrf = "\u2131";
var Fscr = "\u2131";
var GJcy = "\u0403";
var G = ">";
var GT = ">";
var Gamma = "\u0393";
var Gammad = "\u03DC";
var Gbreve = "\u011E";
var Gcedil = "\u0122";
var Gcirc = "\u011C";
var Gcy = "\u0413";
var Gdot = "\u0120";
var Gfr = "\u{1D50A}";
var Gg = "\u22D9";
var Gopf = "\u{1D53E}";
var GreaterEqual = "\u2265";
var GreaterEqualLess = "\u22DB";
var GreaterFullEqual = "\u2267";
var GreaterGreater = "\u2AA2";
var GreaterLess = "\u2277";
var GreaterSlantEqual = "\u2A7E";
var GreaterTilde = "\u2273";
var Gscr = "\u{1D4A2}";
var Gt = "\u226B";
var HARDcy = "\u042A";
var Hacek = "\u02C7";
var Hat = "^";
var Hcirc = "\u0124";
var Hfr = "\u210C";
var HilbertSpace = "\u210B";
var Hopf = "\u210D";
var HorizontalLine = "\u2500";
var Hscr = "\u210B";
var Hstrok = "\u0126";
var HumpDownHump = "\u224E";
var HumpEqual = "\u224F";
var IEcy = "\u0415";
var IJlig = "\u0132";
var IOcy = "\u0401";
var Iacut = "\xCD";
var Iacute = "\xCD";
var Icir = "\xCE";
var Icirc = "\xCE";
var Icy = "\u0418";
var Idot = "\u0130";
var Ifr = "\u2111";
var Igrav = "\xCC";
var Igrave = "\xCC";
var Im = "\u2111";
var Imacr = "\u012A";
var ImaginaryI = "\u2148";
var Implies = "\u21D2";
var Int = "\u222C";
var Integral = "\u222B";
var Intersection = "\u22C2";
var InvisibleComma = "\u2063";
var InvisibleTimes = "\u2062";
var Iogon = "\u012E";
var Iopf = "\u{1D540}";
var Iota = "\u0399";
var Iscr = "\u2110";
var Itilde = "\u0128";
var Iukcy = "\u0406";
var Ium = "\xCF";
var Iuml = "\xCF";
var Jcirc = "\u0134";
var Jcy = "\u0419";
var Jfr = "\u{1D50D}";
var Jopf = "\u{1D541}";
var Jscr = "\u{1D4A5}";
var Jsercy = "\u0408";
var Jukcy = "\u0404";
var KHcy = "\u0425";
var KJcy = "\u040C";
var Kappa = "\u039A";
var Kcedil = "\u0136";
var Kcy = "\u041A";
var Kfr = "\u{1D50E}";
var Kopf = "\u{1D542}";
var Kscr = "\u{1D4A6}";
var LJcy = "\u0409";
var L = "<";
var LT = "<";
var Lacute = "\u0139";
var Lambda = "\u039B";
var Lang = "\u27EA";
var Laplacetrf = "\u2112";
var Larr = "\u219E";
var Lcaron = "\u013D";
var Lcedil = "\u013B";
var Lcy = "\u041B";
var LeftAngleBracket = "\u27E8";
var LeftArrow = "\u2190";
var LeftArrowBar = "\u21E4";
var LeftArrowRightArrow = "\u21C6";
var LeftCeiling = "\u2308";
var LeftDoubleBracket = "\u27E6";
var LeftDownTeeVector = "\u2961";
var LeftDownVector = "\u21C3";
var LeftDownVectorBar = "\u2959";
var LeftFloor = "\u230A";
var LeftRightArrow = "\u2194";
var LeftRightVector = "\u294E";
var LeftTee = "\u22A3";
var LeftTeeArrow = "\u21A4";
var LeftTeeVector = "\u295A";
var LeftTriangle = "\u22B2";
var LeftTriangleBar = "\u29CF";
var LeftTriangleEqual = "\u22B4";
var LeftUpDownVector = "\u2951";
var LeftUpTeeVector = "\u2960";
var LeftUpVector = "\u21BF";
var LeftUpVectorBar = "\u2958";
var LeftVector = "\u21BC";
var LeftVectorBar = "\u2952";
var Leftarrow = "\u21D0";
var Leftrightarrow = "\u21D4";
var LessEqualGreater = "\u22DA";
var LessFullEqual = "\u2266";
var LessGreater = "\u2276";
var LessLess = "\u2AA1";
var LessSlantEqual = "\u2A7D";
var LessTilde = "\u2272";
var Lfr = "\u{1D50F}";
var Ll = "\u22D8";
var Lleftarrow = "\u21DA";
var Lmidot = "\u013F";
var LongLeftArrow = "\u27F5";
var LongLeftRightArrow = "\u27F7";
var LongRightArrow = "\u27F6";
var Longleftarrow = "\u27F8";
var Longleftrightarrow = "\u27FA";
var Longrightarrow = "\u27F9";
var Lopf = "\u{1D543}";
var LowerLeftArrow = "\u2199";
var LowerRightArrow = "\u2198";
var Lscr = "\u2112";
var Lsh = "\u21B0";
var Lstrok = "\u0141";
var Lt = "\u226A";
var Mcy = "\u041C";
var MediumSpace = "\u205F";
var Mellintrf = "\u2133";
var Mfr = "\u{1D510}";
var MinusPlus = "\u2213";
var Mopf = "\u{1D544}";
var Mscr = "\u2133";
var Mu = "\u039C";
var NJcy = "\u040A";
var Nacute = "\u0143";
var Ncaron = "\u0147";
var Ncedil = "\u0145";
var Ncy = "\u041D";
var NegativeMediumSpace = "\u200B";
var NegativeThickSpace = "\u200B";
var NegativeThinSpace = "\u200B";
var NegativeVeryThinSpace = "\u200B";
var NestedGreaterGreater = "\u226B";
var NestedLessLess = "\u226A";
var NewLine = "\n";
var Nfr = "\u{1D511}";
var NoBreak = "\u2060";
var NonBreakingSpace = "\xA0";
var Nopf = "\u2115";
var Not = "\u2AEC";
var NotCongruent = "\u2262";
var NotCupCap = "\u226D";
var NotDoubleVerticalBar = "\u2226";
var NotElement = "\u2209";
var NotEqual = "\u2260";
var NotEqualTilde = "\u2242\u0338";
var NotExists = "\u2204";
var NotGreater = "\u226F";
var NotGreaterEqual = "\u2271";
var NotGreaterFullEqual = "\u2267\u0338";
var NotGreaterGreater = "\u226B\u0338";
var NotGreaterLess = "\u2279";
var NotGreaterSlantEqual = "\u2A7E\u0338";
var NotGreaterTilde = "\u2275";
var NotHumpDownHump = "\u224E\u0338";
var NotHumpEqual = "\u224F\u0338";
var NotLeftTriangle = "\u22EA";
var NotLeftTriangleBar = "\u29CF\u0338";
var NotLeftTriangleEqual = "\u22EC";
var NotLess = "\u226E";
var NotLessEqual = "\u2270";
var NotLessGreater = "\u2278";
var NotLessLess = "\u226A\u0338";
var NotLessSlantEqual = "\u2A7D\u0338";
var NotLessTilde = "\u2274";
var NotNestedGreaterGreater = "\u2AA2\u0338";
var NotNestedLessLess = "\u2AA1\u0338";
var NotPrecedes = "\u2280";
var NotPrecedesEqual = "\u2AAF\u0338";
var NotPrecedesSlantEqual = "\u22E0";
var NotReverseElement = "\u220C";
var NotRightTriangle = "\u22EB";
var NotRightTriangleBar = "\u29D0\u0338";
var NotRightTriangleEqual = "\u22ED";
var NotSquareSubset = "\u228F\u0338";
var NotSquareSubsetEqual = "\u22E2";
var NotSquareSuperset = "\u2290\u0338";
var NotSquareSupersetEqual = "\u22E3";
var NotSubset = "\u2282\u20D2";
var NotSubsetEqual = "\u2288";
var NotSucceeds = "\u2281";
var NotSucceedsEqual = "\u2AB0\u0338";
var NotSucceedsSlantEqual = "\u22E1";
var NotSucceedsTilde = "\u227F\u0338";
var NotSuperset = "\u2283\u20D2";
var NotSupersetEqual = "\u2289";
var NotTilde = "\u2241";
var NotTildeEqual = "\u2244";
var NotTildeFullEqual = "\u2247";
var NotTildeTilde = "\u2249";
var NotVerticalBar = "\u2224";
var Nscr = "\u{1D4A9}";
var Ntild = "\xD1";
var Ntilde = "\xD1";
var Nu = "\u039D";
var OElig = "\u0152";
var Oacut = "\xD3";
var Oacute = "\xD3";
var Ocir = "\xD4";
var Ocirc = "\xD4";
var Ocy = "\u041E";
var Odblac = "\u0150";
var Ofr = "\u{1D512}";
var Ograv = "\xD2";
var Ograve = "\xD2";
var Omacr = "\u014C";
var Omega = "\u03A9";
var Omicron = "\u039F";
var Oopf = "\u{1D546}";
var OpenCurlyDoubleQuote = "\u201C";
var OpenCurlyQuote = "\u2018";
var Or = "\u2A54";
var Oscr = "\u{1D4AA}";
var Oslas = "\xD8";
var Oslash = "\xD8";
var Otild = "\xD5";
var Otilde = "\xD5";
var Otimes = "\u2A37";
var Oum = "\xD6";
var Ouml = "\xD6";
var OverBar = "\u203E";
var OverBrace = "\u23DE";
var OverBracket = "\u23B4";
var OverParenthesis = "\u23DC";
var PartialD = "\u2202";
var Pcy = "\u041F";
var Pfr = "\u{1D513}";
var Phi = "\u03A6";
var Pi = "\u03A0";
var PlusMinus = "\xB1";
var Poincareplane = "\u210C";
var Popf = "\u2119";
var Pr = "\u2ABB";
var Precedes = "\u227A";
var PrecedesEqual = "\u2AAF";
var PrecedesSlantEqual = "\u227C";
var PrecedesTilde = "\u227E";
var Prime = "\u2033";
var Product = "\u220F";
var Proportion = "\u2237";
var Proportional = "\u221D";
var Pscr = "\u{1D4AB}";
var Psi = "\u03A8";
var QUO = '"';
var QUOT = '"';
var Qfr = "\u{1D514}";
var Qopf = "\u211A";
var Qscr = "\u{1D4AC}";
var RBarr = "\u2910";
var RE = "\xAE";
var REG = "\xAE";
var Racute = "\u0154";
var Rang = "\u27EB";
var Rarr = "\u21A0";
var Rarrtl = "\u2916";
var Rcaron = "\u0158";
var Rcedil = "\u0156";
var Rcy = "\u0420";
var Re = "\u211C";
var ReverseElement = "\u220B";
var ReverseEquilibrium = "\u21CB";
var ReverseUpEquilibrium = "\u296F";
var Rfr = "\u211C";
var Rho = "\u03A1";
var RightAngleBracket = "\u27E9";
var RightArrow = "\u2192";
var RightArrowBar = "\u21E5";
var RightArrowLeftArrow = "\u21C4";
var RightCeiling = "\u2309";
var RightDoubleBracket = "\u27E7";
var RightDownTeeVector = "\u295D";
var RightDownVector = "\u21C2";
var RightDownVectorBar = "\u2955";
var RightFloor = "\u230B";
var RightTee = "\u22A2";
var RightTeeArrow = "\u21A6";
var RightTeeVector = "\u295B";
var RightTriangle = "\u22B3";
var RightTriangleBar = "\u29D0";
var RightTriangleEqual = "\u22B5";
var RightUpDownVector = "\u294F";
var RightUpTeeVector = "\u295C";
var RightUpVector = "\u21BE";
var RightUpVectorBar = "\u2954";
var RightVector = "\u21C0";
var RightVectorBar = "\u2953";
var Rightarrow = "\u21D2";
var Ropf = "\u211D";
var RoundImplies = "\u2970";
var Rrightarrow = "\u21DB";
var Rscr = "\u211B";
var Rsh = "\u21B1";
var RuleDelayed = "\u29F4";
var SHCHcy = "\u0429";
var SHcy = "\u0428";
var SOFTcy = "\u042C";
var Sacute = "\u015A";
var Sc = "\u2ABC";
var Scaron = "\u0160";
var Scedil = "\u015E";
var Scirc = "\u015C";
var Scy = "\u0421";
var Sfr = "\u{1D516}";
var ShortDownArrow = "\u2193";
var ShortLeftArrow = "\u2190";
var ShortRightArrow = "\u2192";
var ShortUpArrow = "\u2191";
var Sigma = "\u03A3";
var SmallCircle = "\u2218";
var Sopf = "\u{1D54A}";
var Sqrt = "\u221A";
var Square = "\u25A1";
var SquareIntersection = "\u2293";
var SquareSubset = "\u228F";
var SquareSubsetEqual = "\u2291";
var SquareSuperset = "\u2290";
var SquareSupersetEqual = "\u2292";
var SquareUnion = "\u2294";
var Sscr = "\u{1D4AE}";
var Star = "\u22C6";
var Sub = "\u22D0";
var Subset = "\u22D0";
var SubsetEqual = "\u2286";
var Succeeds = "\u227B";
var SucceedsEqual = "\u2AB0";
var SucceedsSlantEqual = "\u227D";
var SucceedsTilde = "\u227F";
var SuchThat = "\u220B";
var Sum = "\u2211";
var Sup = "\u22D1";
var Superset = "\u2283";
var SupersetEqual = "\u2287";
var Supset = "\u22D1";
var THOR = "\xDE";
var THORN = "\xDE";
var TRADE = "\u2122";
var TSHcy = "\u040B";
var TScy = "\u0426";
var Tab = "	";
var Tau = "\u03A4";
var Tcaron = "\u0164";
var Tcedil = "\u0162";
var Tcy = "\u0422";
var Tfr = "\u{1D517}";
var Therefore = "\u2234";
var Theta = "\u0398";
var ThickSpace = "\u205F\u200A";
var ThinSpace = "\u2009";
var Tilde = "\u223C";
var TildeEqual = "\u2243";
var TildeFullEqual = "\u2245";
var TildeTilde = "\u2248";
var Topf = "\u{1D54B}";
var TripleDot = "\u20DB";
var Tscr = "\u{1D4AF}";
var Tstrok = "\u0166";
var Uacut = "\xDA";
var Uacute = "\xDA";
var Uarr = "\u219F";
var Uarrocir = "\u2949";
var Ubrcy = "\u040E";
var Ubreve = "\u016C";
var Ucir = "\xDB";
var Ucirc = "\xDB";
var Ucy = "\u0423";
var Udblac = "\u0170";
var Ufr = "\u{1D518}";
var Ugrav = "\xD9";
var Ugrave = "\xD9";
var Umacr = "\u016A";
var UnderBar = "_";
var UnderBrace = "\u23DF";
var UnderBracket = "\u23B5";
var UnderParenthesis = "\u23DD";
var Union = "\u22C3";
var UnionPlus = "\u228E";
var Uogon = "\u0172";
var Uopf = "\u{1D54C}";
var UpArrow = "\u2191";
var UpArrowBar = "\u2912";
var UpArrowDownArrow = "\u21C5";
var UpDownArrow = "\u2195";
var UpEquilibrium = "\u296E";
var UpTee = "\u22A5";
var UpTeeArrow = "\u21A5";
var Uparrow = "\u21D1";
var Updownarrow = "\u21D5";
var UpperLeftArrow = "\u2196";
var UpperRightArrow = "\u2197";
var Upsi = "\u03D2";
var Upsilon = "\u03A5";
var Uring = "\u016E";
var Uscr = "\u{1D4B0}";
var Utilde = "\u0168";
var Uum = "\xDC";
var Uuml = "\xDC";
var VDash = "\u22AB";
var Vbar = "\u2AEB";
var Vcy = "\u0412";
var Vdash = "\u22A9";
var Vdashl = "\u2AE6";
var Vee = "\u22C1";
var Verbar = "\u2016";
var Vert = "\u2016";
var VerticalBar = "\u2223";
var VerticalLine = "|";
var VerticalSeparator = "\u2758";
var VerticalTilde = "\u2240";
var VeryThinSpace = "\u200A";
var Vfr = "\u{1D519}";
var Vopf = "\u{1D54D}";
var Vscr = "\u{1D4B1}";
var Vvdash = "\u22AA";
var Wcirc = "\u0174";
var Wedge = "\u22C0";
var Wfr = "\u{1D51A}";
var Wopf = "\u{1D54E}";
var Wscr = "\u{1D4B2}";
var Xfr = "\u{1D51B}";
var Xi = "\u039E";
var Xopf = "\u{1D54F}";
var Xscr = "\u{1D4B3}";
var YAcy = "\u042F";
var YIcy = "\u0407";
var YUcy = "\u042E";
var Yacut = "\xDD";
var Yacute = "\xDD";
var Ycirc = "\u0176";
var Ycy = "\u042B";
var Yfr = "\u{1D51C}";
var Yopf = "\u{1D550}";
var Yscr = "\u{1D4B4}";
var Yuml = "\u0178";
var ZHcy = "\u0416";
var Zacute = "\u0179";
var Zcaron = "\u017D";
var Zcy = "\u0417";
var Zdot = "\u017B";
var ZeroWidthSpace = "\u200B";
var Zeta = "\u0396";
var Zfr = "\u2128";
var Zopf = "\u2124";
var Zscr = "\u{1D4B5}";
var aacut = "\xE1";
var aacute = "\xE1";
var abreve = "\u0103";
var ac = "\u223E";
var acE = "\u223E\u0333";
var acd = "\u223F";
var acir = "\xE2";
var acirc = "\xE2";
var acut = "\xB4";
var acute = "\xB4";
var acy = "\u0430";
var aeli = "\xE6";
var aelig = "\xE6";
var af = "\u2061";
var afr = "\u{1D51E}";
var agrav = "\xE0";
var agrave = "\xE0";
var alefsym = "\u2135";
var aleph = "\u2135";
var alpha = "\u03B1";
var amacr = "\u0101";
var amalg = "\u2A3F";
var am = "&";
var amp = "&";
var and = "\u2227";
var andand = "\u2A55";
var andd = "\u2A5C";
var andslope = "\u2A58";
var andv = "\u2A5A";
var ang = "\u2220";
var ange = "\u29A4";
var angle = "\u2220";
var angmsd = "\u2221";
var angmsdaa = "\u29A8";
var angmsdab = "\u29A9";
var angmsdac = "\u29AA";
var angmsdad = "\u29AB";
var angmsdae = "\u29AC";
var angmsdaf = "\u29AD";
var angmsdag = "\u29AE";
var angmsdah = "\u29AF";
var angrt = "\u221F";
var angrtvb = "\u22BE";
var angrtvbd = "\u299D";
var angsph = "\u2222";
var angst = "\xC5";
var angzarr = "\u237C";
var aogon = "\u0105";
var aopf = "\u{1D552}";
var ap = "\u2248";
var apE = "\u2A70";
var apacir = "\u2A6F";
var ape = "\u224A";
var apid = "\u224B";
var apos = "'";
var approx = "\u2248";
var approxeq = "\u224A";
var arin = "\xE5";
var aring = "\xE5";
var ascr = "\u{1D4B6}";
var ast = "*";
var asymp = "\u2248";
var asympeq = "\u224D";
var atild = "\xE3";
var atilde = "\xE3";
var aum = "\xE4";
var auml = "\xE4";
var awconint = "\u2233";
var awint = "\u2A11";
var bNot = "\u2AED";
var backcong = "\u224C";
var backepsilon = "\u03F6";
var backprime = "\u2035";
var backsim = "\u223D";
var backsimeq = "\u22CD";
var barvee = "\u22BD";
var barwed = "\u2305";
var barwedge = "\u2305";
var bbrk = "\u23B5";
var bbrktbrk = "\u23B6";
var bcong = "\u224C";
var bcy = "\u0431";
var bdquo = "\u201E";
var becaus = "\u2235";
var because = "\u2235";
var bemptyv = "\u29B0";
var bepsi = "\u03F6";
var bernou = "\u212C";
var beta = "\u03B2";
var beth = "\u2136";
var between = "\u226C";
var bfr = "\u{1D51F}";
var bigcap = "\u22C2";
var bigcirc = "\u25EF";
var bigcup = "\u22C3";
var bigodot = "\u2A00";
var bigoplus = "\u2A01";
var bigotimes = "\u2A02";
var bigsqcup = "\u2A06";
var bigstar = "\u2605";
var bigtriangledown = "\u25BD";
var bigtriangleup = "\u25B3";
var biguplus = "\u2A04";
var bigvee = "\u22C1";
var bigwedge = "\u22C0";
var bkarow = "\u290D";
var blacklozenge = "\u29EB";
var blacksquare = "\u25AA";
var blacktriangle = "\u25B4";
var blacktriangledown = "\u25BE";
var blacktriangleleft = "\u25C2";
var blacktriangleright = "\u25B8";
var blank = "\u2423";
var blk12 = "\u2592";
var blk14 = "\u2591";
var blk34 = "\u2593";
var block = "\u2588";
var bne = "=\u20E5";
var bnequiv = "\u2261\u20E5";
var bnot = "\u2310";
var bopf = "\u{1D553}";
var bot = "\u22A5";
var bottom = "\u22A5";
var bowtie = "\u22C8";
var boxDL = "\u2557";
var boxDR = "\u2554";
var boxDl = "\u2556";
var boxDr = "\u2553";
var boxH = "\u2550";
var boxHD = "\u2566";
var boxHU = "\u2569";
var boxHd = "\u2564";
var boxHu = "\u2567";
var boxUL = "\u255D";
var boxUR = "\u255A";
var boxUl = "\u255C";
var boxUr = "\u2559";
var boxV = "\u2551";
var boxVH = "\u256C";
var boxVL = "\u2563";
var boxVR = "\u2560";
var boxVh = "\u256B";
var boxVl = "\u2562";
var boxVr = "\u255F";
var boxbox = "\u29C9";
var boxdL = "\u2555";
var boxdR = "\u2552";
var boxdl = "\u2510";
var boxdr = "\u250C";
var boxh = "\u2500";
var boxhD = "\u2565";
var boxhU = "\u2568";
var boxhd = "\u252C";
var boxhu = "\u2534";
var boxminus = "\u229F";
var boxplus = "\u229E";
var boxtimes = "\u22A0";
var boxuL = "\u255B";
var boxuR = "\u2558";
var boxul = "\u2518";
var boxur = "\u2514";
var boxv = "\u2502";
var boxvH = "\u256A";
var boxvL = "\u2561";
var boxvR = "\u255E";
var boxvh = "\u253C";
var boxvl = "\u2524";
var boxvr = "\u251C";
var bprime = "\u2035";
var breve = "\u02D8";
var brvba = "\xA6";
var brvbar = "\xA6";
var bscr = "\u{1D4B7}";
var bsemi = "\u204F";
var bsim = "\u223D";
var bsime = "\u22CD";
var bsol = "\\";
var bsolb = "\u29C5";
var bsolhsub = "\u27C8";
var bull = "\u2022";
var bullet = "\u2022";
var bump = "\u224E";
var bumpE = "\u2AAE";
var bumpe = "\u224F";
var bumpeq = "\u224F";
var cacute = "\u0107";
var cap = "\u2229";
var capand = "\u2A44";
var capbrcup = "\u2A49";
var capcap = "\u2A4B";
var capcup = "\u2A47";
var capdot = "\u2A40";
var caps = "\u2229\uFE00";
var caret = "\u2041";
var caron = "\u02C7";
var ccaps = "\u2A4D";
var ccaron = "\u010D";
var ccedi = "\xE7";
var ccedil = "\xE7";
var ccirc = "\u0109";
var ccups = "\u2A4C";
var ccupssm = "\u2A50";
var cdot = "\u010B";
var cedi = "\xB8";
var cedil = "\xB8";
var cemptyv = "\u29B2";
var cen = "\xA2";
var cent = "\xA2";
var centerdot = "\xB7";
var cfr = "\u{1D520}";
var chcy = "\u0447";
var check = "\u2713";
var checkmark = "\u2713";
var chi = "\u03C7";
var cir = "\u25CB";
var cirE = "\u29C3";
var circ = "\u02C6";
var circeq = "\u2257";
var circlearrowleft = "\u21BA";
var circlearrowright = "\u21BB";
var circledR = "\xAE";
var circledS = "\u24C8";
var circledast = "\u229B";
var circledcirc = "\u229A";
var circleddash = "\u229D";
var cire = "\u2257";
var cirfnint = "\u2A10";
var cirmid = "\u2AEF";
var cirscir = "\u29C2";
var clubs = "\u2663";
var clubsuit = "\u2663";
var colon = ":";
var colone = "\u2254";
var coloneq = "\u2254";
var comma = ",";
var commat = "@";
var comp = "\u2201";
var compfn = "\u2218";
var complement = "\u2201";
var complexes = "\u2102";
var cong = "\u2245";
var congdot = "\u2A6D";
var conint = "\u222E";
var copf = "\u{1D554}";
var coprod = "\u2210";
var cop = "\xA9";
var copy = "\xA9";
var copysr = "\u2117";
var crarr = "\u21B5";
var cross = "\u2717";
var cscr = "\u{1D4B8}";
var csub = "\u2ACF";
var csube = "\u2AD1";
var csup = "\u2AD0";
var csupe = "\u2AD2";
var ctdot = "\u22EF";
var cudarrl = "\u2938";
var cudarrr = "\u2935";
var cuepr = "\u22DE";
var cuesc = "\u22DF";
var cularr = "\u21B6";
var cularrp = "\u293D";
var cup = "\u222A";
var cupbrcap = "\u2A48";
var cupcap = "\u2A46";
var cupcup = "\u2A4A";
var cupdot = "\u228D";
var cupor = "\u2A45";
var cups = "\u222A\uFE00";
var curarr = "\u21B7";
var curarrm = "\u293C";
var curlyeqprec = "\u22DE";
var curlyeqsucc = "\u22DF";
var curlyvee = "\u22CE";
var curlywedge = "\u22CF";
var curre = "\xA4";
var curren = "\xA4";
var curvearrowleft = "\u21B6";
var curvearrowright = "\u21B7";
var cuvee = "\u22CE";
var cuwed = "\u22CF";
var cwconint = "\u2232";
var cwint = "\u2231";
var cylcty = "\u232D";
var dArr = "\u21D3";
var dHar = "\u2965";
var dagger = "\u2020";
var daleth = "\u2138";
var darr = "\u2193";
var dash = "\u2010";
var dashv = "\u22A3";
var dbkarow = "\u290F";
var dblac = "\u02DD";
var dcaron = "\u010F";
var dcy = "\u0434";
var dd = "\u2146";
var ddagger = "\u2021";
var ddarr = "\u21CA";
var ddotseq = "\u2A77";
var de = "\xB0";
var deg = "\xB0";
var delta = "\u03B4";
var demptyv = "\u29B1";
var dfisht = "\u297F";
var dfr = "\u{1D521}";
var dharl = "\u21C3";
var dharr = "\u21C2";
var diam = "\u22C4";
var diamond = "\u22C4";
var diamondsuit = "\u2666";
var diams = "\u2666";
var die = "\xA8";
var digamma = "\u03DD";
var disin = "\u22F2";
var div = "\xF7";
var divid = "\xF7";
var divide = "\xF7";
var divideontimes = "\u22C7";
var divonx = "\u22C7";
var djcy = "\u0452";
var dlcorn = "\u231E";
var dlcrop = "\u230D";
var dollar = "$";
var dopf = "\u{1D555}";
var dot = "\u02D9";
var doteq = "\u2250";
var doteqdot = "\u2251";
var dotminus = "\u2238";
var dotplus = "\u2214";
var dotsquare = "\u22A1";
var doublebarwedge = "\u2306";
var downarrow = "\u2193";
var downdownarrows = "\u21CA";
var downharpoonleft = "\u21C3";
var downharpoonright = "\u21C2";
var drbkarow = "\u2910";
var drcorn = "\u231F";
var drcrop = "\u230C";
var dscr = "\u{1D4B9}";
var dscy = "\u0455";
var dsol = "\u29F6";
var dstrok = "\u0111";
var dtdot = "\u22F1";
var dtri = "\u25BF";
var dtrif = "\u25BE";
var duarr = "\u21F5";
var duhar = "\u296F";
var dwangle = "\u29A6";
var dzcy = "\u045F";
var dzigrarr = "\u27FF";
var eDDot = "\u2A77";
var eDot = "\u2251";
var eacut = "\xE9";
var eacute = "\xE9";
var easter = "\u2A6E";
var ecaron = "\u011B";
var ecir = "\xEA";
var ecirc = "\xEA";
var ecolon = "\u2255";
var ecy = "\u044D";
var edot = "\u0117";
var ee = "\u2147";
var efDot = "\u2252";
var efr = "\u{1D522}";
var eg = "\u2A9A";
var egrav = "\xE8";
var egrave = "\xE8";
var egs = "\u2A96";
var egsdot = "\u2A98";
var el = "\u2A99";
var elinters = "\u23E7";
var ell = "\u2113";
var els = "\u2A95";
var elsdot = "\u2A97";
var emacr = "\u0113";
var empty = "\u2205";
var emptyset = "\u2205";
var emptyv = "\u2205";
var emsp13 = "\u2004";
var emsp14 = "\u2005";
var emsp = "\u2003";
var eng = "\u014B";
var ensp = "\u2002";
var eogon = "\u0119";
var eopf = "\u{1D556}";
var epar = "\u22D5";
var eparsl = "\u29E3";
var eplus = "\u2A71";
var epsi = "\u03B5";
var epsilon = "\u03B5";
var epsiv = "\u03F5";
var eqcirc = "\u2256";
var eqcolon = "\u2255";
var eqsim = "\u2242";
var eqslantgtr = "\u2A96";
var eqslantless = "\u2A95";
var equals = "=";
var equest = "\u225F";
var equiv = "\u2261";
var equivDD = "\u2A78";
var eqvparsl = "\u29E5";
var erDot = "\u2253";
var erarr = "\u2971";
var escr = "\u212F";
var esdot = "\u2250";
var esim = "\u2242";
var eta = "\u03B7";
var et = "\xF0";
var eth = "\xF0";
var eum = "\xEB";
var euml = "\xEB";
var euro = "\u20AC";
var excl = "!";
var exist = "\u2203";
var expectation = "\u2130";
var exponentiale = "\u2147";
var fallingdotseq = "\u2252";
var fcy = "\u0444";
var female = "\u2640";
var ffilig = "\uFB03";
var fflig = "\uFB00";
var ffllig = "\uFB04";
var ffr = "\u{1D523}";
var filig = "\uFB01";
var fjlig = "fj";
var flat = "\u266D";
var fllig = "\uFB02";
var fltns = "\u25B1";
var fnof = "\u0192";
var fopf = "\u{1D557}";
var forall = "\u2200";
var fork = "\u22D4";
var forkv = "\u2AD9";
var fpartint = "\u2A0D";
var frac1 = "\xBC";
var frac12 = "\xBD";
var frac13 = "\u2153";
var frac14 = "\xBC";
var frac15 = "\u2155";
var frac16 = "\u2159";
var frac18 = "\u215B";
var frac23 = "\u2154";
var frac25 = "\u2156";
var frac3 = "\xBE";
var frac34 = "\xBE";
var frac35 = "\u2157";
var frac38 = "\u215C";
var frac45 = "\u2158";
var frac56 = "\u215A";
var frac58 = "\u215D";
var frac78 = "\u215E";
var frasl = "\u2044";
var frown = "\u2322";
var fscr = "\u{1D4BB}";
var gE = "\u2267";
var gEl = "\u2A8C";
var gacute = "\u01F5";
var gamma = "\u03B3";
var gammad = "\u03DD";
var gap = "\u2A86";
var gbreve = "\u011F";
var gcirc = "\u011D";
var gcy = "\u0433";
var gdot = "\u0121";
var ge = "\u2265";
var gel = "\u22DB";
var geq = "\u2265";
var geqq = "\u2267";
var geqslant = "\u2A7E";
var ges = "\u2A7E";
var gescc = "\u2AA9";
var gesdot = "\u2A80";
var gesdoto = "\u2A82";
var gesdotol = "\u2A84";
var gesl = "\u22DB\uFE00";
var gesles = "\u2A94";
var gfr = "\u{1D524}";
var gg = "\u226B";
var ggg = "\u22D9";
var gimel = "\u2137";
var gjcy = "\u0453";
var gl = "\u2277";
var glE = "\u2A92";
var gla = "\u2AA5";
var glj = "\u2AA4";
var gnE = "\u2269";
var gnap = "\u2A8A";
var gnapprox = "\u2A8A";
var gne = "\u2A88";
var gneq = "\u2A88";
var gneqq = "\u2269";
var gnsim = "\u22E7";
var gopf = "\u{1D558}";
var grave = "`";
var gscr = "\u210A";
var gsim = "\u2273";
var gsime = "\u2A8E";
var gsiml = "\u2A90";
var g = ">";
var gt = ">";
var gtcc = "\u2AA7";
var gtcir = "\u2A7A";
var gtdot = "\u22D7";
var gtlPar = "\u2995";
var gtquest = "\u2A7C";
var gtrapprox = "\u2A86";
var gtrarr = "\u2978";
var gtrdot = "\u22D7";
var gtreqless = "\u22DB";
var gtreqqless = "\u2A8C";
var gtrless = "\u2277";
var gtrsim = "\u2273";
var gvertneqq = "\u2269\uFE00";
var gvnE = "\u2269\uFE00";
var hArr = "\u21D4";
var hairsp = "\u200A";
var half = "\xBD";
var hamilt = "\u210B";
var hardcy = "\u044A";
var harr = "\u2194";
var harrcir = "\u2948";
var harrw = "\u21AD";
var hbar = "\u210F";
var hcirc = "\u0125";
var hearts = "\u2665";
var heartsuit = "\u2665";
var hellip = "\u2026";
var hercon = "\u22B9";
var hfr = "\u{1D525}";
var hksearow = "\u2925";
var hkswarow = "\u2926";
var hoarr = "\u21FF";
var homtht = "\u223B";
var hookleftarrow = "\u21A9";
var hookrightarrow = "\u21AA";
var hopf = "\u{1D559}";
var horbar = "\u2015";
var hscr = "\u{1D4BD}";
var hslash = "\u210F";
var hstrok = "\u0127";
var hybull = "\u2043";
var hyphen = "\u2010";
var iacut = "\xED";
var iacute = "\xED";
var ic = "\u2063";
var icir = "\xEE";
var icirc = "\xEE";
var icy = "\u0438";
var iecy = "\u0435";
var iexc = "\xA1";
var iexcl = "\xA1";
var iff = "\u21D4";
var ifr = "\u{1D526}";
var igrav = "\xEC";
var igrave = "\xEC";
var ii = "\u2148";
var iiiint = "\u2A0C";
var iiint = "\u222D";
var iinfin = "\u29DC";
var iiota = "\u2129";
var ijlig = "\u0133";
var imacr = "\u012B";
var image = "\u2111";
var imagline = "\u2110";
var imagpart = "\u2111";
var imath = "\u0131";
var imof = "\u22B7";
var imped = "\u01B5";
var incare = "\u2105";
var infin = "\u221E";
var infintie = "\u29DD";
var inodot = "\u0131";
var int = "\u222B";
var intcal = "\u22BA";
var integers = "\u2124";
var intercal = "\u22BA";
var intlarhk = "\u2A17";
var intprod = "\u2A3C";
var iocy = "\u0451";
var iogon = "\u012F";
var iopf = "\u{1D55A}";
var iota = "\u03B9";
var iprod = "\u2A3C";
var iques = "\xBF";
var iquest = "\xBF";
var iscr = "\u{1D4BE}";
var isin = "\u2208";
var isinE = "\u22F9";
var isindot = "\u22F5";
var isins = "\u22F4";
var isinsv = "\u22F3";
var isinv = "\u2208";
var it = "\u2062";
var itilde = "\u0129";
var iukcy = "\u0456";
var ium = "\xEF";
var iuml = "\xEF";
var jcirc = "\u0135";
var jcy = "\u0439";
var jfr = "\u{1D527}";
var jmath = "\u0237";
var jopf = "\u{1D55B}";
var jscr = "\u{1D4BF}";
var jsercy = "\u0458";
var jukcy = "\u0454";
var kappa = "\u03BA";
var kappav = "\u03F0";
var kcedil = "\u0137";
var kcy = "\u043A";
var kfr = "\u{1D528}";
var kgreen = "\u0138";
var khcy = "\u0445";
var kjcy = "\u045C";
var kopf = "\u{1D55C}";
var kscr = "\u{1D4C0}";
var lAarr = "\u21DA";
var lArr = "\u21D0";
var lAtail = "\u291B";
var lBarr = "\u290E";
var lE = "\u2266";
var lEg = "\u2A8B";
var lHar = "\u2962";
var lacute = "\u013A";
var laemptyv = "\u29B4";
var lagran = "\u2112";
var lambda = "\u03BB";
var lang = "\u27E8";
var langd = "\u2991";
var langle = "\u27E8";
var lap = "\u2A85";
var laqu = "\xAB";
var laquo = "\xAB";
var larr = "\u2190";
var larrb = "\u21E4";
var larrbfs = "\u291F";
var larrfs = "\u291D";
var larrhk = "\u21A9";
var larrlp = "\u21AB";
var larrpl = "\u2939";
var larrsim = "\u2973";
var larrtl = "\u21A2";
var lat = "\u2AAB";
var latail = "\u2919";
var late = "\u2AAD";
var lates = "\u2AAD\uFE00";
var lbarr = "\u290C";
var lbbrk = "\u2772";
var lbrace = "{";
var lbrack = "[";
var lbrke = "\u298B";
var lbrksld = "\u298F";
var lbrkslu = "\u298D";
var lcaron = "\u013E";
var lcedil = "\u013C";
var lceil = "\u2308";
var lcub = "{";
var lcy = "\u043B";
var ldca = "\u2936";
var ldquo = "\u201C";
var ldquor = "\u201E";
var ldrdhar = "\u2967";
var ldrushar = "\u294B";
var ldsh = "\u21B2";
var le = "\u2264";
var leftarrow = "\u2190";
var leftarrowtail = "\u21A2";
var leftharpoondown = "\u21BD";
var leftharpoonup = "\u21BC";
var leftleftarrows = "\u21C7";
var leftrightarrow = "\u2194";
var leftrightarrows = "\u21C6";
var leftrightharpoons = "\u21CB";
var leftrightsquigarrow = "\u21AD";
var leftthreetimes = "\u22CB";
var leg = "\u22DA";
var leq = "\u2264";
var leqq = "\u2266";
var leqslant = "\u2A7D";
var les = "\u2A7D";
var lescc = "\u2AA8";
var lesdot = "\u2A7F";
var lesdoto = "\u2A81";
var lesdotor = "\u2A83";
var lesg = "\u22DA\uFE00";
var lesges = "\u2A93";
var lessapprox = "\u2A85";
var lessdot = "\u22D6";
var lesseqgtr = "\u22DA";
var lesseqqgtr = "\u2A8B";
var lessgtr = "\u2276";
var lesssim = "\u2272";
var lfisht = "\u297C";
var lfloor = "\u230A";
var lfr = "\u{1D529}";
var lg = "\u2276";
var lgE = "\u2A91";
var lhard = "\u21BD";
var lharu = "\u21BC";
var lharul = "\u296A";
var lhblk = "\u2584";
var ljcy = "\u0459";
var ll = "\u226A";
var llarr = "\u21C7";
var llcorner = "\u231E";
var llhard = "\u296B";
var lltri = "\u25FA";
var lmidot = "\u0140";
var lmoust = "\u23B0";
var lmoustache = "\u23B0";
var lnE = "\u2268";
var lnap = "\u2A89";
var lnapprox = "\u2A89";
var lne = "\u2A87";
var lneq = "\u2A87";
var lneqq = "\u2268";
var lnsim = "\u22E6";
var loang = "\u27EC";
var loarr = "\u21FD";
var lobrk = "\u27E6";
var longleftarrow = "\u27F5";
var longleftrightarrow = "\u27F7";
var longmapsto = "\u27FC";
var longrightarrow = "\u27F6";
var looparrowleft = "\u21AB";
var looparrowright = "\u21AC";
var lopar = "\u2985";
var lopf = "\u{1D55D}";
var loplus = "\u2A2D";
var lotimes = "\u2A34";
var lowast = "\u2217";
var lowbar = "_";
var loz = "\u25CA";
var lozenge = "\u25CA";
var lozf = "\u29EB";
var lpar = "(";
var lparlt = "\u2993";
var lrarr = "\u21C6";
var lrcorner = "\u231F";
var lrhar = "\u21CB";
var lrhard = "\u296D";
var lrm = "\u200E";
var lrtri = "\u22BF";
var lsaquo = "\u2039";
var lscr = "\u{1D4C1}";
var lsh = "\u21B0";
var lsim = "\u2272";
var lsime = "\u2A8D";
var lsimg = "\u2A8F";
var lsqb = "[";
var lsquo = "\u2018";
var lsquor = "\u201A";
var lstrok = "\u0142";
var l = "<";
var lt = "<";
var ltcc = "\u2AA6";
var ltcir = "\u2A79";
var ltdot = "\u22D6";
var lthree = "\u22CB";
var ltimes = "\u22C9";
var ltlarr = "\u2976";
var ltquest = "\u2A7B";
var ltrPar = "\u2996";
var ltri = "\u25C3";
var ltrie = "\u22B4";
var ltrif = "\u25C2";
var lurdshar = "\u294A";
var luruhar = "\u2966";
var lvertneqq = "\u2268\uFE00";
var lvnE = "\u2268\uFE00";
var mDDot = "\u223A";
var mac = "\xAF";
var macr = "\xAF";
var male = "\u2642";
var malt = "\u2720";
var maltese = "\u2720";
var map = "\u21A6";
var mapsto = "\u21A6";
var mapstodown = "\u21A7";
var mapstoleft = "\u21A4";
var mapstoup = "\u21A5";
var marker = "\u25AE";
var mcomma = "\u2A29";
var mcy = "\u043C";
var mdash = "\u2014";
var measuredangle = "\u2221";
var mfr = "\u{1D52A}";
var mho = "\u2127";
var micr = "\xB5";
var micro = "\xB5";
var mid = "\u2223";
var midast = "*";
var midcir = "\u2AF0";
var middo = "\xB7";
var middot = "\xB7";
var minus = "\u2212";
var minusb = "\u229F";
var minusd = "\u2238";
var minusdu = "\u2A2A";
var mlcp = "\u2ADB";
var mldr = "\u2026";
var mnplus = "\u2213";
var models = "\u22A7";
var mopf = "\u{1D55E}";
var mp = "\u2213";
var mscr = "\u{1D4C2}";
var mstpos = "\u223E";
var mu = "\u03BC";
var multimap = "\u22B8";
var mumap = "\u22B8";
var nGg = "\u22D9\u0338";
var nGt = "\u226B\u20D2";
var nGtv = "\u226B\u0338";
var nLeftarrow = "\u21CD";
var nLeftrightarrow = "\u21CE";
var nLl = "\u22D8\u0338";
var nLt = "\u226A\u20D2";
var nLtv = "\u226A\u0338";
var nRightarrow = "\u21CF";
var nVDash = "\u22AF";
var nVdash = "\u22AE";
var nabla = "\u2207";
var nacute = "\u0144";
var nang = "\u2220\u20D2";
var nap = "\u2249";
var napE = "\u2A70\u0338";
var napid = "\u224B\u0338";
var napos = "\u0149";
var napprox = "\u2249";
var natur = "\u266E";
var natural = "\u266E";
var naturals = "\u2115";
var nbs = "\xA0";
var nbsp = "\xA0";
var nbump = "\u224E\u0338";
var nbumpe = "\u224F\u0338";
var ncap = "\u2A43";
var ncaron = "\u0148";
var ncedil = "\u0146";
var ncong = "\u2247";
var ncongdot = "\u2A6D\u0338";
var ncup = "\u2A42";
var ncy = "\u043D";
var ndash = "\u2013";
var ne = "\u2260";
var neArr = "\u21D7";
var nearhk = "\u2924";
var nearr = "\u2197";
var nearrow = "\u2197";
var nedot = "\u2250\u0338";
var nequiv = "\u2262";
var nesear = "\u2928";
var nesim = "\u2242\u0338";
var nexist = "\u2204";
var nexists = "\u2204";
var nfr = "\u{1D52B}";
var ngE = "\u2267\u0338";
var nge = "\u2271";
var ngeq = "\u2271";
var ngeqq = "\u2267\u0338";
var ngeqslant = "\u2A7E\u0338";
var nges = "\u2A7E\u0338";
var ngsim = "\u2275";
var ngt = "\u226F";
var ngtr = "\u226F";
var nhArr = "\u21CE";
var nharr = "\u21AE";
var nhpar = "\u2AF2";
var ni = "\u220B";
var nis = "\u22FC";
var nisd = "\u22FA";
var niv = "\u220B";
var njcy = "\u045A";
var nlArr = "\u21CD";
var nlE = "\u2266\u0338";
var nlarr = "\u219A";
var nldr = "\u2025";
var nle = "\u2270";
var nleftarrow = "\u219A";
var nleftrightarrow = "\u21AE";
var nleq = "\u2270";
var nleqq = "\u2266\u0338";
var nleqslant = "\u2A7D\u0338";
var nles = "\u2A7D\u0338";
var nless = "\u226E";
var nlsim = "\u2274";
var nlt = "\u226E";
var nltri = "\u22EA";
var nltrie = "\u22EC";
var nmid = "\u2224";
var nopf = "\u{1D55F}";
var no = "\xAC";
var not = "\xAC";
var notin = "\u2209";
var notinE = "\u22F9\u0338";
var notindot = "\u22F5\u0338";
var notinva = "\u2209";
var notinvb = "\u22F7";
var notinvc = "\u22F6";
var notni = "\u220C";
var notniva = "\u220C";
var notnivb = "\u22FE";
var notnivc = "\u22FD";
var npar = "\u2226";
var nparallel = "\u2226";
var nparsl = "\u2AFD\u20E5";
var npart = "\u2202\u0338";
var npolint = "\u2A14";
var npr = "\u2280";
var nprcue = "\u22E0";
var npre = "\u2AAF\u0338";
var nprec = "\u2280";
var npreceq = "\u2AAF\u0338";
var nrArr = "\u21CF";
var nrarr = "\u219B";
var nrarrc = "\u2933\u0338";
var nrarrw = "\u219D\u0338";
var nrightarrow = "\u219B";
var nrtri = "\u22EB";
var nrtrie = "\u22ED";
var nsc = "\u2281";
var nsccue = "\u22E1";
var nsce = "\u2AB0\u0338";
var nscr = "\u{1D4C3}";
var nshortmid = "\u2224";
var nshortparallel = "\u2226";
var nsim = "\u2241";
var nsime = "\u2244";
var nsimeq = "\u2244";
var nsmid = "\u2224";
var nspar = "\u2226";
var nsqsube = "\u22E2";
var nsqsupe = "\u22E3";
var nsub = "\u2284";
var nsubE = "\u2AC5\u0338";
var nsube = "\u2288";
var nsubset = "\u2282\u20D2";
var nsubseteq = "\u2288";
var nsubseteqq = "\u2AC5\u0338";
var nsucc = "\u2281";
var nsucceq = "\u2AB0\u0338";
var nsup = "\u2285";
var nsupE = "\u2AC6\u0338";
var nsupe = "\u2289";
var nsupset = "\u2283\u20D2";
var nsupseteq = "\u2289";
var nsupseteqq = "\u2AC6\u0338";
var ntgl = "\u2279";
var ntild = "\xF1";
var ntilde = "\xF1";
var ntlg = "\u2278";
var ntriangleleft = "\u22EA";
var ntrianglelefteq = "\u22EC";
var ntriangleright = "\u22EB";
var ntrianglerighteq = "\u22ED";
var nu = "\u03BD";
var num = "#";
var numero = "\u2116";
var numsp = "\u2007";
var nvDash = "\u22AD";
var nvHarr = "\u2904";
var nvap = "\u224D\u20D2";
var nvdash = "\u22AC";
var nvge = "\u2265\u20D2";
var nvgt = ">\u20D2";
var nvinfin = "\u29DE";
var nvlArr = "\u2902";
var nvle = "\u2264\u20D2";
var nvlt = "<\u20D2";
var nvltrie = "\u22B4\u20D2";
var nvrArr = "\u2903";
var nvrtrie = "\u22B5\u20D2";
var nvsim = "\u223C\u20D2";
var nwArr = "\u21D6";
var nwarhk = "\u2923";
var nwarr = "\u2196";
var nwarrow = "\u2196";
var nwnear = "\u2927";
var oS = "\u24C8";
var oacut = "\xF3";
var oacute = "\xF3";
var oast = "\u229B";
var ocir = "\xF4";
var ocirc = "\xF4";
var ocy = "\u043E";
var odash = "\u229D";
var odblac = "\u0151";
var odiv = "\u2A38";
var odot = "\u2299";
var odsold = "\u29BC";
var oelig = "\u0153";
var ofcir = "\u29BF";
var ofr = "\u{1D52C}";
var ogon = "\u02DB";
var ograv = "\xF2";
var ograve = "\xF2";
var ogt = "\u29C1";
var ohbar = "\u29B5";
var ohm = "\u03A9";
var oint = "\u222E";
var olarr = "\u21BA";
var olcir = "\u29BE";
var olcross = "\u29BB";
var oline = "\u203E";
var olt = "\u29C0";
var omacr = "\u014D";
var omega = "\u03C9";
var omicron = "\u03BF";
var omid = "\u29B6";
var ominus = "\u2296";
var oopf = "\u{1D560}";
var opar = "\u29B7";
var operp = "\u29B9";
var oplus = "\u2295";
var or = "\u2228";
var orarr = "\u21BB";
var ord = "\xBA";
var order = "\u2134";
var orderof = "\u2134";
var ordf = "\xAA";
var ordm = "\xBA";
var origof = "\u22B6";
var oror = "\u2A56";
var orslope = "\u2A57";
var orv = "\u2A5B";
var oscr = "\u2134";
var oslas = "\xF8";
var oslash = "\xF8";
var osol = "\u2298";
var otild = "\xF5";
var otilde = "\xF5";
var otimes = "\u2297";
var otimesas = "\u2A36";
var oum = "\xF6";
var ouml = "\xF6";
var ovbar = "\u233D";
var par = "\xB6";
var para = "\xB6";
var parallel = "\u2225";
var parsim = "\u2AF3";
var parsl = "\u2AFD";
var part = "\u2202";
var pcy = "\u043F";
var percnt = "%";
var period = ".";
var permil = "\u2030";
var perp = "\u22A5";
var pertenk = "\u2031";
var pfr = "\u{1D52D}";
var phi = "\u03C6";
var phiv = "\u03D5";
var phmmat = "\u2133";
var phone = "\u260E";
var pi = "\u03C0";
var pitchfork = "\u22D4";
var piv = "\u03D6";
var planck = "\u210F";
var planckh = "\u210E";
var plankv = "\u210F";
var plus = "+";
var plusacir = "\u2A23";
var plusb = "\u229E";
var pluscir = "\u2A22";
var plusdo = "\u2214";
var plusdu = "\u2A25";
var pluse = "\u2A72";
var plusm = "\xB1";
var plusmn = "\xB1";
var plussim = "\u2A26";
var plustwo = "\u2A27";
var pm = "\xB1";
var pointint = "\u2A15";
var popf = "\u{1D561}";
var poun = "\xA3";
var pound = "\xA3";
var pr = "\u227A";
var prE = "\u2AB3";
var prap = "\u2AB7";
var prcue = "\u227C";
var pre = "\u2AAF";
var prec = "\u227A";
var precapprox = "\u2AB7";
var preccurlyeq = "\u227C";
var preceq = "\u2AAF";
var precnapprox = "\u2AB9";
var precneqq = "\u2AB5";
var precnsim = "\u22E8";
var precsim = "\u227E";
var prime = "\u2032";
var primes = "\u2119";
var prnE = "\u2AB5";
var prnap = "\u2AB9";
var prnsim = "\u22E8";
var prod = "\u220F";
var profalar = "\u232E";
var profline = "\u2312";
var profsurf = "\u2313";
var prop = "\u221D";
var propto = "\u221D";
var prsim = "\u227E";
var prurel = "\u22B0";
var pscr = "\u{1D4C5}";
var psi = "\u03C8";
var puncsp = "\u2008";
var qfr = "\u{1D52E}";
var qint = "\u2A0C";
var qopf = "\u{1D562}";
var qprime = "\u2057";
var qscr = "\u{1D4C6}";
var quaternions = "\u210D";
var quatint = "\u2A16";
var quest = "?";
var questeq = "\u225F";
var quo = '"';
var quot = '"';
var rAarr = "\u21DB";
var rArr = "\u21D2";
var rAtail = "\u291C";
var rBarr = "\u290F";
var rHar = "\u2964";
var race = "\u223D\u0331";
var racute = "\u0155";
var radic = "\u221A";
var raemptyv = "\u29B3";
var rang = "\u27E9";
var rangd = "\u2992";
var range = "\u29A5";
var rangle = "\u27E9";
var raqu = "\xBB";
var raquo = "\xBB";
var rarr = "\u2192";
var rarrap = "\u2975";
var rarrb = "\u21E5";
var rarrbfs = "\u2920";
var rarrc = "\u2933";
var rarrfs = "\u291E";
var rarrhk = "\u21AA";
var rarrlp = "\u21AC";
var rarrpl = "\u2945";
var rarrsim = "\u2974";
var rarrtl = "\u21A3";
var rarrw = "\u219D";
var ratail = "\u291A";
var ratio = "\u2236";
var rationals = "\u211A";
var rbarr = "\u290D";
var rbbrk = "\u2773";
var rbrace = "}";
var rbrack = "]";
var rbrke = "\u298C";
var rbrksld = "\u298E";
var rbrkslu = "\u2990";
var rcaron = "\u0159";
var rcedil = "\u0157";
var rceil = "\u2309";
var rcub = "}";
var rcy = "\u0440";
var rdca = "\u2937";
var rdldhar = "\u2969";
var rdquo = "\u201D";
var rdquor = "\u201D";
var rdsh = "\u21B3";
var real = "\u211C";
var realine = "\u211B";
var realpart = "\u211C";
var reals = "\u211D";
var rect = "\u25AD";
var re = "\xAE";
var reg = "\xAE";
var rfisht = "\u297D";
var rfloor = "\u230B";
var rfr = "\u{1D52F}";
var rhard = "\u21C1";
var rharu = "\u21C0";
var rharul = "\u296C";
var rho = "\u03C1";
var rhov = "\u03F1";
var rightarrow = "\u2192";
var rightarrowtail = "\u21A3";
var rightharpoondown = "\u21C1";
var rightharpoonup = "\u21C0";
var rightleftarrows = "\u21C4";
var rightleftharpoons = "\u21CC";
var rightrightarrows = "\u21C9";
var rightsquigarrow = "\u219D";
var rightthreetimes = "\u22CC";
var ring = "\u02DA";
var risingdotseq = "\u2253";
var rlarr = "\u21C4";
var rlhar = "\u21CC";
var rlm = "\u200F";
var rmoust = "\u23B1";
var rmoustache = "\u23B1";
var rnmid = "\u2AEE";
var roang = "\u27ED";
var roarr = "\u21FE";
var robrk = "\u27E7";
var ropar = "\u2986";
var ropf = "\u{1D563}";
var roplus = "\u2A2E";
var rotimes = "\u2A35";
var rpar = ")";
var rpargt = "\u2994";
var rppolint = "\u2A12";
var rrarr = "\u21C9";
var rsaquo = "\u203A";
var rscr = "\u{1D4C7}";
var rsh = "\u21B1";
var rsqb = "]";
var rsquo = "\u2019";
var rsquor = "\u2019";
var rthree = "\u22CC";
var rtimes = "\u22CA";
var rtri = "\u25B9";
var rtrie = "\u22B5";
var rtrif = "\u25B8";
var rtriltri = "\u29CE";
var ruluhar = "\u2968";
var rx = "\u211E";
var sacute = "\u015B";
var sbquo = "\u201A";
var sc = "\u227B";
var scE = "\u2AB4";
var scap = "\u2AB8";
var scaron = "\u0161";
var sccue = "\u227D";
var sce = "\u2AB0";
var scedil = "\u015F";
var scirc = "\u015D";
var scnE = "\u2AB6";
var scnap = "\u2ABA";
var scnsim = "\u22E9";
var scpolint = "\u2A13";
var scsim = "\u227F";
var scy = "\u0441";
var sdot = "\u22C5";
var sdotb = "\u22A1";
var sdote = "\u2A66";
var seArr = "\u21D8";
var searhk = "\u2925";
var searr = "\u2198";
var searrow = "\u2198";
var sec = "\xA7";
var sect = "\xA7";
var semi = ";";
var seswar = "\u2929";
var setminus = "\u2216";
var setmn = "\u2216";
var sext = "\u2736";
var sfr = "\u{1D530}";
var sfrown = "\u2322";
var sharp = "\u266F";
var shchcy = "\u0449";
var shcy = "\u0448";
var shortmid = "\u2223";
var shortparallel = "\u2225";
var sh = "\xAD";
var shy = "\xAD";
var sigma = "\u03C3";
var sigmaf = "\u03C2";
var sigmav = "\u03C2";
var sim = "\u223C";
var simdot = "\u2A6A";
var sime = "\u2243";
var simeq = "\u2243";
var simg = "\u2A9E";
var simgE = "\u2AA0";
var siml = "\u2A9D";
var simlE = "\u2A9F";
var simne = "\u2246";
var simplus = "\u2A24";
var simrarr = "\u2972";
var slarr = "\u2190";
var smallsetminus = "\u2216";
var smashp = "\u2A33";
var smeparsl = "\u29E4";
var smid = "\u2223";
var smile = "\u2323";
var smt = "\u2AAA";
var smte = "\u2AAC";
var smtes = "\u2AAC\uFE00";
var softcy = "\u044C";
var sol = "/";
var solb = "\u29C4";
var solbar = "\u233F";
var sopf = "\u{1D564}";
var spades = "\u2660";
var spadesuit = "\u2660";
var spar = "\u2225";
var sqcap = "\u2293";
var sqcaps = "\u2293\uFE00";
var sqcup = "\u2294";
var sqcups = "\u2294\uFE00";
var sqsub = "\u228F";
var sqsube = "\u2291";
var sqsubset = "\u228F";
var sqsubseteq = "\u2291";
var sqsup = "\u2290";
var sqsupe = "\u2292";
var sqsupset = "\u2290";
var sqsupseteq = "\u2292";
var squ = "\u25A1";
var square = "\u25A1";
var squarf = "\u25AA";
var squf = "\u25AA";
var srarr = "\u2192";
var sscr = "\u{1D4C8}";
var ssetmn = "\u2216";
var ssmile = "\u2323";
var sstarf = "\u22C6";
var star = "\u2606";
var starf = "\u2605";
var straightepsilon = "\u03F5";
var straightphi = "\u03D5";
var strns = "\xAF";
var sub = "\u2282";
var subE = "\u2AC5";
var subdot = "\u2ABD";
var sube = "\u2286";
var subedot = "\u2AC3";
var submult = "\u2AC1";
var subnE = "\u2ACB";
var subne = "\u228A";
var subplus = "\u2ABF";
var subrarr = "\u2979";
var subset = "\u2282";
var subseteq = "\u2286";
var subseteqq = "\u2AC5";
var subsetneq = "\u228A";
var subsetneqq = "\u2ACB";
var subsim = "\u2AC7";
var subsub = "\u2AD5";
var subsup = "\u2AD3";
var succ = "\u227B";
var succapprox = "\u2AB8";
var succcurlyeq = "\u227D";
var succeq = "\u2AB0";
var succnapprox = "\u2ABA";
var succneqq = "\u2AB6";
var succnsim = "\u22E9";
var succsim = "\u227F";
var sum = "\u2211";
var sung = "\u266A";
var sup = "\u2283";
var sup1 = "\xB9";
var sup2 = "\xB2";
var sup3 = "\xB3";
var supE = "\u2AC6";
var supdot = "\u2ABE";
var supdsub = "\u2AD8";
var supe = "\u2287";
var supedot = "\u2AC4";
var suphsol = "\u27C9";
var suphsub = "\u2AD7";
var suplarr = "\u297B";
var supmult = "\u2AC2";
var supnE = "\u2ACC";
var supne = "\u228B";
var supplus = "\u2AC0";
var supset = "\u2283";
var supseteq = "\u2287";
var supseteqq = "\u2AC6";
var supsetneq = "\u228B";
var supsetneqq = "\u2ACC";
var supsim = "\u2AC8";
var supsub = "\u2AD4";
var supsup = "\u2AD6";
var swArr = "\u21D9";
var swarhk = "\u2926";
var swarr = "\u2199";
var swarrow = "\u2199";
var swnwar = "\u292A";
var szli = "\xDF";
var szlig = "\xDF";
var target = "\u2316";
var tau = "\u03C4";
var tbrk = "\u23B4";
var tcaron = "\u0165";
var tcedil = "\u0163";
var tcy = "\u0442";
var tdot = "\u20DB";
var telrec = "\u2315";
var tfr = "\u{1D531}";
var there4 = "\u2234";
var therefore = "\u2234";
var theta = "\u03B8";
var thetasym = "\u03D1";
var thetav = "\u03D1";
var thickapprox = "\u2248";
var thicksim = "\u223C";
var thinsp = "\u2009";
var thkap = "\u2248";
var thksim = "\u223C";
var thor = "\xFE";
var thorn = "\xFE";
var tilde = "\u02DC";
var time = "\xD7";
var times = "\xD7";
var timesb = "\u22A0";
var timesbar = "\u2A31";
var timesd = "\u2A30";
var tint = "\u222D";
var toea = "\u2928";
var top = "\u22A4";
var topbot = "\u2336";
var topcir = "\u2AF1";
var topf = "\u{1D565}";
var topfork = "\u2ADA";
var tosa = "\u2929";
var tprime = "\u2034";
var trade = "\u2122";
var triangle = "\u25B5";
var triangledown = "\u25BF";
var triangleleft = "\u25C3";
var trianglelefteq = "\u22B4";
var triangleq = "\u225C";
var triangleright = "\u25B9";
var trianglerighteq = "\u22B5";
var tridot = "\u25EC";
var trie = "\u225C";
var triminus = "\u2A3A";
var triplus = "\u2A39";
var trisb = "\u29CD";
var tritime = "\u2A3B";
var trpezium = "\u23E2";
var tscr = "\u{1D4C9}";
var tscy = "\u0446";
var tshcy = "\u045B";
var tstrok = "\u0167";
var twixt = "\u226C";
var twoheadleftarrow = "\u219E";
var twoheadrightarrow = "\u21A0";
var uArr = "\u21D1";
var uHar = "\u2963";
var uacut = "\xFA";
var uacute = "\xFA";
var uarr = "\u2191";
var ubrcy = "\u045E";
var ubreve = "\u016D";
var ucir = "\xFB";
var ucirc = "\xFB";
var ucy = "\u0443";
var udarr = "\u21C5";
var udblac = "\u0171";
var udhar = "\u296E";
var ufisht = "\u297E";
var ufr = "\u{1D532}";
var ugrav = "\xF9";
var ugrave = "\xF9";
var uharl = "\u21BF";
var uharr = "\u21BE";
var uhblk = "\u2580";
var ulcorn = "\u231C";
var ulcorner = "\u231C";
var ulcrop = "\u230F";
var ultri = "\u25F8";
var umacr = "\u016B";
var um = "\xA8";
var uml = "\xA8";
var uogon = "\u0173";
var uopf = "\u{1D566}";
var uparrow = "\u2191";
var updownarrow = "\u2195";
var upharpoonleft = "\u21BF";
var upharpoonright = "\u21BE";
var uplus = "\u228E";
var upsi = "\u03C5";
var upsih = "\u03D2";
var upsilon = "\u03C5";
var upuparrows = "\u21C8";
var urcorn = "\u231D";
var urcorner = "\u231D";
var urcrop = "\u230E";
var uring = "\u016F";
var urtri = "\u25F9";
var uscr = "\u{1D4CA}";
var utdot = "\u22F0";
var utilde = "\u0169";
var utri = "\u25B5";
var utrif = "\u25B4";
var uuarr = "\u21C8";
var uum = "\xFC";
var uuml = "\xFC";
var uwangle = "\u29A7";
var vArr = "\u21D5";
var vBar = "\u2AE8";
var vBarv = "\u2AE9";
var vDash = "\u22A8";
var vangrt = "\u299C";
var varepsilon = "\u03F5";
var varkappa = "\u03F0";
var varnothing = "\u2205";
var varphi = "\u03D5";
var varpi = "\u03D6";
var varpropto = "\u221D";
var varr = "\u2195";
var varrho = "\u03F1";
var varsigma = "\u03C2";
var varsubsetneq = "\u228A\uFE00";
var varsubsetneqq = "\u2ACB\uFE00";
var varsupsetneq = "\u228B\uFE00";
var varsupsetneqq = "\u2ACC\uFE00";
var vartheta = "\u03D1";
var vartriangleleft = "\u22B2";
var vartriangleright = "\u22B3";
var vcy = "\u0432";
var vdash = "\u22A2";
var vee = "\u2228";
var veebar = "\u22BB";
var veeeq = "\u225A";
var vellip = "\u22EE";
var verbar = "|";
var vert = "|";
var vfr = "\u{1D533}";
var vltri = "\u22B2";
var vnsub = "\u2282\u20D2";
var vnsup = "\u2283\u20D2";
var vopf = "\u{1D567}";
var vprop = "\u221D";
var vrtri = "\u22B3";
var vscr = "\u{1D4CB}";
var vsubnE = "\u2ACB\uFE00";
var vsubne = "\u228A\uFE00";
var vsupnE = "\u2ACC\uFE00";
var vsupne = "\u228B\uFE00";
var vzigzag = "\u299A";
var wcirc = "\u0175";
var wedbar = "\u2A5F";
var wedge = "\u2227";
var wedgeq = "\u2259";
var weierp = "\u2118";
var wfr = "\u{1D534}";
var wopf = "\u{1D568}";
var wp = "\u2118";
var wr = "\u2240";
var wreath = "\u2240";
var wscr = "\u{1D4CC}";
var xcap = "\u22C2";
var xcirc = "\u25EF";
var xcup = "\u22C3";
var xdtri = "\u25BD";
var xfr = "\u{1D535}";
var xhArr = "\u27FA";
var xharr = "\u27F7";
var xi = "\u03BE";
var xlArr = "\u27F8";
var xlarr = "\u27F5";
var xmap = "\u27FC";
var xnis = "\u22FB";
var xodot = "\u2A00";
var xopf = "\u{1D569}";
var xoplus = "\u2A01";
var xotime = "\u2A02";
var xrArr = "\u27F9";
var xrarr = "\u27F6";
var xscr = "\u{1D4CD}";
var xsqcup = "\u2A06";
var xuplus = "\u2A04";
var xutri = "\u25B3";
var xvee = "\u22C1";
var xwedge = "\u22C0";
var yacut = "\xFD";
var yacute = "\xFD";
var yacy = "\u044F";
var ycirc = "\u0177";
var ycy = "\u044B";
var ye = "\xA5";
var yen = "\xA5";
var yfr = "\u{1D536}";
var yicy = "\u0457";
var yopf = "\u{1D56A}";
var yscr = "\u{1D4CE}";
var yucy = "\u044E";
var yum = "\xFF";
var yuml = "\xFF";
var zacute = "\u017A";
var zcaron = "\u017E";
var zcy = "\u0437";
var zdot = "\u017C";
var zeetrf = "\u2128";
var zeta = "\u03B6";
var zfr = "\u{1D537}";
var zhcy = "\u0436";
var zigrarr = "\u21DD";
var zopf = "\u{1D56B}";
var zscr = "\u{1D4CF}";
var zwj = "\u200D";
var zwnj = "\u200C";
var require$$0 = {
  AEli,
  AElig,
  AM,
  AMP,
  Aacut,
  Aacute,
  Abreve,
  Acir,
  Acirc,
  Acy,
  Afr,
  Agrav,
  Agrave,
  Alpha,
  Amacr,
  And,
  Aogon,
  Aopf,
  ApplyFunction,
  Arin,
  Aring,
  Ascr,
  Assign,
  Atild,
  Atilde,
  Aum,
  Auml,
  Backslash,
  Barv,
  Barwed,
  Bcy,
  Because,
  Bernoullis,
  Beta,
  Bfr,
  Bopf,
  Breve,
  Bscr,
  Bumpeq,
  CHcy,
  COP,
  COPY,
  Cacute,
  Cap,
  CapitalDifferentialD,
  Cayleys,
  Ccaron,
  Ccedi,
  Ccedil,
  Ccirc,
  Cconint,
  Cdot,
  Cedilla,
  CenterDot,
  Cfr,
  Chi,
  CircleDot,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  Colon,
  Colone,
  Congruent,
  Conint,
  ContourIntegral,
  Copf,
  Coproduct,
  CounterClockwiseContourIntegral,
  Cross,
  Cscr,
  Cup,
  CupCap,
  DD,
  DDotrahd,
  DJcy,
  DScy,
  DZcy,
  Dagger,
  Darr,
  Dashv,
  Dcaron,
  Dcy,
  Del,
  Delta,
  Dfr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  Diamond,
  DifferentialD,
  Dopf,
  Dot,
  DotDot,
  DotEqual,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrow,
  DownArrowBar,
  DownArrowUpArrow,
  DownBreve,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVector,
  DownLeftVectorBar,
  DownRightTeeVector,
  DownRightVector,
  DownRightVectorBar,
  DownTee,
  DownTeeArrow,
  Downarrow,
  Dscr,
  Dstrok,
  ENG,
  ET,
  ETH,
  Eacut,
  Eacute,
  Ecaron,
  Ecir,
  Ecirc,
  Ecy,
  Edot,
  Efr,
  Egrav,
  Egrave,
  Element,
  Emacr,
  EmptySmallSquare,
  EmptyVerySmallSquare,
  Eogon,
  Eopf,
  Epsilon,
  Equal,
  EqualTilde,
  Equilibrium,
  Escr,
  Esim,
  Eta,
  Eum,
  Euml,
  Exists,
  ExponentialE,
  Fcy,
  Ffr,
  FilledSmallSquare,
  FilledVerySmallSquare,
  Fopf,
  ForAll,
  Fouriertrf,
  Fscr,
  GJcy,
  G,
  GT,
  Gamma,
  Gammad,
  Gbreve,
  Gcedil,
  Gcirc,
  Gcy,
  Gdot,
  Gfr,
  Gg,
  Gopf,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  Gt,
  HARDcy,
  Hacek,
  Hat,
  Hcirc,
  Hfr,
  HilbertSpace,
  Hopf,
  HorizontalLine,
  Hscr,
  Hstrok,
  HumpDownHump,
  HumpEqual,
  IEcy,
  IJlig,
  IOcy,
  Iacut,
  Iacute,
  Icir,
  Icirc,
  Icy,
  Idot,
  Ifr,
  Igrav,
  Igrave,
  Im,
  Imacr,
  ImaginaryI,
  Implies,
  Int,
  Integral,
  Intersection,
  InvisibleComma,
  InvisibleTimes,
  Iogon,
  Iopf,
  Iota,
  Iscr,
  Itilde,
  Iukcy,
  Ium,
  Iuml,
  Jcirc,
  Jcy,
  Jfr,
  Jopf,
  Jscr,
  Jsercy,
  Jukcy,
  KHcy,
  KJcy,
  Kappa,
  Kcedil,
  Kcy,
  Kfr,
  Kopf,
  Kscr,
  LJcy,
  L,
  LT,
  Lacute,
  Lambda,
  Lang,
  Laplacetrf,
  Larr,
  Lcaron,
  Lcedil,
  Lcy,
  LeftAngleBracket,
  LeftArrow,
  LeftArrowBar,
  LeftArrowRightArrow,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVector,
  LeftDownVectorBar,
  LeftFloor,
  LeftRightArrow,
  LeftRightVector,
  LeftTee,
  LeftTeeArrow,
  LeftTeeVector,
  LeftTriangle,
  LeftTriangleBar,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVector,
  LeftUpVectorBar,
  LeftVector,
  LeftVectorBar,
  Leftarrow,
  Leftrightarrow,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  LessLess,
  LessSlantEqual,
  LessTilde,
  Lfr,
  Ll,
  Lleftarrow,
  Lmidot,
  LongLeftArrow,
  LongLeftRightArrow,
  LongRightArrow,
  Longleftarrow,
  Longleftrightarrow,
  Longrightarrow,
  Lopf,
  LowerLeftArrow,
  LowerRightArrow,
  Lscr,
  Lsh,
  Lstrok,
  Lt,
  "Map": "\u2905",
  Mcy,
  MediumSpace,
  Mellintrf,
  Mfr,
  MinusPlus,
  Mopf,
  Mscr,
  Mu,
  NJcy,
  Nacute,
  Ncaron,
  Ncedil,
  Ncy,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  Nfr,
  NoBreak,
  NonBreakingSpace,
  Nopf,
  Not,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  NotLeftTriangle,
  NotLeftTriangleBar,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangle,
  NotRightTriangleBar,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  Nscr,
  Ntild,
  Ntilde,
  Nu,
  OElig,
  Oacut,
  Oacute,
  Ocir,
  Ocirc,
  Ocy,
  Odblac,
  Ofr,
  Ograv,
  Ograve,
  Omacr,
  Omega,
  Omicron,
  Oopf,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  Or,
  Oscr,
  Oslas,
  Oslash,
  Otild,
  Otilde,
  Otimes,
  Oum,
  Ouml,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  PartialD,
  Pcy,
  Pfr,
  Phi,
  Pi,
  PlusMinus,
  Poincareplane,
  Popf,
  Pr,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  Prime,
  Product,
  Proportion,
  Proportional,
  Pscr,
  Psi,
  QUO,
  QUOT,
  Qfr,
  Qopf,
  Qscr,
  RBarr,
  RE,
  REG,
  Racute,
  Rang,
  Rarr,
  Rarrtl,
  Rcaron,
  Rcedil,
  Rcy,
  Re,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  Rfr,
  Rho,
  RightAngleBracket,
  RightArrow,
  RightArrowBar,
  RightArrowLeftArrow,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVector,
  RightDownVectorBar,
  RightFloor,
  RightTee,
  RightTeeArrow,
  RightTeeVector,
  RightTriangle,
  RightTriangleBar,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVector,
  RightUpVectorBar,
  RightVector,
  RightVectorBar,
  Rightarrow,
  Ropf,
  RoundImplies,
  Rrightarrow,
  Rscr,
  Rsh,
  RuleDelayed,
  SHCHcy,
  SHcy,
  SOFTcy,
  Sacute,
  Sc,
  Scaron,
  Scedil,
  Scirc,
  Scy,
  Sfr,
  ShortDownArrow,
  ShortLeftArrow,
  ShortRightArrow,
  ShortUpArrow,
  Sigma,
  SmallCircle,
  Sopf,
  Sqrt,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  Sscr,
  Star,
  Sub,
  Subset,
  SubsetEqual,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  SuchThat,
  Sum,
  Sup,
  Superset,
  SupersetEqual,
  Supset,
  THOR,
  THORN,
  TRADE,
  TSHcy,
  TScy,
  Tab,
  Tau,
  Tcaron,
  Tcedil,
  Tcy,
  Tfr,
  Therefore,
  Theta,
  ThickSpace,
  ThinSpace,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  Topf,
  TripleDot,
  Tscr,
  Tstrok,
  Uacut,
  Uacute,
  Uarr,
  Uarrocir,
  Ubrcy,
  Ubreve,
  Ucir,
  Ucirc,
  Ucy,
  Udblac,
  Ufr,
  Ugrav,
  Ugrave,
  Umacr,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  Uopf,
  UpArrow,
  UpArrowBar,
  UpArrowDownArrow,
  UpDownArrow,
  UpEquilibrium,
  UpTee,
  UpTeeArrow,
  Uparrow,
  Updownarrow,
  UpperLeftArrow,
  UpperRightArrow,
  Upsi,
  Upsilon,
  Uring,
  Uscr,
  Utilde,
  Uum,
  Uuml,
  VDash,
  Vbar,
  Vcy,
  Vdash,
  Vdashl,
  Vee,
  Verbar,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  Vopf,
  Vscr,
  Vvdash,
  Wcirc,
  Wedge,
  Wfr,
  Wopf,
  Wscr,
  Xfr,
  Xi,
  Xopf,
  Xscr,
  YAcy,
  YIcy,
  YUcy,
  Yacut,
  Yacute,
  Ycirc,
  Ycy,
  Yfr,
  Yopf,
  Yscr,
  Yuml,
  ZHcy,
  Zacute,
  Zcaron,
  Zcy,
  Zdot,
  ZeroWidthSpace,
  Zeta,
  Zfr,
  Zopf,
  Zscr,
  aacut,
  aacute,
  abreve,
  ac,
  acE,
  acd,
  acir,
  acirc,
  acut,
  acute,
  acy,
  aeli,
  aelig,
  af,
  afr,
  agrav,
  agrave,
  alefsym,
  aleph,
  alpha,
  amacr,
  amalg,
  am,
  amp,
  and,
  andand,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsd,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  aogon,
  aopf,
  ap,
  apE,
  apacir,
  ape,
  apid,
  apos,
  approx,
  approxeq,
  arin,
  aring,
  ascr,
  ast,
  asymp,
  asympeq,
  atild,
  atilde,
  aum,
  auml,
  awconint,
  awint,
  bNot,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  barvee,
  barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  bcy,
  bdquo,
  becaus,
  because,
  bemptyv,
  bepsi,
  bernou,
  beta,
  beth,
  between,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bnot,
  bopf,
  bot,
  bottom,
  bowtie,
  boxDL,
  boxDR,
  boxDl,
  boxDr,
  boxH,
  boxHD,
  boxHU,
  boxHd,
  boxHu,
  boxUL,
  boxUR,
  boxUl,
  boxUr,
  boxV,
  boxVH,
  boxVL,
  boxVR,
  boxVh,
  boxVl,
  boxVr,
  boxbox,
  boxdL,
  boxdR,
  boxdl,
  boxdr,
  boxh,
  boxhD,
  boxhU,
  boxhd,
  boxhu,
  boxminus,
  boxplus,
  boxtimes,
  boxuL,
  boxuR,
  boxul,
  boxur,
  boxv,
  boxvH,
  boxvL,
  boxvR,
  boxvh,
  boxvl,
  boxvr,
  bprime,
  breve,
  brvba,
  brvbar,
  bscr,
  bsemi,
  bsim,
  bsime,
  bsol,
  bsolb,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  bumpeq,
  cacute,
  cap,
  capand,
  capbrcup,
  capcap,
  capcup,
  capdot,
  caps,
  caret,
  caron,
  ccaps,
  ccaron,
  ccedi,
  ccedil,
  ccirc,
  ccups,
  ccupssm,
  cdot,
  cedi,
  cedil,
  cemptyv,
  cen,
  cent,
  centerdot,
  cfr,
  chcy,
  check,
  checkmark,
  chi,
  cir,
  cirE,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledR,
  circledS,
  circledast,
  circledcirc,
  circleddash,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  clubs,
  clubsuit,
  colon,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  conint,
  copf,
  coprod,
  cop,
  copy,
  copysr,
  crarr,
  cross,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cup,
  cupbrcap,
  cupcap,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curre,
  curren,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dArr,
  dHar,
  dagger,
  daleth,
  darr,
  dash,
  dashv,
  dbkarow,
  dblac,
  dcaron,
  dcy,
  dd,
  ddagger,
  ddarr,
  ddotseq,
  de,
  deg,
  delta,
  demptyv,
  dfisht,
  dfr,
  dharl,
  dharr,
  diam,
  diamond,
  diamondsuit,
  diams,
  die,
  digamma,
  disin,
  div,
  divid,
  divide,
  divideontimes,
  divonx,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  dopf,
  dot,
  doteq,
  doteqdot,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  downarrow,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  drbkarow,
  drcorn,
  drcrop,
  dscr,
  dscy,
  dsol,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  dzcy,
  dzigrarr,
  eDDot,
  eDot,
  eacut,
  eacute,
  easter,
  ecaron,
  ecir,
  ecirc,
  ecolon,
  ecy,
  edot,
  ee,
  efDot,
  efr,
  eg,
  egrav,
  egrave,
  egs,
  egsdot,
  el,
  elinters,
  ell,
  els,
  elsdot,
  emacr,
  empty,
  emptyset,
  emptyv,
  emsp13,
  emsp14,
  emsp,
  eng,
  ensp,
  eogon,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  equals,
  equest,
  equiv,
  equivDD,
  eqvparsl,
  erDot,
  erarr,
  escr,
  esdot,
  esim,
  eta,
  et,
  eth,
  eum,
  euml,
  euro,
  excl,
  exist,
  expectation,
  exponentiale,
  fallingdotseq,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  ffr,
  filig,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  fopf,
  forall,
  fork,
  forkv,
  fpartint,
  frac1,
  frac12,
  frac13,
  frac14,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac3,
  frac34,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  gE,
  gEl,
  gacute,
  gamma,
  gammad,
  gap,
  gbreve,
  gcirc,
  gcy,
  gdot,
  ge,
  gel,
  geq,
  geqq,
  geqslant,
  ges,
  gescc,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  gfr,
  gg,
  ggg,
  gimel,
  gjcy,
  gl,
  glE,
  gla,
  glj,
  gnE,
  gnap,
  gnapprox,
  gne,
  gneq,
  gneqq,
  gnsim,
  gopf,
  grave,
  gscr,
  gsim,
  gsime,
  gsiml,
  g,
  gt,
  gtcc,
  gtcir,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  hArr,
  hairsp,
  half,
  hamilt,
  hardcy,
  harr,
  harrcir,
  harrw,
  hbar,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  horbar,
  hscr,
  hslash,
  hstrok,
  hybull,
  hyphen,
  iacut,
  iacute,
  ic,
  icir,
  icirc,
  icy,
  iecy,
  iexc,
  iexcl,
  iff,
  ifr,
  igrav,
  igrave,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  ijlig,
  imacr,
  image,
  imagline,
  imagpart,
  imath,
  imof,
  imped,
  "in": "\u2208",
  incare,
  infin,
  infintie,
  inodot,
  int,
  intcal,
  integers,
  intercal,
  intlarhk,
  intprod,
  iocy,
  iogon,
  iopf,
  iota,
  iprod,
  iques,
  iquest,
  iscr,
  isin,
  isinE,
  isindot,
  isins,
  isinsv,
  isinv,
  it,
  itilde,
  iukcy,
  ium,
  iuml,
  jcirc,
  jcy,
  jfr,
  jmath,
  jopf,
  jscr,
  jsercy,
  jukcy,
  kappa,
  kappav,
  kcedil,
  kcy,
  kfr,
  kgreen,
  khcy,
  kjcy,
  kopf,
  kscr,
  lAarr,
  lArr,
  lAtail,
  lBarr,
  lE,
  lEg,
  lHar,
  lacute,
  laemptyv,
  lagran,
  lambda,
  lang,
  langd,
  langle,
  lap,
  laqu,
  laquo,
  larr,
  larrb,
  larrbfs,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  lat,
  latail,
  late,
  lates,
  lbarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  lcaron,
  lcedil,
  lceil,
  lcub,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  leftarrow,
  leftarrowtail,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  leftthreetimes,
  leg,
  leq,
  leqq,
  leqslant,
  les,
  lescc,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  lessgtr,
  lesssim,
  lfisht,
  lfloor,
  lfr,
  lg,
  lgE,
  lhard,
  lharu,
  lharul,
  lhblk,
  ljcy,
  ll,
  llarr,
  llcorner,
  llhard,
  lltri,
  lmidot,
  lmoust,
  lmoustache,
  lnE,
  lnap,
  lnapprox,
  lne,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  longleftrightarrow,
  longmapsto,
  longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  lstrok,
  l,
  lt,
  ltcc,
  ltcir,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltrPar,
  ltri,
  ltrie,
  ltrif,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  mDDot,
  mac,
  macr,
  male,
  malt,
  maltese,
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  mcy,
  mdash,
  measuredangle,
  mfr,
  mho,
  micr,
  micro,
  mid,
  midast,
  midcir,
  middo,
  middot,
  minus,
  minusb,
  minusd,
  minusdu,
  mlcp,
  mldr,
  mnplus,
  models,
  mopf,
  mp,
  mscr,
  mstpos,
  mu,
  multimap,
  mumap,
  nGg,
  nGt,
  nGtv,
  nLeftarrow,
  nLeftrightarrow,
  nLl,
  nLt,
  nLtv,
  nRightarrow,
  nVDash,
  nVdash,
  nabla,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natur,
  natural,
  naturals,
  nbs,
  nbsp,
  nbump,
  nbumpe,
  ncap,
  ncaron,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  ncy,
  ndash,
  ne,
  neArr,
  nearhk,
  nearr,
  nearrow,
  nedot,
  nequiv,
  nesear,
  nesim,
  nexist,
  nexists,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  ngsim,
  ngt,
  ngtr,
  nhArr,
  nharr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  njcy,
  nlArr,
  nlE,
  nlarr,
  nldr,
  nle,
  nleftarrow,
  nleftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nlsim,
  nlt,
  nltri,
  nltrie,
  nmid,
  nopf,
  no,
  not,
  notin,
  notinE,
  notindot,
  notinva,
  notinvb,
  notinvc,
  notni,
  notniva,
  notnivb,
  notnivc,
  npar,
  nparallel,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  npre,
  nprec,
  npreceq,
  nrArr,
  nrarr,
  nrarrc,
  nrarrw,
  nrightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  ntild,
  ntilde,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  nu,
  num,
  numero,
  numsp,
  nvDash,
  nvHarr,
  nvap,
  nvdash,
  nvge,
  nvgt,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwArr,
  nwarhk,
  nwarr,
  nwarrow,
  nwnear,
  oS,
  oacut,
  oacute,
  oast,
  ocir,
  ocirc,
  ocy,
  odash,
  odblac,
  odiv,
  odot,
  odsold,
  oelig,
  ofcir,
  ofr,
  ogon,
  ograv,
  ograve,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  omacr,
  omega,
  omicron,
  omid,
  ominus,
  oopf,
  opar,
  operp,
  oplus,
  or,
  orarr,
  ord,
  order,
  orderof,
  ordf,
  ordm,
  origof,
  oror,
  orslope,
  orv,
  oscr,
  oslas,
  oslash,
  osol,
  otild,
  otilde,
  otimes,
  otimesas,
  oum,
  ouml,
  ovbar,
  par,
  para,
  parallel,
  parsim,
  parsl,
  part,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  pfr,
  phi,
  phiv,
  phmmat,
  phone,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plus,
  plusacir,
  plusb,
  pluscir,
  plusdo,
  plusdu,
  pluse,
  plusm,
  plusmn,
  plussim,
  plustwo,
  pm,
  pointint,
  popf,
  poun,
  pound,
  pr,
  prE,
  prap,
  prcue,
  pre,
  prec,
  precapprox,
  preccurlyeq,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  precsim,
  prime,
  primes,
  prnE,
  prnap,
  prnsim,
  prod,
  profalar,
  profline,
  profsurf,
  prop,
  propto,
  prsim,
  prurel,
  pscr,
  psi,
  puncsp,
  qfr,
  qint,
  qopf,
  qprime,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quo,
  quot,
  rAarr,
  rArr,
  rAtail,
  rBarr,
  rHar,
  race,
  racute,
  radic,
  raemptyv,
  rang,
  rangd,
  range,
  rangle,
  raqu,
  raquo,
  rarr,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  rarrtl,
  rarrw,
  ratail,
  ratio,
  rationals,
  rbarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  rcaron,
  rcedil,
  rceil,
  rcub,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  rect,
  re,
  reg,
  rfisht,
  rfloor,
  rfr,
  rhard,
  rharu,
  rharul,
  rho,
  rhov,
  rightarrow,
  rightarrowtail,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  rightthreetimes,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoust,
  rmoustache,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  roplus,
  rotimes,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  rsaquo,
  rscr,
  rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  ruluhar,
  rx,
  sacute,
  sbquo,
  sc,
  scE,
  scap,
  scaron,
  sccue,
  sce,
  scedil,
  scirc,
  scnE,
  scnap,
  scnsim,
  scpolint,
  scsim,
  scy,
  sdot,
  sdotb,
  sdote,
  seArr,
  searhk,
  searr,
  searrow,
  sec,
  sect,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  sfr,
  sfrown,
  sharp,
  shchcy,
  shcy,
  shortmid,
  shortparallel,
  sh,
  shy,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  softcy,
  sol,
  solb,
  solbar,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  squ,
  square,
  squarf,
  squf,
  srarr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  subE,
  subdot,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  subseteq,
  subseteqq,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succ,
  succapprox,
  succcurlyeq,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  sum,
  sung,
  sup,
  sup1,
  sup2,
  sup3,
  supE,
  supdot,
  supdsub,
  supe,
  supedot,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swArr,
  swarhk,
  swarr,
  swarrow,
  swnwar,
  szli,
  szlig,
  target,
  tau,
  tbrk,
  tcaron,
  tcedil,
  tcy,
  tdot,
  telrec,
  tfr,
  there4,
  therefore,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  thinsp,
  thkap,
  thksim,
  thor,
  thorn,
  tilde,
  time,
  times,
  timesb,
  timesbar,
  timesd,
  tint,
  toea,
  top,
  topbot,
  topcir,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  triplus,
  trisb,
  tritime,
  trpezium,
  tscr,
  tscy,
  tshcy,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  uArr,
  uHar,
  uacut,
  uacute,
  uarr,
  ubrcy,
  ubreve,
  ucir,
  ucirc,
  ucy,
  udarr,
  udblac,
  udhar,
  ufisht,
  ufr,
  ugrav,
  ugrave,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  umacr,
  um,
  uml,
  uogon,
  uopf,
  uparrow,
  updownarrow,
  upharpoonleft,
  upharpoonright,
  uplus,
  upsi,
  upsih,
  upsilon,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  uring,
  urtri,
  uscr,
  utdot,
  utilde,
  utri,
  utrif,
  uuarr,
  uum,
  uuml,
  uwangle,
  vArr,
  vBar,
  vBarv,
  vDash,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vcy,
  vdash,
  vee,
  veebar,
  veeeq,
  vellip,
  verbar,
  vert,
  vfr,
  vltri,
  vnsub,
  vnsup,
  vopf,
  vprop,
  vrtri,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  vzigzag,
  wcirc,
  wedbar,
  wedge,
  wedgeq,
  weierp,
  wfr,
  wopf,
  wp,
  wr,
  wreath,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  xfr,
  xhArr,
  xharr,
  xi,
  xlArr,
  xlarr,
  xmap,
  xnis,
  xodot,
  xopf,
  xoplus,
  xotime,
  xrArr,
  xrarr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  yacut,
  yacute,
  yacy,
  ycirc,
  ycy,
  ye,
  yen,
  yfr,
  yicy,
  yopf,
  yscr,
  yucy,
  yum,
  yuml,
  zacute,
  zcaron,
  zcy,
  zdot,
  zeetrf,
  zeta,
  zfr,
  zhcy,
  zigrarr,
  zopf,
  zscr,
  zwj,
  zwnj
};
var characterEntities = require$$0;
var decodeEntity_1 = decodeEntity$1;
var own$2 = {}.hasOwnProperty;
function decodeEntity$1(characters) {
  return own$2.call(characterEntities, characters) ? characterEntities[characters] : false;
}
__name(decodeEntity$1, "decodeEntity$1");
var legacy = require$$0$1;
var invalid = require$$1;
var decimal = isDecimal;
var hexadecimal = isHexadecimal;
var alphanumerical = isAlphanumerical;
var decodeEntity = decodeEntity_1;
var parseEntities_1 = parseEntities;
var own$1 = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype;
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
};
var tab = 9;
var lineFeed = 10;
var formFeed = 12;
var space = 32;
var ampersand = 38;
var semicolon = 59;
var lessThan = 60;
var equalsTo = 61;
var numberSign = 35;
var uppercaseX = 88;
var lowercaseX = 120;
var replacementCharacter = 65533;
var name = "named";
var hexa = "hexadecimal";
var deci = "decimal";
var bases = {};
bases[hexa] = 16;
bases[deci] = 10;
var tests = {};
tests[name] = alphanumerical;
tests[deci] = decimal;
tests[hexa] = hexadecimal;
var namedNotTerminated = 1;
var numericNotTerminated = 2;
var namedEmpty = 3;
var numericEmpty = 4;
var namedUnknown = 5;
var numericDisallowed = 6;
var numericProhibited = 7;
var messages = {};
messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
messages[namedEmpty] = "Named character references cannot be empty";
messages[numericEmpty] = "Numeric character references cannot be empty";
messages[namedUnknown] = "Named character references must be known";
messages[numericDisallowed] = "Numeric character references cannot be disallowed";
messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
function parseEntities(value, options) {
  var settings = {};
  var option;
  var key;
  if (!options) {
    options = {};
  }
  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === void 0 ? defaults[key] : option;
  }
  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }
  return parse(value, settings);
}
__name(parseEntities, "parseEntities");
function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = "";
  var result = [];
  var entityCharacters;
  var namedEntity;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type;
  var test;
  var prev;
  var next;
  var diff;
  var end;
  if (typeof additional === "string") {
    additional = additional.charCodeAt(0);
  }
  prev = now();
  warning = handleWarning ? parseError : noop;
  index--;
  length++;
  while (++index < length) {
    if (character === lineFeed) {
      column = indent[lines] || 1;
    }
    character = value.charCodeAt(index);
    if (character === ampersand) {
      following = value.charCodeAt(index + 1);
      if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
        queue += fromCharCode(character);
        column++;
        continue;
      }
      start = index + 1;
      begin = start;
      end = start;
      if (following === numberSign) {
        end = ++begin;
        following = value.charCodeAt(end);
        if (following === uppercaseX || following === lowercaseX) {
          type = hexa;
          end = ++begin;
        } else {
          type = deci;
        }
      } else {
        type = name;
      }
      entityCharacters = "";
      entity = "";
      characters = "";
      test = tests[type];
      end--;
      while (++end < length) {
        following = value.charCodeAt(end);
        if (!test(following)) {
          break;
        }
        characters += fromCharCode(following);
        if (type === name && own$1.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }
      terminated = value.charCodeAt(end) === semicolon;
      if (terminated) {
        end++;
        namedEntity = type === name ? decodeEntity(characters) : false;
        if (namedEntity) {
          entityCharacters = characters;
          entity = namedEntity;
        }
      }
      diff = 1 + end - start;
      if (!terminated && !nonTerminated)
        ;
      else if (!characters) {
        if (type !== name) {
          warning(numericEmpty, diff);
        }
      } else if (type === name) {
        if (terminated && !entity) {
          warning(namedUnknown, 1);
        } else {
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty;
            if (settings.attribute) {
              following = value.charCodeAt(end);
              if (following === equalsTo) {
                warning(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }
        reference = entity;
      } else {
        if (!terminated) {
          warning(numericNotTerminated, diff);
        }
        reference = parseInt(characters, bases[type]);
        if (prohibited(reference)) {
          warning(numericProhibited, diff);
          reference = fromCharCode(replacementCharacter);
        } else if (reference in invalid) {
          warning(numericDisallowed, diff);
          reference = invalid[reference];
        } else {
          output = "";
          if (disallowed(reference)) {
            warning(numericDisallowed, diff);
          }
          if (reference > 65535) {
            reference -= 65536;
            output += fromCharCode(reference >>> (10 & 1023) | 55296);
            reference = 56320 | reference & 1023;
          }
          reference = output + fromCharCode(reference);
        }
      }
      if (reference) {
        flush();
        prev = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now();
        next.offset++;
        if (handleReference) {
          handleReference.call(referenceContext, reference, {
            start: prev,
            end: next
          }, value.slice(start - 1, end));
        }
        prev = next;
      } else {
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index = end - 1;
      }
    } else {
      if (character === 10) {
        line++;
        lines++;
        column = 0;
      }
      if (character === character) {
        queue += fromCharCode(character);
        column++;
      } else {
        flush();
      }
    }
  }
  return result.join("");
  function now() {
    return {
      line,
      column,
      offset: index + (pos.offset || 0)
    };
  }
  __name(now, "now");
  function parseError(code, offset) {
    var position = now();
    position.column += offset;
    position.offset += offset;
    handleWarning.call(warningContext, messages[code], position, code);
  }
  __name(parseError, "parseError");
  function flush() {
    if (queue) {
      result.push(queue);
      if (handleText) {
        handleText.call(textContext, queue, {
          start: prev,
          end: now()
        });
      }
      queue = "";
    }
  }
  __name(flush, "flush");
}
__name(parse, "parse");
function prohibited(code) {
  return code >= 55296 && code <= 57343 || code > 1114111;
}
__name(prohibited, "prohibited");
function disallowed(code) {
  return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
}
__name(disallowed, "disallowed");
var prismCore = {
  exports: {}
};
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang2 = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: /* @__PURE__ */ __name(function encode2(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode2(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode2);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        }, "encode"),
        type: /* @__PURE__ */ __name(function type(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        }, "type"),
        objId: /* @__PURE__ */ __name(function objId(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", {
              value: ++uniqueId
            });
          }
          return obj["__id"];
        }, "objId"),
        clone: /* @__PURE__ */ __name(function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;
          switch (_.util.type(o)) {
            case "Object":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = {};
              visited[id] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return clone;
            case "Array":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = [];
              visited[id] = clone;
              o.forEach(function(v, i) {
                clone[i] = deepClone(v, visited);
              });
              return clone;
            default:
              return o;
          }
        }, "deepClone"),
        getLanguage: /* @__PURE__ */ __name(function getLanguage(element) {
          while (element) {
            var m = lang2.exec(element.className);
            if (m) {
              return m[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        }, "getLanguage"),
        setLanguage: /* @__PURE__ */ __name(function setLanguage(element, language) {
          element.className = element.className.replace(RegExp(lang2, "gi"), "");
          element.classList.add("language-" + language);
        }, "setLanguage"),
        currentScript: /* @__PURE__ */ __name(function currentScript() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        }, "currentScript"),
        isActive: /* @__PURE__ */ __name(function isActive(element, className, defaultActivation) {
          var no2 = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no2)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }, "isActive")
      },
      languages: {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        extend: /* @__PURE__ */ __name(function extend2(id, redef) {
          var lang3 = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang3[key] = redef[key];
          }
          return lang3;
        }, "extend"),
        insertBefore: /* @__PURE__ */ __name(function insertBefore(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        }, "insertBefore"),
        DFS: /* @__PURE__ */ __name(function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }, "DFS")
      },
      plugins: {},
      highlightAll: /* @__PURE__ */ __name(function highlightAll(async, callback) {
        _.highlightAllUnder(document, async, callback);
      }, "highlightAll"),
      highlightAllUnder: /* @__PURE__ */ __name(function highlightAllUnder(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element; element = env.elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      }, "highlightAllUnder"),
      highlightElement: /* @__PURE__ */ __name(function highlightElement(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        _.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        __name(insertHighlightedCode, "insertHighlightedCode");
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      }, "highlightElement"),
      highlight: /* @__PURE__ */ __name(function highlight2(text, grammar, language) {
        var env = {
          code: text,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      }, "highlight"),
      tokenize: /* @__PURE__ */ __name(function tokenize(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      }, "tokenize"),
      hooks: {
        all: {},
        add: /* @__PURE__ */ __name(function add(name2, callback) {
          var hooks = _.hooks.all;
          hooks[name2] = hooks[name2] || [];
          hooks[name2].push(callback);
        }, "add"),
        run: /* @__PURE__ */ __name(function run(name2, env) {
          var callbacks = _.hooks.all[name2];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }, "run")
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias2, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias2;
      this.length = (matchedStr || "").length | 0;
    }
    __name(Token, "Token");
    Token.stringify = /* @__PURE__ */ __name(function stringify2(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e) {
          s += stringify2(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify2(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes2 = "";
      for (var name2 in env.attributes) {
        attributes2 += " " + name2 + '="' + (env.attributes[name2] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes2 + ">" + env.content + "</" + env.tag + ">";
    }, "stringify");
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    __name(matchPattern, "matchPattern");
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias2 = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);
              if (!match || match.index >= text.length) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos;
              p += currentNode.value.length;
              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              p -= currentNode.value.length;
              pos = p;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias2, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    __name(matchGrammar, "matchGrammar");
    function LinkedList() {
      var head = {
        value: null,
        prev: null,
        next: null
      };
      var tail = {
        value: null,
        prev: head,
        next: null
      };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    __name(LinkedList, "LinkedList");
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = {
        value,
        prev: node,
        next
      };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    __name(addAfter, "addAfter");
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    __name(removeRange, "removeRange");
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    __name(toArray, "toArray");
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang3 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang3], lang3));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    __name(highlightAutomaticallyCallback, "highlightAutomaticallyCallback");
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal !== "undefined") {
    commonjsGlobal.Prism = Prism2;
  }
})(prismCore);
var clike_1 = clike$1;
clike$1.displayName = "clike";
clike$1.aliases = [];
function clike$1(Prism2) {
  Prism2.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
__name(clike$1, "clike$1");
var javascript_1 = javascript;
javascript.displayName = "javascript";
javascript.aliases = ["js"];
function javascript(Prism2) {
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [Prism2.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: true
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: true
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: true
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: true,
      inside: Prism2.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: true,
      inside: Prism2.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism2.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism2.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
    Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
  }
  Prism2.languages.js = Prism2.languages.javascript;
}
__name(javascript, "javascript");
var ctx = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : _typeof(commonjsGlobal) === "object" ? commonjsGlobal : {};
var restore = capture();
ctx.Prism = {
  manual: true,
  disableWorkerMessageHandler: true
};
var h = hastscript;
var decode = parseEntities_1;
var Prism = prismCore.exports;
var markup = markup_1;
var css = css_1;
var clike = clike_1;
var js = javascript_1;
restore();
var own = {}.hasOwnProperty;
function Refractor() {
}
__name(Refractor, "Refractor");
Refractor.prototype = Prism;
var refract = new Refractor();
var core = refract;
refract.highlight = highlight;
refract.register = register;
refract.alias = alias;
refract.registered = registered;
refract.listLanguages = listLanguages;
register(markup);
register(css);
register(clike);
register(js);
refract.util.encode = encode;
refract.Token.stringify = stringify;
function register(grammar) {
  if (typeof grammar !== "function" || !grammar.displayName) {
    throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
  }
  if (refract.languages[grammar.displayName] === void 0) {
    grammar(refract);
  }
}
__name(register, "register");
function alias(name2, alias2) {
  var languages = refract.languages;
  var map2 = name2;
  var key;
  var list;
  var length;
  var index;
  if (alias2) {
    map2 = {};
    map2[name2] = alias2;
  }
  for (key in map2) {
    list = map2[key];
    list = typeof list === "string" ? [list] : list;
    length = list.length;
    index = -1;
    while (++index < length) {
      languages[list[index]] = languages[key];
    }
  }
}
__name(alias, "alias");
function highlight(value, name2) {
  var sup4 = Prism.highlight;
  var grammar;
  if (typeof value !== "string") {
    throw new Error("Expected `string` for `value`, got `" + value + "`");
  }
  if (refract.util.type(name2) === "Object") {
    grammar = name2;
    name2 = null;
  } else {
    if (typeof name2 !== "string") {
      throw new Error("Expected `string` for `name`, got `" + name2 + "`");
    }
    if (own.call(refract.languages, name2)) {
      grammar = refract.languages[name2];
    } else {
      throw new Error("Unknown language: `" + name2 + "` is not registered");
    }
  }
  return sup4.call(this, value, grammar, name2);
}
__name(highlight, "highlight");
function registered(language) {
  if (typeof language !== "string") {
    throw new Error("Expected `string` for `language`, got `" + language + "`");
  }
  return own.call(refract.languages, language);
}
__name(registered, "registered");
function listLanguages() {
  var languages = refract.languages;
  var list = [];
  var language;
  for (language in languages) {
    if (own.call(languages, language) && _typeof(languages[language]) === "object") {
      list.push(language);
    }
  }
  return list;
}
__name(listLanguages, "listLanguages");
function stringify(value, language, parent) {
  var env;
  if (typeof value === "string") {
    return {
      type: "text",
      value
    };
  }
  if (refract.util.type(value) === "Array") {
    return stringifyAll(value, language);
  }
  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: "span",
    classes: ["token", value.type],
    attributes: {},
    language,
    parent
  };
  if (value.alias) {
    env.classes = env.classes.concat(value.alias);
  }
  refract.hooks.run("wrap", env);
  return h(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content);
}
__name(stringify, "stringify");
function stringifyAll(values, language) {
  var result = [];
  var length = values.length;
  var index = -1;
  var value;
  while (++index < length) {
    value = values[index];
    if (value !== "" && value !== null && value !== void 0) {
      result.push(value);
    }
  }
  index = -1;
  length = result.length;
  while (++index < length) {
    value = result[index];
    result[index] = refract.Token.stringify(value, language, result);
  }
  return result;
}
__name(stringifyAll, "stringifyAll");
function encode(tokens) {
  return tokens;
}
__name(encode, "encode");
function attributes(attrs) {
  var key;
  for (key in attrs) {
    attrs[key] = decode(attrs[key]);
  }
  return attrs;
}
__name(attributes, "attributes");
function capture() {
  var defined = "Prism" in ctx;
  var current = defined ? ctx.Prism : void 0;
  return restore2;
  function restore2() {
    if (defined) {
      ctx.Prism = current;
    } else {
      delete ctx.Prism;
    }
    defined = void 0;
    current = void 0;
  }
  __name(restore2, "restore");
}
__name(capture, "capture");
var SyntaxHighlighter$1 = highlight$1(core, {});
SyntaxHighlighter$1.registerLanguage = function(_, language) {
  return core.register(language);
};
var ReactSyntaxHighlighter = SyntaxHighlighter$1;
var navigator = window_1.navigator, document$1 = window_1.document, globalWindow = window_1.window;
ReactSyntaxHighlighter.registerLanguage("jsextra", jsExtras$1);
ReactSyntaxHighlighter.registerLanguage("jsx", jsx$1);
ReactSyntaxHighlighter.registerLanguage("json", json$1);
ReactSyntaxHighlighter.registerLanguage("yml", yaml$1);
ReactSyntaxHighlighter.registerLanguage("md", markdown$1);
ReactSyntaxHighlighter.registerLanguage("bash", bash$1);
ReactSyntaxHighlighter.registerLanguage("css", css$2);
ReactSyntaxHighlighter.registerLanguage("html", markup$2);
ReactSyntaxHighlighter.registerLanguage("tsx", tsx$1);
ReactSyntaxHighlighter.registerLanguage("typescript", typescript$1);
ReactSyntaxHighlighter.registerLanguage("graphql", graphql$1);
var themedSyntax = memoize(2)(function(theme) {
  return Object.entries(theme.code || {}).reduce(function(acc, _ref8) {
    var _ref9 = _slicedToArray(_ref8, 2), key = _ref9[0], val = _ref9[1];
    return Object.assign(Object.assign({}, acc), _defineProperty2({}, "* .".concat(key), val));
  }, {});
});
var copyToClipboard = createCopyToClipboardFunction();
function createCopyToClipboardFunction() {
  var _this = this;
  if (navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) {
    return function(text) {
      return navigator.clipboard.writeText(text);
    };
  }
  return function(text) {
    return __awaiter(_this, void 0, void 0, /* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee() {
      var tmp, focus;
      return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tmp = document$1.createElement("TEXTAREA");
              focus = document$1.activeElement;
              tmp.value = text;
              document$1.body.appendChild(tmp);
              tmp.select();
              document$1.execCommand("copy");
              document$1.body.removeChild(tmp);
              focus.focus();
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, "_callee$"), _callee);
    }, "_callee")));
  };
}
__name(createCopyToClipboardFunction, "createCopyToClipboardFunction");
var Wrapper = styled.div(function(_ref10) {
  var theme = _ref10.theme;
  return {
    position: "relative",
    overflow: "hidden",
    color: theme.color.defaultText
  };
}, function(_ref11) {
  var theme = _ref11.theme, bordered = _ref11.bordered;
  return bordered ? {
    border: "1px solid ".concat(theme.appBorderColor),
    borderRadius: theme.borderRadius,
    background: theme.background.content
  } : {};
});
var Scroller = styled(function(_ref12) {
  var children = _ref12.children, className = _ref12.className;
  return /* @__PURE__ */ jsx$2(ScrollArea, {
    horizontal: true,
    vertical: true,
    className,
    children
  });
})({
  position: "relative"
}, function(_ref13) {
  var theme = _ref13.theme;
  return themedSyntax(theme);
});
var Pre = styled.pre(function(_ref14) {
  var theme = _ref14.theme, padded = _ref14.padded;
  return {
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: padded ? theme.layoutMargin : 0
  };
});
var Code = styled.div(function(_ref15) {
  var theme = _ref15.theme;
  return {
    flex: 1,
    paddingLeft: 2,
    paddingRight: theme.layoutMargin,
    opacity: 1
  };
});
var SyntaxHighlighter = /* @__PURE__ */ __name(function SyntaxHighlighter2(_a) {
  var children = _a.children, _a$language = _a.language, language = _a$language === void 0 ? "jsx" : _a$language, _a$copyable = _a.copyable, copyable = _a$copyable === void 0 ? false : _a$copyable, _a$bordered = _a.bordered, bordered = _a$bordered === void 0 ? false : _a$bordered, _a$padded = _a.padded, padded = _a$padded === void 0 ? false : _a$padded, _a$format = _a.format, format = _a$format === void 0 ? true : _a$format, _a$formatter = _a.formatter, formatter = _a$formatter === void 0 ? null : _a$formatter, _a$className = _a.className, className = _a$className === void 0 ? null : _a$className, _a$showLineNumbers = _a.showLineNumbers, showLineNumbers = _a$showLineNumbers === void 0 ? false : _a$showLineNumbers, rest = __rest(_a, ["children", "language", "copyable", "bordered", "padded", "format", "formatter", "className", "showLineNumbers"]);
  if (typeof children !== "string" || !children.trim()) {
    return null;
  }
  var highlightableCode = formatter ? formatter(format, children) : children.trim();
  var _useState = react.exports.useState(false), _useState2 = _slicedToArray(_useState, 2), copied = _useState2[0], setCopied = _useState2[1];
  var onClick = react.exports.useCallback(function(e) {
    e.preventDefault();
    var selectedText = globalWindow.getSelection().toString();
    var textToCopy = e.type !== "click" && selectedText ? selectedText : highlightableCode;
    copyToClipboard(textToCopy).then(function() {
      setCopied(true);
      globalWindow.setTimeout(function() {
        return setCopied(false);
      }, 1500);
    }).catch(logger.error);
  }, []);
  return /* @__PURE__ */ jsxs(Wrapper, {
    bordered,
    padded,
    className,
    onCopyCapture: onClick,
    children: [/* @__PURE__ */ jsx$2(Scroller, {
      children: /* @__PURE__ */ jsx$2(ReactSyntaxHighlighter, {
        ...Object.assign({
          padded: padded || bordered,
          language,
          showLineNumbers,
          showInlineLineNumbers: showLineNumbers,
          useInlineStyles: false,
          PreTag: Pre,
          CodeTag: Code,
          lineNumberContainerStyle: {}
        }, rest),
        children: highlightableCode
      })
    }), copyable ? /* @__PURE__ */ jsx$2(ActionBar, {
      actionItems: [{
        title: copied ? "Copied" : "Copy",
        onClick
      }]
    }) : null]
  });
}, "SyntaxHighlighter");
export {
  SyntaxHighlighter,
  createCopyToClipboardFunction,
  SyntaxHighlighter as default
};
