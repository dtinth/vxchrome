/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var AudioConfig_1 = __webpack_require__(36);
exports.AudioConfig = AudioConfig_1.AudioConfig;
var AudioStreamFormat_1 = __webpack_require__(7);
exports.AudioStreamFormat = AudioStreamFormat_1.AudioStreamFormat;
var AudioInputStream_1 = __webpack_require__(17);
exports.AudioInputStream = AudioInputStream_1.AudioInputStream;
exports.PullAudioInputStream = AudioInputStream_1.PullAudioInputStream;
exports.PushAudioInputStream = AudioInputStream_1.PushAudioInputStream;
var CancellationReason_1 = __webpack_require__(37);
exports.CancellationReason = CancellationReason_1.CancellationReason;
var PullAudioInputStreamCallback_1 = __webpack_require__(38);
exports.PullAudioInputStreamCallback = PullAudioInputStreamCallback_1.PullAudioInputStreamCallback;
var KeywordRecognitionModel_1 = __webpack_require__(39);
exports.KeywordRecognitionModel = KeywordRecognitionModel_1.KeywordRecognitionModel;
var SessionEventArgs_1 = __webpack_require__(40);
exports.SessionEventArgs = SessionEventArgs_1.SessionEventArgs;
var RecognitionEventArgs_1 = __webpack_require__(41);
exports.RecognitionEventArgs = RecognitionEventArgs_1.RecognitionEventArgs;
var OutputFormat_1 = __webpack_require__(42);
exports.OutputFormat = OutputFormat_1.OutputFormat;
var IntentRecognitionEventArgs_1 = __webpack_require__(43);
exports.IntentRecognitionEventArgs = IntentRecognitionEventArgs_1.IntentRecognitionEventArgs;
var RecognitionResult_1 = __webpack_require__(44);
exports.RecognitionResult = RecognitionResult_1.RecognitionResult;
var SpeechRecognitionResult_1 = __webpack_require__(45);
exports.SpeechRecognitionResult = SpeechRecognitionResult_1.SpeechRecognitionResult;
var IntentRecognitionResult_1 = __webpack_require__(46);
exports.IntentRecognitionResult = IntentRecognitionResult_1.IntentRecognitionResult;
var LanguageUnderstandingModel_1 = __webpack_require__(47);
exports.LanguageUnderstandingModel = LanguageUnderstandingModel_1.LanguageUnderstandingModel;
var SpeechRecognitionEventArgs_1 = __webpack_require__(48);
exports.SpeechRecognitionEventArgs = SpeechRecognitionEventArgs_1.SpeechRecognitionEventArgs;
var SpeechRecognitionCanceledEventArgs_1 = __webpack_require__(49);
exports.SpeechRecognitionCanceledEventArgs = SpeechRecognitionCanceledEventArgs_1.SpeechRecognitionCanceledEventArgs;
var TranslationRecognitionEventArgs_1 = __webpack_require__(50);
exports.TranslationRecognitionEventArgs = TranslationRecognitionEventArgs_1.TranslationRecognitionEventArgs;
var TranslationSynthesisEventArgs_1 = __webpack_require__(51);
exports.TranslationSynthesisEventArgs = TranslationSynthesisEventArgs_1.TranslationSynthesisEventArgs;
var TranslationRecognitionResult_1 = __webpack_require__(52);
exports.TranslationRecognitionResult = TranslationRecognitionResult_1.TranslationRecognitionResult;
var TranslationSynthesisResult_1 = __webpack_require__(53);
exports.TranslationSynthesisResult = TranslationSynthesisResult_1.TranslationSynthesisResult;
var ResultReason_1 = __webpack_require__(54);
exports.ResultReason = ResultReason_1.ResultReason;
var SpeechConfig_1 = __webpack_require__(55);
exports.SpeechConfig = SpeechConfig_1.SpeechConfig;
var SpeechTranslationConfig_1 = __webpack_require__(56);
exports.SpeechTranslationConfig = SpeechTranslationConfig_1.SpeechTranslationConfig;
var PropertyCollection_1 = __webpack_require__(57);
exports.PropertyCollection = PropertyCollection_1.PropertyCollection;
var PropertyId_1 = __webpack_require__(58);
exports.PropertyId = PropertyId_1.PropertyId;
var Recognizer_1 = __webpack_require__(59);
exports.Recognizer = Recognizer_1.Recognizer;
var SpeechRecognizer_1 = __webpack_require__(60);
exports.SpeechRecognizer = SpeechRecognizer_1.SpeechRecognizer;
var IntentRecognizer_1 = __webpack_require__(62);
exports.IntentRecognizer = IntentRecognizer_1.IntentRecognizer;
var TranslationRecognizer_1 = __webpack_require__(63);
exports.TranslationRecognizer = TranslationRecognizer_1.TranslationRecognizer;
var Translations_1 = __webpack_require__(64);
exports.Translations = Translations_1.Translations;
var NoMatchReason_1 = __webpack_require__(65);
exports.NoMatchReason = NoMatchReason_1.NoMatchReason;
var NoMatchDetails_1 = __webpack_require__(66);
exports.NoMatchDetails = NoMatchDetails_1.NoMatchDetails;
var TranslationRecognitionCanceledEventArgs_1 = __webpack_require__(67);
exports.TranslationRecognitionCanceledEventArgs = TranslationRecognitionCanceledEventArgs_1.TranslationRecognitionCanceledEventArgs;
var IntentRecognitionCanceledEventArgs_1 = __webpack_require__(68);
exports.IntentRecognitionCanceledEventArgs = IntentRecognitionCanceledEventArgs_1.IntentRecognitionCanceledEventArgs;
var CancellationDetails_1 = __webpack_require__(69);
exports.CancellationDetails = CancellationDetails_1.CancellationDetails;
var CancellationErrorCodes_1 = __webpack_require__(70);
exports.CancellationErrorCode = CancellationErrorCodes_1.CancellationErrorCode;
var ConnectionEventArgs_1 = __webpack_require__(71);
exports.ConnectionEventArgs = ConnectionEventArgs_1.ConnectionEventArgs;
var Connection_1 = __webpack_require__(72);
exports.Connection = Connection_1.Connection;
var PhraseListGrammar_1 = __webpack_require__(73);
exports.PhraseListGrammar = PhraseListGrammar_1.PhraseListGrammar;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Make sure not to export internal modules.
//
__export(__webpack_require__(33));
__export(__webpack_require__(34));
__export(__webpack_require__(10));
__export(__webpack_require__(35));
__export(__webpack_require__(11));
__export(__webpack_require__(74));
__export(__webpack_require__(76));
__export(__webpack_require__(77));
__export(__webpack_require__(18));
__export(__webpack_require__(78));
__export(__webpack_require__(79));
__export(__webpack_require__(80));
__export(__webpack_require__(81));
__export(__webpack_require__(82));
__export(__webpack_require__(83));
__export(__webpack_require__(84));
__export(__webpack_require__(85));
__export(__webpack_require__(86));
__export(__webpack_require__(87));
__export(__webpack_require__(88));
__export(__webpack_require__(89));
__export(__webpack_require__(90));
__export(__webpack_require__(91));
__export(__webpack_require__(92));
__export(__webpack_require__(93));
__export(__webpack_require__(95));
__export(__webpack_require__(96));
exports.OutputFormatPropertyName = "OutputFormat";
exports.CancellationErrorCodePropertyName = "CancellationErrorCode";



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(23));
__export(__webpack_require__(24));
__export(__webpack_require__(12));
__export(__webpack_require__(25));
__export(__webpack_require__(3));
__export(__webpack_require__(26));
__export(__webpack_require__(13));
__export(__webpack_require__(5));
__export(__webpack_require__(27));
__export(__webpack_require__(14));
__export(__webpack_require__(8));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
var TranslationStatus_1 = __webpack_require__(9);
exports.TranslationStatus = TranslationStatus_1.TranslationStatus;
__export(__webpack_require__(31));



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The error that is thrown when an argument passed in is null.
 *
 * @export
 * @class ArgumentNullError
 * @extends {Error}
 */
var ArgumentNullError = /** @class */ (function (_super) {
    __extends(ArgumentNullError, _super);
    /**
     * Creates an instance of ArgumentNullError.
     *
     * @param {string} argumentName - Name of the argument that is null
     *
     * @memberOf ArgumentNullError
     */
    function ArgumentNullError(argumentName) {
        var _this = _super.call(this, argumentName) || this;
        _this.name = "ArgumentNull";
        _this.message = argumentName;
        return _this;
    }
    return ArgumentNullError;
}(Error));
exports.ArgumentNullError = ArgumentNullError;
/**
 * The error that is thrown when an invalid operation is performed in the code.
 *
 * @export
 * @class InvalidOperationError
 * @extends {Error}
 */
// tslint:disable-next-line:max-classes-per-file
var InvalidOperationError = /** @class */ (function (_super) {
    __extends(InvalidOperationError, _super);
    /**
     * Creates an instance of InvalidOperationError.
     *
     * @param {string} error - The error
     *
     * @memberOf InvalidOperationError
     */
    function InvalidOperationError(error) {
        var _this = _super.call(this, error) || this;
        _this.name = "InvalidOperation";
        _this.message = error;
        return _this;
    }
    return InvalidOperationError;
}(Error));
exports.InvalidOperationError = InvalidOperationError;
/**
 * The error that is thrown when an object is disposed.
 *
 * @export
 * @class ObjectDisposedError
 * @extends {Error}
 */
// tslint:disable-next-line:max-classes-per-file
var ObjectDisposedError = /** @class */ (function (_super) {
    __extends(ObjectDisposedError, _super);
    /**
     * Creates an instance of ObjectDisposedError.
     *
     * @param {string} objectName - The object that is disposed
     * @param {string} error - The error
     *
     * @memberOf ObjectDisposedError
     */
    function ObjectDisposedError(objectName, error) {
        var _this = _super.call(this, error) || this;
        _this.name = objectName + "ObjectDisposed";
        _this.message = error;
        return _this;
    }
    return ObjectDisposedError;
}(Error));
exports.ObjectDisposedError = ObjectDisposedError;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Contracts
 * @private
 */
var Contracts = /** @class */ (function () {
    function Contracts() {
    }
    Contracts.throwIfNullOrUndefined = function (param, name) {
        if (param === undefined || param === null) {
            throw new Error("throwIfNullOrUndefined:" + name);
        }
    };
    Contracts.throwIfNull = function (param, name) {
        if (param === null) {
            throw new Error("throwIfNull:" + name);
        }
    };
    Contracts.throwIfNullOrWhitespace = function (param, name) {
        Contracts.throwIfNullOrUndefined(param, name);
        if (("" + param).trim().length < 1) {
            throw new Error("throwIfNullOrWhitespace:" + name);
        }
    };
    Contracts.throwIfDisposed = function (isDisposed) {
        if (isDisposed) {
            throw new Error("the object is already disposed");
        }
    };
    Contracts.throwIfArrayEmptyOrWhitespace = function (array, name) {
        Contracts.throwIfNullOrUndefined(array, name);
        if (array.length === 0) {
            throw new Error("throwIfArrayEmptyOrWhitespace:" + name);
        }
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            Contracts.throwIfNullOrWhitespace(item, name);
        }
    };
    Contracts.throwIfFileDoesNotExist = function (param, name) {
        Contracts.throwIfNullOrWhitespace(param, name);
        // TODO check for file existence.
    };
    return Contracts;
}());
exports.Contracts = Contracts;



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var createGuid = function () {
    var d = new Date().getTime();
    var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
};
exports.createGuid = createGuid;
var createNoDashGuid = function () {
    return createGuid().replace(new RegExp("-", "g"), "").toUpperCase();
};
exports.createNoDashGuid = createNoDashGuid;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));
__export(__webpack_require__(32));
__export(__webpack_require__(97));
__export(__webpack_require__(98));
__export(__webpack_require__(99));
__export(__webpack_require__(19));
__export(__webpack_require__(108));
__export(__webpack_require__(109));



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents audio stream format used for custom audio input configurations.
 * @class AudioStreamFormat
 */
var AudioStreamFormat = /** @class */ (function () {
    function AudioStreamFormat() {
    }
    /**
     * Creates an audio stream format object representing the default audio stream
     * format (16KHz 16bit mono PCM).
     * @member AudioStreamFormat.getDefaultInputFormat
     * @function
     * @public
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    AudioStreamFormat.getDefaultInputFormat = function () {
        return AudioStreamFormatImpl.getDefaultInputFormat();
    };
    /**
     * Creates an audio stream format object with the specified pcm waveformat characteristics.
     * @member AudioStreamFormat.getWaveFormatPCM
     * @function
     * @public
     * @param {number} samplesPerSecond - Sample rate, in samples per second (Hertz).
     * @param {number} bitsPerSample - Bits per sample, typically 16.
     * @param {number} channels - Number of channels in the waveform-audio data. Monaural data
     *        uses one channel and stereo data uses two channels.
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    AudioStreamFormat.getWaveFormatPCM = function (samplesPerSecond, bitsPerSample, channels) {
        return new AudioStreamFormatImpl(samplesPerSecond, bitsPerSample, channels);
    };
    return AudioStreamFormat;
}());
exports.AudioStreamFormat = AudioStreamFormat;
/**
 * @private
 * @class AudioStreamFormatImpl
 */
// tslint:disable-next-line:max-classes-per-file
var AudioStreamFormatImpl = /** @class */ (function (_super) {
    __extends(AudioStreamFormatImpl, _super);
    /**
     * Creates an instance with the given values.
     * @constructor
     * @param {number} samplesPerSec - Samples per second.
     * @param {number} bitsPerSample - Bits per sample.
     * @param {number} channels - Number of channels.
     */
    function AudioStreamFormatImpl(samplesPerSec, bitsPerSample, channels) {
        if (samplesPerSec === void 0) { samplesPerSec = 16000; }
        if (bitsPerSample === void 0) { bitsPerSample = 16; }
        if (channels === void 0) { channels = 1; }
        var _this = _super.call(this) || this;
        _this.formatTag = 1;
        _this.bitsPerSample = bitsPerSample;
        _this.samplesPerSec = samplesPerSec;
        _this.channels = channels;
        _this.avgBytesPerSec = _this.samplesPerSec * _this.channels * (_this.bitsPerSample / 8);
        _this.blockAlign = _this.channels * Math.max(_this.bitsPerSample, 8);
        return _this;
    }
    /**
     * Retrieves the default input format.
     * @member AudioStreamFormatImpl.getDefaultInputFormat
     * @function
     * @public
     * @returns {AudioStreamFormatImpl} The default input format.
     */
    AudioStreamFormatImpl.getDefaultInputFormat = function () {
        return new AudioStreamFormatImpl();
    };
    /**
     * Closes the configuration object.
     * @member AudioStreamFormatImpl.prototype.close
     * @function
     * @public
     */
    AudioStreamFormatImpl.prototype.close = function () { return; };
    return AudioStreamFormatImpl;
}(AudioStreamFormat));
exports.AudioStreamFormatImpl = AudioStreamFormatImpl;



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Guid_1 = __webpack_require__(5);
var EventType;
(function (EventType) {
    EventType[EventType["Debug"] = 0] = "Debug";
    EventType[EventType["Info"] = 1] = "Info";
    EventType[EventType["Warning"] = 2] = "Warning";
    EventType[EventType["Error"] = 3] = "Error";
})(EventType = exports.EventType || (exports.EventType = {}));
var PlatformEvent = /** @class */ (function () {
    function PlatformEvent(eventName, eventType) {
        this.privName = eventName;
        this.privEventId = Guid_1.createNoDashGuid();
        this.privEventTime = new Date().toISOString();
        this.privEventType = eventType;
        this.privMetadata = {};
    }
    Object.defineProperty(PlatformEvent.prototype, "name", {
        get: function () {
            return this.privName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "eventId", {
        get: function () {
            return this.privEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "eventTime", {
        get: function () {
            return this.privEventTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "eventType", {
        get: function () {
            return this.privEventType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "metadata", {
        get: function () {
            return this.privMetadata;
        },
        enumerable: true,
        configurable: true
    });
    return PlatformEvent;
}());
exports.PlatformEvent = PlatformEvent;



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines translation status.
 * @class TranslationStatus
 */
var TranslationStatus;
(function (TranslationStatus) {
    /**
     * @member TranslationStatus.Success
     */
    TranslationStatus[TranslationStatus["Success"] = 0] = "Success";
    /**
     * @member TranslationStatus.Error
     */
    TranslationStatus[TranslationStatus["Error"] = 1] = "Error";
})(TranslationStatus = exports.TranslationStatus || (exports.TranslationStatus = {}));



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var AuthInfo = /** @class */ (function () {
    function AuthInfo(headerName, token) {
        this.privHeaderName = headerName;
        this.privToken = token;
    }
    Object.defineProperty(AuthInfo.prototype, "headerName", {
        get: function () {
            return this.privHeaderName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthInfo.prototype, "token", {
        get: function () {
            return this.privToken;
        },
        enumerable: true,
        configurable: true
    });
    return AuthInfo;
}());
exports.AuthInfo = AuthInfo;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var SpeechRecognitionEvent = /** @class */ (function (_super) {
    __extends(SpeechRecognitionEvent, _super);
    function SpeechRecognitionEvent(eventName, requestId, sessionId, eventType) {
        if (eventType === void 0) { eventType = Exports_1.EventType.Info; }
        var _this = _super.call(this, eventName, eventType) || this;
        _this.privRequestId = requestId;
        _this.privSessionId = sessionId;
        return _this;
    }
    Object.defineProperty(SpeechRecognitionEvent.prototype, "requestId", {
        get: function () {
            return this.privRequestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognitionEvent.prototype, "sessionId", {
        get: function () {
            return this.privSessionId;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechRecognitionEvent;
}(Exports_1.PlatformEvent));
exports.SpeechRecognitionEvent = SpeechRecognitionEvent;
// tslint:disable-next-line:max-classes-per-file
var RecognitionTriggeredEvent = /** @class */ (function (_super) {
    __extends(RecognitionTriggeredEvent, _super);
    function RecognitionTriggeredEvent(requestId, sessionId, audioSourceId, audioNodeId) {
        var _this = _super.call(this, "RecognitionTriggeredEvent", requestId, sessionId) || this;
        _this.privAudioSourceId = audioSourceId;
        _this.privAudioNodeId = audioNodeId;
        return _this;
    }
    Object.defineProperty(RecognitionTriggeredEvent.prototype, "audioSourceId", {
        get: function () {
            return this.privAudioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionTriggeredEvent.prototype, "audioNodeId", {
        get: function () {
            return this.privAudioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionTriggeredEvent;
}(SpeechRecognitionEvent));
exports.RecognitionTriggeredEvent = RecognitionTriggeredEvent;
// tslint:disable-next-line:max-classes-per-file
var ListeningStartedEvent = /** @class */ (function (_super) {
    __extends(ListeningStartedEvent, _super);
    function ListeningStartedEvent(requestId, sessionId, audioSourceId, audioNodeId) {
        var _this = _super.call(this, "ListeningStartedEvent", requestId, sessionId) || this;
        _this.privAudioSourceId = audioSourceId;
        _this.privAudioNodeId = audioNodeId;
        return _this;
    }
    Object.defineProperty(ListeningStartedEvent.prototype, "audioSourceId", {
        get: function () {
            return this.privAudioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListeningStartedEvent.prototype, "audioNodeId", {
        get: function () {
            return this.privAudioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    return ListeningStartedEvent;
}(SpeechRecognitionEvent));
exports.ListeningStartedEvent = ListeningStartedEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectingToServiceEvent = /** @class */ (function (_super) {
    __extends(ConnectingToServiceEvent, _super);
    function ConnectingToServiceEvent(requestId, authFetchEventid, sessionId) {
        var _this = _super.call(this, "ConnectingToServiceEvent", requestId, sessionId) || this;
        _this.privAuthFetchEventid = authFetchEventid;
        return _this;
    }
    Object.defineProperty(ConnectingToServiceEvent.prototype, "authFetchEventid", {
        get: function () {
            return this.privAuthFetchEventid;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectingToServiceEvent;
}(SpeechRecognitionEvent));
exports.ConnectingToServiceEvent = ConnectingToServiceEvent;
// tslint:disable-next-line:max-classes-per-file
var RecognitionStartedEvent = /** @class */ (function (_super) {
    __extends(RecognitionStartedEvent, _super);
    function RecognitionStartedEvent(requestId, audioSourceId, audioNodeId, authFetchEventId, sessionId) {
        var _this = _super.call(this, "RecognitionStartedEvent", requestId, sessionId) || this;
        _this.privAudioSourceId = audioSourceId;
        _this.privAudioNodeId = audioNodeId;
        _this.privAuthFetchEventId = authFetchEventId;
        return _this;
    }
    Object.defineProperty(RecognitionStartedEvent.prototype, "audioSourceId", {
        get: function () {
            return this.privAudioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionStartedEvent.prototype, "audioNodeId", {
        get: function () {
            return this.privAudioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionStartedEvent.prototype, "authFetchEventId", {
        get: function () {
            return this.privAuthFetchEventId;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionStartedEvent;
}(SpeechRecognitionEvent));
exports.RecognitionStartedEvent = RecognitionStartedEvent;
var RecognitionCompletionStatus;
(function (RecognitionCompletionStatus) {
    RecognitionCompletionStatus[RecognitionCompletionStatus["Success"] = 0] = "Success";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AudioSourceError"] = 1] = "AudioSourceError";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AudioSourceTimeout"] = 2] = "AudioSourceTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AuthTokenFetchError"] = 3] = "AuthTokenFetchError";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AuthTokenFetchTimeout"] = 4] = "AuthTokenFetchTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["UnAuthorized"] = 5] = "UnAuthorized";
    RecognitionCompletionStatus[RecognitionCompletionStatus["ConnectTimeout"] = 6] = "ConnectTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["ConnectError"] = 7] = "ConnectError";
    RecognitionCompletionStatus[RecognitionCompletionStatus["ClientRecognitionActivityTimeout"] = 8] = "ClientRecognitionActivityTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["UnknownError"] = 9] = "UnknownError";
})(RecognitionCompletionStatus = exports.RecognitionCompletionStatus || (exports.RecognitionCompletionStatus = {}));
// tslint:disable-next-line:max-classes-per-file
var RecognitionEndedEvent = /** @class */ (function (_super) {
    __extends(RecognitionEndedEvent, _super);
    function RecognitionEndedEvent(requestId, audioSourceId, audioNodeId, authFetchEventId, sessionId, serviceTag, status, error) {
        var _this = _super.call(this, "RecognitionEndedEvent", requestId, sessionId, status === RecognitionCompletionStatus.Success ? Exports_1.EventType.Info : Exports_1.EventType.Error) || this;
        _this.privAudioSourceId = audioSourceId;
        _this.privAudioNodeId = audioNodeId;
        _this.privAuthFetchEventId = authFetchEventId;
        _this.privStatus = status;
        _this.privError = error;
        _this.privServiceTag = serviceTag;
        return _this;
    }
    Object.defineProperty(RecognitionEndedEvent.prototype, "audioSourceId", {
        get: function () {
            return this.privAudioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "audioNodeId", {
        get: function () {
            return this.privAudioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "authFetchEventId", {
        get: function () {
            return this.privAuthFetchEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "serviceTag", {
        get: function () {
            return this.privServiceTag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "status", {
        get: function () {
            return this.privStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "error", {
        get: function () {
            return this.privError;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionEndedEvent;
}(SpeechRecognitionEvent));
exports.RecognitionEndedEvent = RecognitionEndedEvent;



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var Guid_1 = __webpack_require__(5);
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Text"] = 0] = "Text";
    MessageType[MessageType["Binary"] = 1] = "Binary";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ConnectionMessage = /** @class */ (function () {
    function ConnectionMessage(messageType, body, headers, id) {
        this.privBody = null;
        if (messageType === MessageType.Text && body && !(typeof (body) === "string")) {
            throw new Error_1.InvalidOperationError("Payload must be a string");
        }
        if (messageType === MessageType.Binary && body && !(body instanceof ArrayBuffer)) {
            throw new Error_1.InvalidOperationError("Payload must be ArrayBuffer");
        }
        this.privMessageType = messageType;
        this.privBody = body;
        this.privHeaders = headers ? headers : {};
        this.privId = id ? id : Guid_1.createNoDashGuid();
    }
    Object.defineProperty(ConnectionMessage.prototype, "messageType", {
        get: function () {
            return this.privMessageType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "headers", {
        get: function () {
            return this.privHeaders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "body", {
        get: function () {
            return this.privBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "textBody", {
        get: function () {
            if (this.privMessageType === MessageType.Binary) {
                throw new Error_1.InvalidOperationError("Not supported for binary message");
            }
            return this.privBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "binaryBody", {
        get: function () {
            if (this.privMessageType === MessageType.Text) {
                throw new Error_1.InvalidOperationError("Not supported for text message");
            }
            return this.privBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "id", {
        get: function () {
            return this.privId;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionMessage;
}());
exports.ConnectionMessage = ConnectionMessage;



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var Guid_1 = __webpack_require__(5);
var EventSource = /** @class */ (function () {
    function EventSource(metadata) {
        var _this = this;
        this.privEventListeners = {};
        this.privIsDisposed = false;
        this.onEvent = function (event) {
            if (_this.isDisposed()) {
                throw (new Error_1.ObjectDisposedError("EventSource"));
            }
            if (_this.metadata) {
                for (var paramName in _this.metadata) {
                    if (paramName) {
                        if (event.metadata) {
                            if (!event.metadata[paramName]) {
                                event.metadata[paramName] = _this.metadata[paramName];
                            }
                        }
                    }
                }
            }
            for (var eventId in _this.privEventListeners) {
                if (eventId && _this.privEventListeners[eventId]) {
                    _this.privEventListeners[eventId](event);
                }
            }
        };
        this.attach = function (onEventCallback) {
            var id = Guid_1.createNoDashGuid();
            _this.privEventListeners[id] = onEventCallback;
            return {
                detach: function () {
                    delete _this.privEventListeners[id];
                },
            };
        };
        this.attachListener = function (listener) {
            return _this.attach(listener.onEvent);
        };
        this.isDisposed = function () {
            return _this.privIsDisposed;
        };
        this.dispose = function () {
            _this.privEventListeners = null;
            _this.privIsDisposed = true;
        };
        this.privMetadata = metadata;
    }
    Object.defineProperty(EventSource.prototype, "metadata", {
        get: function () {
            return this.privMetadata;
        },
        enumerable: true,
        configurable: true
    });
    return EventSource;
}());
exports.EventSource = EventSource;



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var List = /** @class */ (function () {
    function List(list) {
        var _this = this;
        this.privSubscriptionIdCounter = 0;
        this.privAddSubscriptions = {};
        this.privRemoveSubscriptions = {};
        this.privDisposedSubscriptions = {};
        this.privDisposeReason = null;
        this.get = function (itemIndex) {
            _this.throwIfDisposed();
            return _this.privList[itemIndex];
        };
        this.first = function () {
            return _this.get(0);
        };
        this.last = function () {
            return _this.get(_this.length() - 1);
        };
        this.add = function (item) {
            _this.throwIfDisposed();
            _this.insertAt(_this.privList.length, item);
        };
        this.insertAt = function (index, item) {
            _this.throwIfDisposed();
            if (index === 0) {
                _this.privList.unshift(item);
            }
            else if (index === _this.privList.length) {
                _this.privList.push(item);
            }
            else {
                _this.privList.splice(index, 0, item);
            }
            _this.triggerSubscriptions(_this.privAddSubscriptions);
        };
        this.removeFirst = function () {
            _this.throwIfDisposed();
            return _this.removeAt(0);
        };
        this.removeLast = function () {
            _this.throwIfDisposed();
            return _this.removeAt(_this.length() - 1);
        };
        this.removeAt = function (index) {
            _this.throwIfDisposed();
            return _this.remove(index, 1)[0];
        };
        this.remove = function (index, count) {
            _this.throwIfDisposed();
            var removedElements = _this.privList.splice(index, count);
            _this.triggerSubscriptions(_this.privRemoveSubscriptions);
            return removedElements;
        };
        this.clear = function () {
            _this.throwIfDisposed();
            _this.remove(0, _this.length());
        };
        this.length = function () {
            _this.throwIfDisposed();
            return _this.privList.length;
        };
        this.onAdded = function (addedCallback) {
            _this.throwIfDisposed();
            var subscriptionId = _this.privSubscriptionIdCounter++;
            _this.privAddSubscriptions[subscriptionId] = addedCallback;
            return {
                detach: function () {
                    delete _this.privAddSubscriptions[subscriptionId];
                },
            };
        };
        this.onRemoved = function (removedCallback) {
            _this.throwIfDisposed();
            var subscriptionId = _this.privSubscriptionIdCounter++;
            _this.privRemoveSubscriptions[subscriptionId] = removedCallback;
            return {
                detach: function () {
                    delete _this.privRemoveSubscriptions[subscriptionId];
                },
            };
        };
        this.onDisposed = function (disposedCallback) {
            _this.throwIfDisposed();
            var subscriptionId = _this.privSubscriptionIdCounter++;
            _this.privDisposedSubscriptions[subscriptionId] = disposedCallback;
            return {
                detach: function () {
                    delete _this.privDisposedSubscriptions[subscriptionId];
                },
            };
        };
        this.join = function (seperator) {
            _this.throwIfDisposed();
            return _this.privList.join(seperator);
        };
        this.toArray = function () {
            var cloneCopy = Array();
            _this.privList.forEach(function (val) {
                cloneCopy.push(val);
            });
            return cloneCopy;
        };
        this.any = function (callback) {
            _this.throwIfDisposed();
            if (callback) {
                return _this.where(callback).length() > 0;
            }
            else {
                return _this.length() > 0;
            }
        };
        this.all = function (callback) {
            _this.throwIfDisposed();
            return _this.where(callback).length() === _this.length();
        };
        this.forEach = function (callback) {
            _this.throwIfDisposed();
            for (var i = 0; i < _this.length(); i++) {
                callback(_this.privList[i], i);
            }
        };
        this.select = function (callback) {
            _this.throwIfDisposed();
            var selectList = [];
            for (var i = 0; i < _this.privList.length; i++) {
                selectList.push(callback(_this.privList[i], i));
            }
            return new List(selectList);
        };
        this.where = function (callback) {
            _this.throwIfDisposed();
            var filteredList = new List();
            for (var i = 0; i < _this.privList.length; i++) {
                if (callback(_this.privList[i], i)) {
                    filteredList.add(_this.privList[i]);
                }
            }
            return filteredList;
        };
        this.orderBy = function (compareFn) {
            _this.throwIfDisposed();
            var clonedArray = _this.toArray();
            var orderedArray = clonedArray.sort(compareFn);
            return new List(orderedArray);
        };
        this.orderByDesc = function (compareFn) {
            _this.throwIfDisposed();
            return _this.orderBy(function (a, b) { return compareFn(b, a); });
        };
        this.clone = function () {
            _this.throwIfDisposed();
            return new List(_this.toArray());
        };
        this.concat = function (list) {
            _this.throwIfDisposed();
            return new List(_this.privList.concat(list.toArray()));
        };
        this.concatArray = function (array) {
            _this.throwIfDisposed();
            return new List(_this.privList.concat(array));
        };
        this.isDisposed = function () {
            return _this.privList == null;
        };
        this.dispose = function (reason) {
            if (!_this.isDisposed()) {
                _this.privDisposeReason = reason;
                _this.privList = null;
                _this.privAddSubscriptions = null;
                _this.privRemoveSubscriptions = null;
                _this.triggerSubscriptions(_this.privDisposedSubscriptions);
            }
        };
        this.throwIfDisposed = function () {
            if (_this.isDisposed()) {
                throw new Error_1.ObjectDisposedError("List", _this.privDisposeReason);
            }
        };
        this.triggerSubscriptions = function (subscriptions) {
            if (subscriptions) {
                for (var subscriptionId in subscriptions) {
                    if (subscriptionId) {
                        subscriptions[subscriptionId]();
                    }
                }
            }
        };
        this.privList = [];
        // copy the list rather than taking as is.
        if (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                this.privList.push(item);
            }
        }
    }
    return List;
}());
exports.List = List;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var PromiseState;
(function (PromiseState) {
    PromiseState[PromiseState["None"] = 0] = "None";
    PromiseState[PromiseState["Resolved"] = 1] = "Resolved";
    PromiseState[PromiseState["Rejected"] = 2] = "Rejected";
})(PromiseState = exports.PromiseState || (exports.PromiseState = {}));
var PromiseResult = /** @class */ (function () {
    function PromiseResult(promiseResultEventSource) {
        var _this = this;
        this.throwIfError = function () {
            if (_this.isError) {
                throw _this.error;
            }
        };
        promiseResultEventSource.on(function (result) {
            if (!_this.privIsCompleted) {
                _this.privIsCompleted = true;
                _this.privIsError = false;
                _this.privResult = result;
            }
        }, function (error) {
            if (!_this.privIsCompleted) {
                _this.privIsCompleted = true;
                _this.privIsError = true;
                _this.privError = error;
            }
        });
    }
    Object.defineProperty(PromiseResult.prototype, "isCompleted", {
        get: function () {
            return this.privIsCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseResult.prototype, "isError", {
        get: function () {
            return this.privIsError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseResult.prototype, "error", {
        get: function () {
            return this.privError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseResult.prototype, "result", {
        get: function () {
            return this.privResult;
        },
        enumerable: true,
        configurable: true
    });
    return PromiseResult;
}());
exports.PromiseResult = PromiseResult;
// tslint:disable-next-line:max-classes-per-file
var PromiseResultEventSource = /** @class */ (function () {
    function PromiseResultEventSource() {
        var _this = this;
        this.setResult = function (result) {
            _this.privOnSetResult(result);
        };
        this.setError = function (error) {
            _this.privOnSetError(error);
        };
        this.on = function (onSetResult, onSetError) {
            _this.privOnSetResult = onSetResult;
            _this.privOnSetError = onSetError;
        };
    }
    return PromiseResultEventSource;
}());
exports.PromiseResultEventSource = PromiseResultEventSource;
// tslint:disable-next-line:max-classes-per-file
var PromiseHelper = /** @class */ (function () {
    function PromiseHelper() {
    }
    PromiseHelper.whenAll = function (promises) {
        if (!promises || promises.length === 0) {
            throw new Error_1.ArgumentNullError("promises");
        }
        var deferred = new Deferred();
        var errors = [];
        var completedPromises = 0;
        var checkForCompletion = function () {
            completedPromises++;
            if (completedPromises === promises.length) {
                if (errors.length === 0) {
                    deferred.resolve(true);
                }
                else {
                    deferred.reject(errors.join(", "));
                }
            }
        };
        for (var _i = 0, promises_1 = promises; _i < promises_1.length; _i++) {
            var promise = promises_1[_i];
            promise.on(function (r) {
                checkForCompletion();
            }, function (e) {
                errors.push(e);
                checkForCompletion();
            });
        }
        return deferred.promise();
    };
    PromiseHelper.fromResult = function (result) {
        var deferred = new Deferred();
        deferred.resolve(result);
        return deferred.promise();
    };
    PromiseHelper.fromError = function (error) {
        var deferred = new Deferred();
        deferred.reject(error);
        return deferred.promise();
    };
    return PromiseHelper;
}());
exports.PromiseHelper = PromiseHelper;
// TODO: replace with ES6 promises
// tslint:disable-next-line:max-classes-per-file
var Promise = /** @class */ (function () {
    function Promise(sink) {
        var _this = this;
        this.result = function () {
            return _this.privSink.result;
        };
        this.continueWith = function (continuationCallback) {
            if (!continuationCallback) {
                throw new Error_1.ArgumentNullError("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.privSink.on(function (r) {
                try {
                    var continuationResult = continuationCallback(_this.privSink.result);
                    continuationDeferral.resolve(continuationResult);
                }
                catch (e) {
                    continuationDeferral.reject(e);
                }
            }, function (error) {
                try {
                    var continuationResult = continuationCallback(_this.privSink.result);
                    continuationDeferral.resolve(continuationResult);
                }
                catch (e) {
                    continuationDeferral.reject("'Error handler for error " + error + " threw error " + e + "'");
                }
            });
            return continuationDeferral.promise();
        };
        this.onSuccessContinueWith = function (continuationCallback) {
            if (!continuationCallback) {
                throw new Error_1.ArgumentNullError("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.privSink.on(function (r) {
                try {
                    var continuationResult = continuationCallback(r);
                    continuationDeferral.resolve(continuationResult);
                }
                catch (e) {
                    continuationDeferral.reject(e);
                }
            }, function (error) {
                continuationDeferral.reject(error);
            });
            return continuationDeferral.promise();
        };
        this.continueWithPromise = function (continuationCallback) {
            if (!continuationCallback) {
                throw new Error_1.ArgumentNullError("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.privSink.on(function (r) {
                try {
                    var continuationPromise = continuationCallback(_this.privSink.result);
                    if (!continuationPromise) {
                        throw new Error("'Continuation callback did not return promise'");
                    }
                    continuationPromise.on(function (continuationResult) {
                        continuationDeferral.resolve(continuationResult);
                    }, function (e) {
                        continuationDeferral.reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.reject(e);
                }
            }, function (error) {
                try {
                    var continuationPromise = continuationCallback(_this.privSink.result);
                    if (!continuationPromise) {
                        throw new Error("Continuation callback did not return promise");
                    }
                    continuationPromise.on(function (continuationResult) {
                        continuationDeferral.resolve(continuationResult);
                    }, function (e) {
                        continuationDeferral.reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.reject("'Error handler for error " + error + " threw error " + e + "'");
                }
            });
            return continuationDeferral.promise();
        };
        this.onSuccessContinueWithPromise = function (continuationCallback) {
            if (!continuationCallback) {
                throw new Error_1.ArgumentNullError("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.privSink.on(function (r) {
                try {
                    var continuationPromise = continuationCallback(r);
                    if (!continuationPromise) {
                        throw new Error("Continuation callback did not return promise");
                    }
                    continuationPromise.on(function (continuationResult) {
                        continuationDeferral.resolve(continuationResult);
                    }, function (e) {
                        continuationDeferral.reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.reject(e);
                }
            }, function (error) {
                continuationDeferral.reject(error);
            });
            return continuationDeferral.promise();
        };
        this.on = function (successCallback, errorCallback) {
            if (!successCallback) {
                throw new Error_1.ArgumentNullError("successCallback");
            }
            if (!errorCallback) {
                throw new Error_1.ArgumentNullError("errorCallback");
            }
            _this.privSink.on(successCallback, errorCallback);
            return _this;
        };
        this.finally = function (callback) {
            if (!callback) {
                throw new Error_1.ArgumentNullError("callback");
            }
            var callbackWrapper = function (_) {
                callback();
            };
            return _this.on(callbackWrapper, callbackWrapper);
        };
        this.privSink = sink;
    }
    return Promise;
}());
exports.Promise = Promise;
// tslint:disable-next-line:max-classes-per-file
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.state = function () {
            return _this.privSink.state;
        };
        this.promise = function () {
            return _this.privPromise;
        };
        this.resolve = function (result) {
            _this.privSink.resolve(result);
            return _this;
        };
        this.reject = function (error) {
            _this.privSink.reject(error);
            return _this;
        };
        this.privSink = new Sink();
        this.privPromise = new Promise(this.privSink);
    }
    return Deferred;
}());
exports.Deferred = Deferred;
// tslint:disable-next-line:max-classes-per-file
var Sink = /** @class */ (function () {
    function Sink() {
        var _this = this;
        this.privState = PromiseState.None;
        this.privPromiseResult = null;
        this.privPromiseResultEvents = null;
        this.privSuccessHandlers = [];
        this.privErrorHandlers = [];
        this.resolve = function (result) {
            if (_this.privState !== PromiseState.None) {
                throw new Error("'Cannot resolve a completed promise'");
            }
            _this.privState = PromiseState.Resolved;
            _this.privPromiseResultEvents.setResult(result);
            for (var i = 0; i < _this.privSuccessHandlers.length; i++) {
                _this.executeSuccessCallback(result, _this.privSuccessHandlers[i], _this.privErrorHandlers[i]);
            }
            _this.detachHandlers();
        };
        this.reject = function (error) {
            if (_this.privState !== PromiseState.None) {
                throw new Error("'Cannot reject a completed promise'");
            }
            _this.privState = PromiseState.Rejected;
            _this.privPromiseResultEvents.setError(error);
            for (var _i = 0, _a = _this.privErrorHandlers; _i < _a.length; _i++) {
                var errorHandler = _a[_i];
                _this.executeErrorCallback(error, errorHandler);
            }
            _this.detachHandlers();
        };
        this.on = function (successCallback, errorCallback) {
            if (successCallback == null) {
                successCallback = function (r) { return; };
            }
            if (_this.privState === PromiseState.None) {
                _this.privSuccessHandlers.push(successCallback);
                _this.privErrorHandlers.push(errorCallback);
            }
            else {
                if (_this.privState === PromiseState.Resolved) {
                    _this.executeSuccessCallback(_this.privPromiseResult.result, successCallback, errorCallback);
                }
                else if (_this.privState === PromiseState.Rejected) {
                    _this.executeErrorCallback(_this.privPromiseResult.error, errorCallback);
                }
                _this.detachHandlers();
            }
        };
        this.executeSuccessCallback = function (result, successCallback, errorCallback) {
            try {
                successCallback(result);
            }
            catch (e) {
                _this.executeErrorCallback("'Unhandled callback error: " + e + "'", errorCallback);
            }
        };
        this.executeErrorCallback = function (error, errorCallback) {
            if (errorCallback) {
                try {
                    errorCallback(error);
                }
                catch (e) {
                    throw new Error("'Unhandled callback error: " + e + ". InnerError: " + error + "'");
                }
            }
            else {
                throw new Error("'Unhandled error: " + error + "'");
            }
        };
        this.detachHandlers = function () {
            _this.privErrorHandlers = [];
            _this.privSuccessHandlers = [];
        };
        this.privPromiseResultEvents = new PromiseResultEventSource();
        this.privPromiseResult = new PromiseResult(this.privPromiseResultEvents);
    }
    Object.defineProperty(Sink.prototype, "state", {
        get: function () {
            return this.privState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sink.prototype, "result", {
        get: function () {
            return this.privPromiseResult;
        },
        enumerable: true,
        configurable: true
    });
    return Sink;
}());
exports.Sink = Sink;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var List_1 = __webpack_require__(14);
var Promise_1 = __webpack_require__(15);
var SubscriberType;
(function (SubscriberType) {
    SubscriberType[SubscriberType["Dequeue"] = 0] = "Dequeue";
    SubscriberType[SubscriberType["Peek"] = 1] = "Peek";
})(SubscriberType || (SubscriberType = {}));
var Queue = /** @class */ (function () {
    function Queue(list) {
        var _this = this;
        this.privPromiseStore = new List_1.List();
        this.privIsDrainInProgress = false;
        this.privIsDisposing = false;
        this.privDisposeReason = null;
        this.enqueue = function (item) {
            _this.throwIfDispose();
            _this.enqueueFromPromise(Promise_1.PromiseHelper.fromResult(item));
        };
        this.enqueueFromPromise = function (promise) {
            _this.throwIfDispose();
            _this.privPromiseStore.add(promise);
            promise.finally(function () {
                while (_this.privPromiseStore.length() > 0) {
                    if (!_this.privPromiseStore.first().result().isCompleted) {
                        break;
                    }
                    else {
                        var p = _this.privPromiseStore.removeFirst();
                        if (!p.result().isError) {
                            _this.privList.add(p.result().result);
                        }
                        else {
                            // TODO: Log as warning.
                        }
                    }
                }
            });
        };
        this.dequeue = function () {
            _this.throwIfDispose();
            var deferredSubscriber = new Promise_1.Deferred();
            if (_this.privSubscribers) {
                _this.privSubscribers.add({ deferral: deferredSubscriber, type: SubscriberType.Dequeue });
                _this.drain();
            }
            return deferredSubscriber.promise();
        };
        this.peek = function () {
            _this.throwIfDispose();
            var deferredSubscriber = new Promise_1.Deferred();
            var subs = _this.privSubscribers;
            if (subs) {
                _this.privSubscribers.add({ deferral: deferredSubscriber, type: SubscriberType.Peek });
                _this.drain();
            }
            return deferredSubscriber.promise();
        };
        this.length = function () {
            _this.throwIfDispose();
            return _this.privList.length();
        };
        this.isDisposed = function () {
            return _this.privSubscribers == null;
        };
        this.drainAndDispose = function (pendingItemProcessor, reason) {
            if (!_this.isDisposed() && !_this.privIsDisposing) {
                _this.privDisposeReason = reason;
                _this.privIsDisposing = true;
                var subs = _this.privSubscribers;
                if (subs) {
                    while (subs.length() > 0) {
                        var subscriber = subs.removeFirst();
                        // TODO: this needs work (Resolve(null) instead?).
                        subscriber.deferral.resolve(undefined);
                        // subscriber.deferral.reject("Disposed");
                    }
                    // note: this block assumes cooperative multitasking, i.e.,
                    // between the if-statement and the assignment there are no
                    // thread switches.
                    // Reason is that between the initial const = this.; and this
                    // point there is the derral.resolve() operation that might have
                    // caused recursive calls to the Queue, especially, calling
                    // Dispose() on the queue alredy (which would reset the var
                    // here to null!).
                    // That should generally hold true for javascript...
                    if (_this.privSubscribers === subs) {
                        _this.privSubscribers = subs;
                    }
                }
                for (var _i = 0, _a = _this.privDetachables; _i < _a.length; _i++) {
                    var detachable = _a[_i];
                    detachable.detach();
                }
                if (_this.privPromiseStore.length() > 0 && pendingItemProcessor) {
                    return Promise_1.PromiseHelper
                        .whenAll(_this.privPromiseStore.toArray())
                        .continueWith(function () {
                        _this.privSubscribers = null;
                        _this.privList.forEach(function (item, index) {
                            pendingItemProcessor(item);
                        });
                        _this.privList = null;
                        return true;
                    });
                }
                else {
                    _this.privSubscribers = null;
                    _this.privList = null;
                }
            }
            return Promise_1.PromiseHelper.fromResult(true);
        };
        this.dispose = function (reason) {
            _this.drainAndDispose(null, reason);
        };
        this.drain = function () {
            if (!_this.privIsDrainInProgress && !_this.privIsDisposing) {
                _this.privIsDrainInProgress = true;
                var subs = _this.privSubscribers;
                var lists = _this.privList;
                if (subs && lists) {
                    while (lists.length() > 0 && subs.length() > 0 && !_this.privIsDisposing) {
                        var subscriber = subs.removeFirst();
                        if (subscriber.type === SubscriberType.Peek) {
                            subscriber.deferral.resolve(lists.first());
                        }
                        else {
                            var dequeuedItem = lists.removeFirst();
                            subscriber.deferral.resolve(dequeuedItem);
                        }
                    }
                    // note: this block assumes cooperative multitasking, i.e.,
                    // between the if-statement and the assignment there are no
                    // thread switches.
                    // Reason is that between the initial const = this.; and this
                    // point there is the derral.resolve() operation that might have
                    // caused recursive calls to the Queue, especially, calling
                    // Dispose() on the queue alredy (which would reset the var
                    // here to null!).
                    // That should generally hold true for javascript...
                    if (_this.privSubscribers === subs) {
                        _this.privSubscribers = subs;
                    }
                    // note: this block assumes cooperative multitasking, i.e.,
                    // between the if-statement and the assignment there are no
                    // thread switches.
                    // Reason is that between the initial const = this.; and this
                    // point there is the derral.resolve() operation that might have
                    // caused recursive calls to the Queue, especially, calling
                    // Dispose() on the queue alredy (which would reset the var
                    // here to null!).
                    // That should generally hold true for javascript...
                    if (_this.privList === lists) {
                        _this.privList = lists;
                    }
                }
                _this.privIsDrainInProgress = false;
            }
        };
        this.throwIfDispose = function () {
            if (_this.isDisposed()) {
                if (_this.privDisposeReason) {
                    throw new Error_1.InvalidOperationError(_this.privDisposeReason);
                }
                throw new Error_1.ObjectDisposedError("Queue");
            }
            else if (_this.privIsDisposing) {
                throw new Error_1.InvalidOperationError("Queue disposing");
            }
        };
        this.privList = list ? list : new List_1.List();
        this.privDetachables = [];
        this.privSubscribers = new List_1.List();
        this.privDetachables.push(this.privList.onAdded(this.drain));
    }
    return Queue;
}());
exports.Queue = Queue;



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Guid_1 = __webpack_require__(5);
var Exports_1 = __webpack_require__(1);
var Exports_2 = __webpack_require__(2);
var Exports_3 = __webpack_require__(0);
var AudioStreamFormat_1 = __webpack_require__(7);
exports.bufferSize = 4096;
/**
 * Represents audio input stream used for custom audio input configurations.
 * @class AudioInputStream
 */
var AudioInputStream = /** @class */ (function () {
    /**
     * Creates and initializes an instance.
     * @constructor
     */
    function AudioInputStream() {
    }
    /**
     * Creates a memory backed PushAudioInputStream with the specified audio format.
     * @member AudioInputStream.createPushStream
     * @function
     * @public
     * @param {AudioStreamFormat} format - The audio data format in which audio will be
     *        written to the push audio stream's write() method (currently only support 16 kHz 16bit mono PCM).
     * @returns {PushAudioInputStream} The audio input stream being created.
     */
    AudioInputStream.createPushStream = function (format) {
        return PushAudioInputStream.create(format);
    };
    /**
     * Creates a PullAudioInputStream that delegates to the specified callback interface for read()
     * and close() methods.
     * @member AudioInputStream.createPullStream
     * @function
     * @public
     * @param {PullAudioInputStreamCallback} callback - The custom audio input object, derived from
     *        PullAudioInputStreamCallback
     * @param {AudioStreamFormat} format - The audio data format in which audio will be returned from
     *        the callback's read() method (currently only support 16 kHz 16bit mono PCM).
     * @returns {PullAudioInputStream} The audio input stream being created.
     */
    AudioInputStream.createPullStream = function (callback, format) {
        return PullAudioInputStream.create(callback, format);
        // throw new Error("Oops");
    };
    return AudioInputStream;
}());
exports.AudioInputStream = AudioInputStream;
/**
 * Represents memory backed push audio input stream used for custom audio input configurations.
 * @class PushAudioInputStream
 */
// tslint:disable-next-line:max-classes-per-file
var PushAudioInputStream = /** @class */ (function (_super) {
    __extends(PushAudioInputStream, _super);
    function PushAudioInputStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a memory backed PushAudioInputStream with the specified audio format.
     * @member PushAudioInputStream.create
     * @function
     * @public
     * @param {AudioStreamFormat} format - The audio data format in which audio will be written to the
     *        push audio stream's write() method (currently only support 16 kHz 16bit mono PCM).
     * @returns {PushAudioInputStream} The push audio input stream being created.
     */
    PushAudioInputStream.create = function (format) {
        return new PushAudioInputStreamImpl(exports.bufferSize, format);
    };
    return PushAudioInputStream;
}(AudioInputStream));
exports.PushAudioInputStream = PushAudioInputStream;
/**
 * Represents memory backed push audio input stream used for custom audio input configurations.
 * @private
 * @class PushAudioInputStreamImpl
 */
// tslint:disable-next-line:max-classes-per-file
var PushAudioInputStreamImpl = /** @class */ (function (_super) {
    __extends(PushAudioInputStreamImpl, _super);
    /**
     * Creates and initalizes an instance with the given values.
     * @constructor
     * @param {AudioStreamFormat} format - The audio stream format.
     */
    function PushAudioInputStreamImpl(chunkSize, format) {
        var _this = _super.call(this) || this;
        _this.onEvent = function (event) {
            _this.privEvents.onEvent(event);
            Exports_2.Events.instance.onEvent(event);
        };
        if (format === undefined) {
            _this.privFormat = AudioStreamFormat_1.AudioStreamFormatImpl.getDefaultInputFormat();
        }
        else {
            _this.privFormat = format;
        }
        _this.privEvents = new Exports_2.EventSource();
        _this.privId = Guid_1.createNoDashGuid();
        _this.privStream = new Exports_2.ChunkedArrayBufferStream(chunkSize);
        return _this;
    }
    Object.defineProperty(PushAudioInputStreamImpl.prototype, "format", {
        /**
         * Format information for the audio
         */
        get: function () {
            return this.privFormat;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the audio data specified by making an internal copy of the data.
     * @member PushAudioInputStreamImpl.prototype.write
     * @function
     * @public
     * @param {ArrayBuffer} dataBuffer - The audio buffer of which this function will make a copy.
     */
    PushAudioInputStreamImpl.prototype.write = function (dataBuffer) {
        this.privStream.writeStreamChunk({
            buffer: dataBuffer,
            isEnd: false,
            timeReceived: Date.now()
        });
    };
    /**
     * Closes the stream.
     * @member PushAudioInputStreamImpl.prototype.close
     * @function
     * @public
     */
    PushAudioInputStreamImpl.prototype.close = function () {
        this.privStream.close();
    };
    PushAudioInputStreamImpl.prototype.id = function () {
        return this.privId;
    };
    PushAudioInputStreamImpl.prototype.turnOn = function () {
        this.onEvent(new Exports_2.AudioSourceInitializingEvent(this.privId)); // no stream id
        this.onEvent(new Exports_2.AudioSourceReadyEvent(this.privId));
        return Exports_2.PromiseHelper.fromResult(true);
    };
    PushAudioInputStreamImpl.prototype.attach = function (audioNodeId) {
        var _this = this;
        this.onEvent(new Exports_2.AudioStreamNodeAttachingEvent(this.privId, audioNodeId));
        return this.turnOn()
            .onSuccessContinueWith(function (_) {
            // For now we support a single parallel reader of the pushed stream.
            // So we can simiply hand the stream to the recognizer and let it recognize.
            return _this.privStream.getReader();
        })
            .onSuccessContinueWith(function (streamReader) {
            _this.onEvent(new Exports_2.AudioStreamNodeAttachedEvent(_this.privId, audioNodeId));
            return {
                detach: function () {
                    streamReader.close();
                    _this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(_this.privId, audioNodeId));
                    _this.turnOff();
                },
                id: function () {
                    return audioNodeId;
                },
                read: function () {
                    return streamReader.read();
                },
            };
        });
    };
    PushAudioInputStreamImpl.prototype.detach = function (audioNodeId) {
        this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
    };
    PushAudioInputStreamImpl.prototype.turnOff = function () {
        return Exports_2.PromiseHelper.fromResult(false);
    };
    Object.defineProperty(PushAudioInputStreamImpl.prototype, "events", {
        get: function () {
            return this.privEvents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PushAudioInputStreamImpl.prototype, "deviceInfo", {
        get: function () {
            return Exports_2.PromiseHelper.fromResult({
                bitspersample: this.privFormat.bitsPerSample,
                channelcount: this.privFormat.channels,
                connectivity: Exports_1.connectivity.Unknown,
                manufacturer: "Speech SDK",
                model: "PushStream",
                samplerate: this.privFormat.samplesPerSec,
                type: Exports_1.type.Stream,
            });
        },
        enumerable: true,
        configurable: true
    });
    return PushAudioInputStreamImpl;
}(PushAudioInputStream));
exports.PushAudioInputStreamImpl = PushAudioInputStreamImpl;
/*
 * Represents audio input stream used for custom audio input configurations.
 * @class PullAudioInputStream
 */
// tslint:disable-next-line:max-classes-per-file
var PullAudioInputStream = /** @class */ (function (_super) {
    __extends(PullAudioInputStream, _super);
    /**
     * Creates and initializes and instance.
     * @constructor
     */
    function PullAudioInputStream() {
        return _super.call(this) || this;
    }
    /**
     * Creates a PullAudioInputStream that delegates to the specified callback interface for
     * read() and close() methods, using the default format (16 kHz 16bit mono PCM).
     * @member PullAudioInputStream.create
     * @function
     * @public
     * @param {PullAudioInputStreamCallback} callback - The custom audio input object,
     *        derived from PullAudioInputStreamCustomCallback
     * @param {AudioStreamFormat} format - The audio data format in which audio will be
     *        returned from the callback's read() method (currently only support 16 kHz 16bit mono PCM).
     * @returns {PullAudioInputStream} The push audio input stream being created.
     */
    PullAudioInputStream.create = function (callback, format) {
        return new PullAudioInputStreamImpl(callback, format);
    };
    return PullAudioInputStream;
}(AudioInputStream));
exports.PullAudioInputStream = PullAudioInputStream;
/**
 * Represents audio input stream used for custom audio input configurations.
 * @private
 * @class PullAudioInputStreamImpl
 */
// tslint:disable-next-line:max-classes-per-file
var PullAudioInputStreamImpl = /** @class */ (function (_super) {
    __extends(PullAudioInputStreamImpl, _super);
    /**
     * Creates a PullAudioInputStream that delegates to the specified callback interface for
     * read() and close() methods, using the default format (16 kHz 16bit mono PCM).
     * @constructor
     * @param {PullAudioInputStreamCallback} callback - The custom audio input object,
     *        derived from PullAudioInputStreamCustomCallback
     * @param {AudioStreamFormat} format - The audio data format in which audio will be
     *        returned from the callback's read() method (currently only support 16 kHz 16bit mono PCM).
     */
    function PullAudioInputStreamImpl(callback, format) {
        var _this = _super.call(this) || this;
        _this.onEvent = function (event) {
            _this.privEvents.onEvent(event);
            Exports_2.Events.instance.onEvent(event);
        };
        if (undefined === format) {
            _this.privFormat = Exports_3.AudioStreamFormat.getDefaultInputFormat();
        }
        else {
            _this.privFormat = format;
        }
        _this.privEvents = new Exports_2.EventSource();
        _this.privId = Guid_1.createNoDashGuid();
        _this.privCallback = callback;
        _this.privIsClosed = false;
        return _this;
    }
    Object.defineProperty(PullAudioInputStreamImpl.prototype, "format", {
        /**
         * Format information for the audio
         */
        get: function () {
            return this.privFormat;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the stream.
     * @member PullAudioInputStreamImpl.prototype.close
     * @function
     * @public
     */
    PullAudioInputStreamImpl.prototype.close = function () {
        this.privIsClosed = true;
        this.privCallback.close();
    };
    PullAudioInputStreamImpl.prototype.id = function () {
        return this.privId;
    };
    PullAudioInputStreamImpl.prototype.turnOn = function () {
        this.onEvent(new Exports_2.AudioSourceInitializingEvent(this.privId)); // no stream id
        this.onEvent(new Exports_2.AudioSourceReadyEvent(this.privId));
        return Exports_2.PromiseHelper.fromResult(true);
    };
    PullAudioInputStreamImpl.prototype.attach = function (audioNodeId) {
        var _this = this;
        this.onEvent(new Exports_2.AudioStreamNodeAttachingEvent(this.privId, audioNodeId));
        return this.turnOn()
            .onSuccessContinueWith(function (result) {
            _this.onEvent(new Exports_2.AudioStreamNodeAttachedEvent(_this.privId, audioNodeId));
            return {
                detach: function () {
                    _this.privCallback.close();
                    _this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(_this.privId, audioNodeId));
                    _this.turnOff();
                },
                id: function () {
                    return audioNodeId;
                },
                read: function () {
                    var totalBytes = 0;
                    var transmitBuff;
                    // Until we have the minimum number of bytes to send in a transmission, keep asking for more.
                    while (totalBytes < exports.bufferSize) {
                        // Sizing the read buffer to the delta between the perfect size and what's left means we won't ever get too much
                        // data back.
                        var readBuff = new ArrayBuffer(exports.bufferSize - totalBytes);
                        var pulledBytes = _this.privCallback.read(readBuff);
                        // If there is no return buffer yet defined, set the return buffer to the that was just populated.
                        // This was, if we have enough data there's no copy penalty, but if we don't we have a buffer that's the
                        // preferred size allocated.
                        if (undefined === transmitBuff) {
                            transmitBuff = readBuff;
                        }
                        else {
                            // Not the first bite at the apple, so fill the return buffer with the data we got back.
                            var intView = new Int8Array(transmitBuff);
                            intView.set(new Int8Array(readBuff), totalBytes);
                        }
                        // If there are no bytes to read, just break out and be done.
                        if (0 === pulledBytes) {
                            break;
                        }
                        totalBytes += pulledBytes;
                    }
                    return Exports_2.PromiseHelper.fromResult({
                        buffer: transmitBuff.slice(0, totalBytes),
                        isEnd: _this.privIsClosed || totalBytes === 0,
                        timeReceived: Date.now(),
                    });
                },
            };
        });
    };
    PullAudioInputStreamImpl.prototype.detach = function (audioNodeId) {
        this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
    };
    PullAudioInputStreamImpl.prototype.turnOff = function () {
        return Exports_2.PromiseHelper.fromResult(false);
    };
    Object.defineProperty(PullAudioInputStreamImpl.prototype, "events", {
        get: function () {
            return this.privEvents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PullAudioInputStreamImpl.prototype, "deviceInfo", {
        get: function () {
            return Exports_2.PromiseHelper.fromResult({
                bitspersample: this.privFormat.bitsPerSample,
                channelcount: this.privFormat.channels,
                connectivity: Exports_1.connectivity.Unknown,
                manufacturer: "Speech SDK",
                model: "PullStream",
                samplerate: this.privFormat.samplesPerSec,
                type: Exports_1.type.Stream,
            });
        },
        enumerable: true,
        configurable: true
    });
    return PullAudioInputStreamImpl;
}(PullAudioInputStream));
exports.PullAudioInputStreamImpl = PullAudioInputStreamImpl;



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(6);
var Exports_2 = __webpack_require__(1);
var Exports_3 = __webpack_require__(0);
var Exports_4 = __webpack_require__(1);
var QueryParameterNames_1 = __webpack_require__(61);
var SpeechConnectionFactory = /** @class */ (function () {
    function SpeechConnectionFactory() {
        var _this = this;
        this.interactiveRelativeUri = "/speech/recognition/interactive/cognitiveservices/v1";
        this.conversationRelativeUri = "/speech/recognition/conversation/cognitiveservices/v1";
        this.dictationRelativeUri = "/speech/recognition/dictation/cognitiveservices/v1";
        this.create = function (config, authInfo, connectionId) {
            var endpoint = config.parameters.getProperty(Exports_3.PropertyId.SpeechServiceConnection_Endpoint, undefined);
            var queryParams = {};
            var endpointId = config.parameters.getProperty(Exports_3.PropertyId.SpeechServiceConnection_EndpointId, undefined);
            var language = config.parameters.getProperty(Exports_3.PropertyId.SpeechServiceConnection_RecoLanguage, undefined);
            if (endpointId) {
                if (!endpoint || endpoint.search(QueryParameterNames_1.QueryParameterNames.DeploymentIdParamName) === -1) {
                    queryParams[QueryParameterNames_1.QueryParameterNames.DeploymentIdParamName] = endpointId;
                }
            }
            else if (language) {
                if (!endpoint || endpoint.search(QueryParameterNames_1.QueryParameterNames.LanguageParamName) === -1) {
                    queryParams[QueryParameterNames_1.QueryParameterNames.LanguageParamName] = language;
                }
            }
            if (!endpoint || endpoint.search(QueryParameterNames_1.QueryParameterNames.FormatParamName) === -1) {
                queryParams[QueryParameterNames_1.QueryParameterNames.FormatParamName] = config.parameters.getProperty(Exports_2.OutputFormatPropertyName, Exports_3.OutputFormat[Exports_3.OutputFormat.Simple]).toLowerCase();
            }
            if (!endpoint) {
                var region = config.parameters.getProperty(Exports_3.PropertyId.SpeechServiceConnection_Region, undefined);
                var host = "wss://" + region + ".stt.speech.microsoft.com";
                switch (config.recognitionMode) {
                    case Exports_4.RecognitionMode.Conversation:
                        endpoint = host + _this.conversationRelativeUri;
                        break;
                    case Exports_4.RecognitionMode.Dictation:
                        endpoint = host + _this.dictationRelativeUri;
                        break;
                    default:
                        endpoint = host + _this.interactiveRelativeUri; // default is interactive
                        break;
                }
            }
            var headers = {};
            headers[authInfo.headerName] = authInfo.token;
            headers[QueryParameterNames_1.QueryParameterNames.ConnectionIdHeader] = connectionId;
            return new Exports_1.WebsocketConnection(endpoint, queryParams, headers, new Exports_4.WebsocketMessageFormatter(), Exports_1.ProxyInfo.fromRecognizerConfig(config), connectionId);
        };
    }
    return SpeechConnectionFactory;
}());
exports.SpeechConnectionFactory = SpeechConnectionFactory;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var HttpsProxyAgent = __webpack_require__(105);
var ws = __webpack_require__(106);
var ocsp = __webpack_require__(107);
var WebsocketMessageAdapter = /** @class */ (function () {
    function WebsocketMessageAdapter(uri, connectionId, messageFormatter, proxyInfo) {
        var _this = this;
        this.open = function () {
            if (_this.privConnectionState === Exports_1.ConnectionState.Disconnected) {
                return Exports_1.PromiseHelper.fromError("Cannot open a connection that is in " + _this.privConnectionState + " state");
            }
            if (_this.privConnectionEstablishDeferral) {
                return _this.privConnectionEstablishDeferral.promise();
            }
            _this.privConnectionEstablishDeferral = new Exports_1.Deferred();
            _this.privCertificateValidatedDeferral = new Exports_1.Deferred();
            _this.privConnectionState = Exports_1.ConnectionState.Connecting;
            try {
                if (typeof WebSocket !== "undefined" && !WebsocketMessageAdapter.forceNpmWebSocket) {
                    // Browser handles cert checks.
                    _this.privCertificateValidatedDeferral.resolve(true);
                    _this.privWebsocketClient = new WebSocket(_this.privUri);
                }
                else {
                    if (_this.proxyInfo !== undefined &&
                        _this.proxyInfo.HostName !== undefined &&
                        _this.proxyInfo.Port > 0) {
                        var httpProxyOptions = {
                            host: _this.proxyInfo.HostName,
                            port: _this.proxyInfo.Port,
                        };
                        if (undefined !== _this.proxyInfo.UserName) {
                            httpProxyOptions.headers = {
                                "Proxy-Authentication": "Basic " + new Buffer(_this.proxyInfo.UserName + ":" + (_this.proxyInfo.Password === undefined) ? "" : _this.proxyInfo.Password).toString("base64"),
                                "requestOCSP": "true",
                            };
                        }
                        var httpProxyAgent = new HttpsProxyAgent(httpProxyOptions);
                        var httpsOptions_1 = { agent: httpProxyAgent };
                        _this.privWebsocketClient = new ws(_this.privUri, httpsOptions_1);
                        // Register to be notified when WebSocket upgrade happens so we can check the validity of the
                        // Certificate.
                        _this.privWebsocketClient.addListener("upgrade", function (e) {
                            var tlsSocket = e.socket;
                            var peer = tlsSocket.getPeerCertificate(true);
                            // Cork the socket until we know if the cert is good.
                            tlsSocket.cork();
                            ocsp.check({
                                cert: peer.raw,
                                httpOptions: httpsOptions_1,
                                issuer: peer.issuerCertificate.raw,
                            }, function (error, res) {
                                if (error) {
                                    _this.privCertificateValidatedDeferral.reject(error.message);
                                    tlsSocket.destroy(error);
                                }
                                else {
                                    _this.privCertificateValidatedDeferral.resolve(true);
                                    tlsSocket.uncork();
                                }
                            });
                        });
                    }
                    else {
                        // The ocsp library will handle validation for us and fail the connection if needed.
                        _this.privCertificateValidatedDeferral.resolve(true);
                        var ocspAgent = new ocsp.Agent({});
                        var options = { agent: ocspAgent };
                        _this.privWebsocketClient = new ws(_this.privUri, options);
                    }
                }
                _this.privWebsocketClient.binaryType = "arraybuffer";
                _this.privReceivingMessageQueue = new Exports_1.Queue();
                _this.privDisconnectDeferral = new Exports_1.Deferred();
                _this.privSendMessageQueue = new Exports_1.Queue();
                _this.processSendQueue();
            }
            catch (error) {
                _this.privConnectionEstablishDeferral.resolve(new Exports_1.ConnectionOpenResponse(500, error));
                return _this.privConnectionEstablishDeferral.promise();
            }
            _this.onEvent(new Exports_1.ConnectionStartEvent(_this.privConnectionId, _this.privUri));
            _this.privWebsocketClient.onopen = function (e) {
                _this.privCertificateValidatedDeferral.promise().on(function () {
                    _this.privConnectionState = Exports_1.ConnectionState.Connected;
                    _this.onEvent(new Exports_1.ConnectionEstablishedEvent(_this.privConnectionId));
                    _this.privConnectionEstablishDeferral.resolve(new Exports_1.ConnectionOpenResponse(200, ""));
                }, function (error) {
                    _this.privConnectionEstablishDeferral.reject(error);
                });
            };
            _this.privWebsocketClient.onerror = function (e) {
                // TODO: Understand what this is error is. Will we still get onClose ?
                if (_this.privConnectionState !== Exports_1.ConnectionState.Connecting) {
                    // TODO: Is this required ?
                    // this.onEvent(new ConnectionErrorEvent(errorMsg, connectionId));
                }
            };
            _this.privWebsocketClient.onclose = function (e) {
                if (_this.privConnectionState === Exports_1.ConnectionState.Connecting) {
                    _this.privConnectionState = Exports_1.ConnectionState.Disconnected;
                    // this.onEvent(new ConnectionEstablishErrorEvent(this.connectionId, e.code, e.reason));
                    _this.privConnectionEstablishDeferral.resolve(new Exports_1.ConnectionOpenResponse(e.code, e.reason));
                }
                else {
                    _this.onEvent(new Exports_1.ConnectionClosedEvent(_this.privConnectionId, e.code, e.reason));
                }
                _this.onClose(e.code, e.reason);
            };
            _this.privWebsocketClient.onmessage = function (e) {
                var networkReceivedTime = new Date().toISOString();
                if (_this.privConnectionState === Exports_1.ConnectionState.Connected) {
                    var deferred_1 = new Exports_1.Deferred();
                    // let id = ++this.idCounter;
                    _this.privReceivingMessageQueue.enqueueFromPromise(deferred_1.promise());
                    if (e.data instanceof ArrayBuffer) {
                        var rawMessage = new Exports_1.RawWebsocketMessage(Exports_1.MessageType.Binary, e.data);
                        _this.privMessageFormatter
                            .toConnectionMessage(rawMessage)
                            .on(function (connectionMessage) {
                            _this.onEvent(new Exports_1.ConnectionMessageReceivedEvent(_this.privConnectionId, networkReceivedTime, connectionMessage));
                            deferred_1.resolve(connectionMessage);
                        }, function (error) {
                            // TODO: Events for these ?
                            deferred_1.reject("Invalid binary message format. Error: " + error);
                        });
                    }
                    else {
                        var rawMessage = new Exports_1.RawWebsocketMessage(Exports_1.MessageType.Text, e.data);
                        _this.privMessageFormatter
                            .toConnectionMessage(rawMessage)
                            .on(function (connectionMessage) {
                            _this.onEvent(new Exports_1.ConnectionMessageReceivedEvent(_this.privConnectionId, networkReceivedTime, connectionMessage));
                            deferred_1.resolve(connectionMessage);
                        }, function (error) {
                            // TODO: Events for these ?
                            deferred_1.reject("Invalid text message format. Error: " + error);
                        });
                    }
                }
            };
            return _this.privConnectionEstablishDeferral.promise();
        };
        this.send = function (message) {
            if (_this.privConnectionState !== Exports_1.ConnectionState.Connected) {
                return Exports_1.PromiseHelper.fromError("Cannot send on connection that is in " + _this.privConnectionState + " state");
            }
            var messageSendStatusDeferral = new Exports_1.Deferred();
            var messageSendDeferral = new Exports_1.Deferred();
            _this.privSendMessageQueue.enqueueFromPromise(messageSendDeferral.promise());
            _this.privMessageFormatter
                .fromConnectionMessage(message)
                .on(function (rawMessage) {
                messageSendDeferral.resolve({
                    Message: message,
                    RawWebsocketMessage: rawMessage,
                    sendStatusDeferral: messageSendStatusDeferral,
                });
            }, function (error) {
                messageSendDeferral.reject("Error formatting the message. " + error);
            });
            return messageSendStatusDeferral.promise();
        };
        this.read = function () {
            if (_this.privConnectionState !== Exports_1.ConnectionState.Connected) {
                return Exports_1.PromiseHelper.fromError("Cannot read on connection that is in " + _this.privConnectionState + " state");
            }
            return _this.privReceivingMessageQueue.dequeue();
        };
        this.close = function (reason) {
            if (_this.privWebsocketClient) {
                if (_this.privConnectionState !== Exports_1.ConnectionState.Disconnected) {
                    _this.privWebsocketClient.close(1000, reason ? reason : "Normal closure by client");
                }
            }
            else {
                var deferral = new Exports_1.Deferred();
                deferral.resolve(true);
                return deferral.promise();
            }
            return _this.privDisconnectDeferral.promise();
        };
        this.sendRawMessage = function (sendItem) {
            try {
                // indicates we are draining the queue and it came with no message;
                if (!sendItem) {
                    return Exports_1.PromiseHelper.fromResult(true);
                }
                _this.onEvent(new Exports_1.ConnectionMessageSentEvent(_this.privConnectionId, new Date().toISOString(), sendItem.Message));
                _this.privWebsocketClient.send(sendItem.RawWebsocketMessage.payload);
                return Exports_1.PromiseHelper.fromResult(true);
            }
            catch (e) {
                return Exports_1.PromiseHelper.fromError("websocket send error: " + e);
            }
        };
        this.onClose = function (code, reason) {
            var closeReason = "Connection closed. " + code + ": " + reason;
            _this.privConnectionState = Exports_1.ConnectionState.Disconnected;
            _this.privDisconnectDeferral.resolve(true);
            _this.privReceivingMessageQueue.dispose(reason);
            _this.privReceivingMessageQueue.drainAndDispose(function (pendingReceiveItem) {
                // TODO: Events for these ?
                // Logger.instance.onEvent(new LoggingEvent(LogType.Warning, null, `Failed to process received message. Reason: ${closeReason}, Message: ${JSON.stringify(pendingReceiveItem)}`));
            }, closeReason);
            _this.privSendMessageQueue.drainAndDispose(function (pendingSendItem) {
                pendingSendItem.sendStatusDeferral.reject(closeReason);
            }, closeReason);
        };
        this.processSendQueue = function () {
            _this.privSendMessageQueue
                .dequeue()
                .on(function (sendItem) {
                // indicates we are draining the queue and it came with no message;
                if (!sendItem) {
                    return;
                }
                _this.sendRawMessage(sendItem)
                    .on(function (result) {
                    sendItem.sendStatusDeferral.resolve(result);
                    _this.processSendQueue();
                }, function (sendError) {
                    sendItem.sendStatusDeferral.reject(sendError);
                    _this.processSendQueue();
                });
            }, function (error) {
                // do nothing
            });
        };
        this.onEvent = function (event) {
            _this.privConnectionEvents.onEvent(event);
            Exports_1.Events.instance.onEvent(event);
        };
        if (!uri) {
            throw new Exports_1.ArgumentNullError("uri");
        }
        if (!messageFormatter) {
            throw new Exports_1.ArgumentNullError("messageFormatter");
        }
        this.proxyInfo = proxyInfo;
        this.privConnectionEvents = new Exports_1.EventSource();
        this.privConnectionId = connectionId;
        this.privMessageFormatter = messageFormatter;
        this.privConnectionState = Exports_1.ConnectionState.None;
        this.privUri = uri;
    }
    Object.defineProperty(WebsocketMessageAdapter.prototype, "state", {
        get: function () {
            return this.privConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebsocketMessageAdapter.prototype, "events", {
        get: function () {
            return this.privConnectionEvents;
        },
        enumerable: true,
        configurable: true
    });
    WebsocketMessageAdapter.forceNpmWebSocket = false;
    return WebsocketMessageAdapter;
}());
exports.WebsocketMessageAdapter = WebsocketMessageAdapter;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100).Buffer))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

window.SpeechSDK = __webpack_require__(21);



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var Exports_1 = __webpack_require__(6);
var Exports_2 = __webpack_require__(2);
// Common.Storage.SetLocalStorage(new Common.Browser.LocalStorage());
// Common.Storage.SetSessionStorage(new Common.Browser.SessionStorage());
Exports_2.Events.instance.attachListener(new Exports_1.ConsoleLoggingListener());
// Speech SDK API
__export(__webpack_require__(0));



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var ConsoleLoggingListener = /** @class */ (function () {
    function ConsoleLoggingListener(logLevelFilter) {
        var _this = this;
        if (logLevelFilter === void 0) { logLevelFilter = Exports_1.EventType.Warning; }
        this.onEvent = function (event) {
            if (event.eventType >= _this.privLogLevelFilter) {
                var log = _this.toString(event);
                switch (event.eventType) {
                    case Exports_1.EventType.Debug:
                        // tslint:disable-next-line:no-console
                        console.debug(log);
                        break;
                    case Exports_1.EventType.Info:
                        // tslint:disable-next-line:no-console
                        console.info(log);
                        break;
                    case Exports_1.EventType.Warning:
                        // tslint:disable-next-line:no-console
                        console.warn(log);
                        break;
                    case Exports_1.EventType.Error:
                        // tslint:disable-next-line:no-console
                        console.error(log);
                        break;
                    default:
                        // tslint:disable-next-line:no-console
                        console.log(log);
                        break;
                }
            }
        };
        this.toString = function (event) {
            var logFragments = [
                "" + event.EventTime,
                "" + event.Name,
            ];
            for (var prop in event) {
                if (prop && event.hasOwnProperty(prop) &&
                    prop !== "eventTime" && prop !== "eventType" &&
                    prop !== "eventId" && prop !== "name" &&
                    prop !== "constructor") {
                    var value = event[prop];
                    var valueToLog = "<NULL>";
                    if (value !== undefined && value !== null) {
                        if (typeof (value) === "number" || typeof (value) === "string") {
                            valueToLog = value.toString();
                        }
                        else {
                            valueToLog = JSON.stringify(value);
                        }
                    }
                    logFragments.push(prop + ": " + valueToLog);
                }
            }
            return logFragments.join(" | ");
        };
        this.privLogLevelFilter = logLevelFilter;
    }
    return ConsoleLoggingListener;
}());
exports.ConsoleLoggingListener = ConsoleLoggingListener;



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformEvent_1 = __webpack_require__(8);
var AudioSourceEvent = /** @class */ (function (_super) {
    __extends(AudioSourceEvent, _super);
    function AudioSourceEvent(eventName, audioSourceId, eventType) {
        if (eventType === void 0) { eventType = PlatformEvent_1.EventType.Info; }
        var _this = _super.call(this, eventName, eventType) || this;
        _this.privAudioSourceId = audioSourceId;
        return _this;
    }
    Object.defineProperty(AudioSourceEvent.prototype, "audioSourceId", {
        get: function () {
            return this.privAudioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    return AudioSourceEvent;
}(PlatformEvent_1.PlatformEvent));
exports.AudioSourceEvent = AudioSourceEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioSourceInitializingEvent = /** @class */ (function (_super) {
    __extends(AudioSourceInitializingEvent, _super);
    function AudioSourceInitializingEvent(audioSourceId) {
        return _super.call(this, "AudioSourceInitializingEvent", audioSourceId) || this;
    }
    return AudioSourceInitializingEvent;
}(AudioSourceEvent));
exports.AudioSourceInitializingEvent = AudioSourceInitializingEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioSourceReadyEvent = /** @class */ (function (_super) {
    __extends(AudioSourceReadyEvent, _super);
    function AudioSourceReadyEvent(audioSourceId) {
        return _super.call(this, "AudioSourceReadyEvent", audioSourceId) || this;
    }
    return AudioSourceReadyEvent;
}(AudioSourceEvent));
exports.AudioSourceReadyEvent = AudioSourceReadyEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioSourceOffEvent = /** @class */ (function (_super) {
    __extends(AudioSourceOffEvent, _super);
    function AudioSourceOffEvent(audioSourceId) {
        return _super.call(this, "AudioSourceOffEvent", audioSourceId) || this;
    }
    return AudioSourceOffEvent;
}(AudioSourceEvent));
exports.AudioSourceOffEvent = AudioSourceOffEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioSourceErrorEvent = /** @class */ (function (_super) {
    __extends(AudioSourceErrorEvent, _super);
    function AudioSourceErrorEvent(audioSourceId, error) {
        var _this = _super.call(this, "AudioSourceErrorEvent", audioSourceId, PlatformEvent_1.EventType.Error) || this;
        _this.privError = error;
        return _this;
    }
    Object.defineProperty(AudioSourceErrorEvent.prototype, "error", {
        get: function () {
            return this.privError;
        },
        enumerable: true,
        configurable: true
    });
    return AudioSourceErrorEvent;
}(AudioSourceEvent));
exports.AudioSourceErrorEvent = AudioSourceErrorEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeEvent = /** @class */ (function (_super) {
    __extends(AudioStreamNodeEvent, _super);
    function AudioStreamNodeEvent(eventName, audioSourceId, audioNodeId) {
        var _this = _super.call(this, eventName, audioSourceId) || this;
        _this.privAudioNodeId = audioNodeId;
        return _this;
    }
    Object.defineProperty(AudioStreamNodeEvent.prototype, "audioNodeId", {
        get: function () {
            return this.privAudioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    return AudioStreamNodeEvent;
}(AudioSourceEvent));
exports.AudioStreamNodeEvent = AudioStreamNodeEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeAttachingEvent = /** @class */ (function (_super) {
    __extends(AudioStreamNodeAttachingEvent, _super);
    function AudioStreamNodeAttachingEvent(audioSourceId, audioNodeId) {
        return _super.call(this, "AudioStreamNodeAttachingEvent", audioSourceId, audioNodeId) || this;
    }
    return AudioStreamNodeAttachingEvent;
}(AudioStreamNodeEvent));
exports.AudioStreamNodeAttachingEvent = AudioStreamNodeAttachingEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeAttachedEvent = /** @class */ (function (_super) {
    __extends(AudioStreamNodeAttachedEvent, _super);
    function AudioStreamNodeAttachedEvent(audioSourceId, audioNodeId) {
        return _super.call(this, "AudioStreamNodeAttachedEvent", audioSourceId, audioNodeId) || this;
    }
    return AudioStreamNodeAttachedEvent;
}(AudioStreamNodeEvent));
exports.AudioStreamNodeAttachedEvent = AudioStreamNodeAttachedEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeDetachedEvent = /** @class */ (function (_super) {
    __extends(AudioStreamNodeDetachedEvent, _super);
    function AudioStreamNodeDetachedEvent(audioSourceId, audioNodeId) {
        return _super.call(this, "AudioStreamNodeDetachedEvent", audioSourceId, audioNodeId) || this;
    }
    return AudioStreamNodeDetachedEvent;
}(AudioStreamNodeEvent));
exports.AudioStreamNodeDetachedEvent = AudioStreamNodeDetachedEvent;
// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeErrorEvent = /** @class */ (function (_super) {
    __extends(AudioStreamNodeErrorEvent, _super);
    function AudioStreamNodeErrorEvent(audioSourceId, audioNodeId, error) {
        var _this = _super.call(this, "AudioStreamNodeErrorEvent", audioSourceId, audioNodeId) || this;
        _this.privError = error;
        return _this;
    }
    Object.defineProperty(AudioStreamNodeErrorEvent.prototype, "error", {
        get: function () {
            return this.privError;
        },
        enumerable: true,
        configurable: true
    });
    return AudioStreamNodeErrorEvent;
}(AudioStreamNodeEvent));
exports.AudioStreamNodeErrorEvent = AudioStreamNodeErrorEvent;



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformEvent_1 = __webpack_require__(8);
var ConnectionEvent = /** @class */ (function (_super) {
    __extends(ConnectionEvent, _super);
    function ConnectionEvent(eventName, connectionId, eventType) {
        if (eventType === void 0) { eventType = PlatformEvent_1.EventType.Info; }
        var _this = _super.call(this, eventName, eventType) || this;
        _this.privConnectionId = connectionId;
        return _this;
    }
    Object.defineProperty(ConnectionEvent.prototype, "connectionId", {
        get: function () {
            return this.privConnectionId;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionEvent;
}(PlatformEvent_1.PlatformEvent));
exports.ConnectionEvent = ConnectionEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectionStartEvent = /** @class */ (function (_super) {
    __extends(ConnectionStartEvent, _super);
    function ConnectionStartEvent(connectionId, uri, headers) {
        var _this = _super.call(this, "ConnectionStartEvent", connectionId) || this;
        _this.privUri = uri;
        _this.privHeaders = headers;
        return _this;
    }
    Object.defineProperty(ConnectionStartEvent.prototype, "uri", {
        get: function () {
            return this.privUri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStartEvent.prototype, "headers", {
        get: function () {
            return this.privHeaders;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionStartEvent;
}(ConnectionEvent));
exports.ConnectionStartEvent = ConnectionStartEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectionEstablishedEvent = /** @class */ (function (_super) {
    __extends(ConnectionEstablishedEvent, _super);
    function ConnectionEstablishedEvent(connectionId, metadata) {
        return _super.call(this, "ConnectionEstablishedEvent", connectionId) || this;
    }
    return ConnectionEstablishedEvent;
}(ConnectionEvent));
exports.ConnectionEstablishedEvent = ConnectionEstablishedEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectionClosedEvent = /** @class */ (function (_super) {
    __extends(ConnectionClosedEvent, _super);
    function ConnectionClosedEvent(connectionId, statusCode, reason) {
        var _this = _super.call(this, "ConnectionClosedEvent", connectionId, PlatformEvent_1.EventType.Debug) || this;
        _this.privRreason = reason;
        _this.privStatusCode = statusCode;
        return _this;
    }
    Object.defineProperty(ConnectionClosedEvent.prototype, "reason", {
        get: function () {
            return this.privRreason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionClosedEvent.prototype, "statusCode", {
        get: function () {
            return this.privStatusCode;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionClosedEvent;
}(ConnectionEvent));
exports.ConnectionClosedEvent = ConnectionClosedEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectionEstablishErrorEvent = /** @class */ (function (_super) {
    __extends(ConnectionEstablishErrorEvent, _super);
    function ConnectionEstablishErrorEvent(connectionId, statuscode, reason) {
        var _this = _super.call(this, "ConnectionEstablishErrorEvent", connectionId, PlatformEvent_1.EventType.Error) || this;
        _this.privStatusCode = statuscode;
        _this.privReason = reason;
        return _this;
    }
    Object.defineProperty(ConnectionEstablishErrorEvent.prototype, "reason", {
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionEstablishErrorEvent.prototype, "statusCode", {
        get: function () {
            return this.privStatusCode;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionEstablishErrorEvent;
}(ConnectionEvent));
exports.ConnectionEstablishErrorEvent = ConnectionEstablishErrorEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectionMessageReceivedEvent = /** @class */ (function (_super) {
    __extends(ConnectionMessageReceivedEvent, _super);
    function ConnectionMessageReceivedEvent(connectionId, networkReceivedTimeISO, message) {
        var _this = _super.call(this, "ConnectionMessageReceivedEvent", connectionId) || this;
        _this.privNetworkReceivedTime = networkReceivedTimeISO;
        _this.privMessage = message;
        return _this;
    }
    Object.defineProperty(ConnectionMessageReceivedEvent.prototype, "networkReceivedTime", {
        get: function () {
            return this.privNetworkReceivedTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessageReceivedEvent.prototype, "message", {
        get: function () {
            return this.privMessage;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionMessageReceivedEvent;
}(ConnectionEvent));
exports.ConnectionMessageReceivedEvent = ConnectionMessageReceivedEvent;
// tslint:disable-next-line:max-classes-per-file
var ConnectionMessageSentEvent = /** @class */ (function (_super) {
    __extends(ConnectionMessageSentEvent, _super);
    function ConnectionMessageSentEvent(connectionId, networkSentTimeISO, message) {
        var _this = _super.call(this, "ConnectionMessageSentEvent", connectionId) || this;
        _this.privNetworkSentTime = networkSentTimeISO;
        _this.privMessage = message;
        return _this;
    }
    Object.defineProperty(ConnectionMessageSentEvent.prototype, "networkSentTime", {
        get: function () {
            return this.privNetworkSentTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessageSentEvent.prototype, "message", {
        get: function () {
            return this.privMessage;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionMessageSentEvent;
}(ConnectionEvent));
exports.ConnectionMessageSentEvent = ConnectionMessageSentEvent;



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionOpenResponse = /** @class */ (function () {
    function ConnectionOpenResponse(statusCode, reason) {
        this.privStatusCode = statusCode;
        this.privReason = reason;
    }
    Object.defineProperty(ConnectionOpenResponse.prototype, "statusCode", {
        get: function () {
            return this.privStatusCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionOpenResponse.prototype, "reason", {
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionOpenResponse;
}());
exports.ConnectionOpenResponse = ConnectionOpenResponse;



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var EventSource_1 = __webpack_require__(13);
var Events = /** @class */ (function () {
    function Events() {
    }
    Object.defineProperty(Events, "instance", {
        get: function () {
            return Events.privInstance;
        },
        enumerable: true,
        configurable: true
    });
    Events.privInstance = new EventSource_1.EventSource();
    Events.setEventSource = function (eventSource) {
        if (!eventSource) {
            throw new Error_1.ArgumentNullError("eventSource");
        }
        Events.privInstance = eventSource;
    };
    return Events;
}());
exports.Events = Events;



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["None"] = 0] = "None";
    ConnectionState[ConnectionState["Connected"] = 1] = "Connected";
    ConnectionState[ConnectionState["Connecting"] = 2] = "Connecting";
    ConnectionState[ConnectionState["Disconnected"] = 3] = "Disconnected";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionMessage_1 = __webpack_require__(12);
var Error_1 = __webpack_require__(3);
var Guid_1 = __webpack_require__(5);
var RawWebsocketMessage = /** @class */ (function () {
    function RawWebsocketMessage(messageType, payload, id) {
        this.privPayload = null;
        if (!payload) {
            throw new Error_1.ArgumentNullError("payload");
        }
        if (messageType === ConnectionMessage_1.MessageType.Binary && !(payload instanceof ArrayBuffer)) {
            throw new Error_1.InvalidOperationError("Payload must be ArrayBuffer");
        }
        if (messageType === ConnectionMessage_1.MessageType.Text && !(typeof (payload) === "string")) {
            throw new Error_1.InvalidOperationError("Payload must be a string");
        }
        this.privMessageType = messageType;
        this.privPayload = payload;
        this.privId = id ? id : Guid_1.createNoDashGuid();
    }
    Object.defineProperty(RawWebsocketMessage.prototype, "messageType", {
        get: function () {
            return this.privMessageType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "payload", {
        get: function () {
            return this.privPayload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "textContent", {
        get: function () {
            if (this.privMessageType === ConnectionMessage_1.MessageType.Binary) {
                throw new Error_1.InvalidOperationError("Not supported for binary message");
            }
            return this.privPayload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "binaryContent", {
        get: function () {
            if (this.privMessageType === ConnectionMessage_1.MessageType.Text) {
                throw new Error_1.InvalidOperationError("Not supported for text message");
            }
            return this.privPayload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "id", {
        get: function () {
            return this.privId;
        },
        enumerable: true,
        configurable: true
    });
    return RawWebsocketMessage;
}());
exports.RawWebsocketMessage = RawWebsocketMessage;



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var RiffPcmEncoder = /** @class */ (function () {
    function RiffPcmEncoder(actualSampleRate, desiredSampleRate) {
        var _this = this;
        this.privChannelCount = 1;
        this.encode = function (needHeader, actualAudioFrame) {
            var audioFrame = _this.downSampleAudioFrame(actualAudioFrame, _this.privActualSampleRate, _this.privDesiredSampleRate);
            if (!audioFrame) {
                return null;
            }
            var audioLength = audioFrame.length * 2;
            if (!needHeader) {
                var buffer_1 = new ArrayBuffer(audioLength);
                var view_1 = new DataView(buffer_1);
                _this.floatTo16BitPCM(view_1, 0, audioFrame);
                return buffer_1;
            }
            var buffer = new ArrayBuffer(44 + audioLength);
            var bitsPerSample = 16;
            var bytesPerSample = bitsPerSample / 8;
            // We dont know ahead of time about the length of audio to stream. So set to 0.
            var fileLength = 0;
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
            var view = new DataView(buffer);
            /* RIFF identifier */
            _this.setString(view, 0, "RIFF");
            /* file length */
            view.setUint32(4, fileLength, true);
            /* RIFF type & Format */
            _this.setString(view, 8, "WAVEfmt ");
            /* format chunk length */
            view.setUint32(16, 16, true);
            /* sample format (raw) */
            view.setUint16(20, 1, true);
            /* channel count */
            view.setUint16(22, _this.privChannelCount, true);
            /* sample rate */
            view.setUint32(24, _this.privDesiredSampleRate, true);
            /* byte rate (sample rate * block align) */
            view.setUint32(28, _this.privDesiredSampleRate * _this.privChannelCount * bytesPerSample, true);
            /* block align (channel count * bytes per sample) */
            view.setUint16(32, _this.privChannelCount * bytesPerSample, true);
            /* bits per sample */
            view.setUint16(34, bitsPerSample, true);
            /* data chunk identifier */
            _this.setString(view, 36, "data");
            /* data chunk length */
            view.setUint32(40, fileLength, true);
            _this.floatTo16BitPCM(view, 44, audioFrame);
            return buffer;
        };
        this.setString = function (view, offset, str) {
            for (var i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };
        this.floatTo16BitPCM = function (view, offset, input) {
            for (var i = 0; i < input.length; i++, offset += 2) {
                var s = Math.max(-1, Math.min(1, input[i]));
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        };
        this.downSampleAudioFrame = function (srcFrame, srcRate, dstRate) {
            if (dstRate === srcRate || dstRate > srcRate) {
                return srcFrame;
            }
            var ratio = srcRate / dstRate;
            var dstLength = Math.round(srcFrame.length / ratio);
            var dstFrame = new Float32Array(dstLength);
            var srcOffset = 0;
            var dstOffset = 0;
            while (dstOffset < dstLength) {
                var nextSrcOffset = Math.round((dstOffset + 1) * ratio);
                var accum = 0;
                var count = 0;
                while (srcOffset < nextSrcOffset && srcOffset < srcFrame.length) {
                    accum += srcFrame[srcOffset++];
                    count++;
                }
                dstFrame[dstOffset++] = accum / count;
            }
            return dstFrame;
        };
        this.privActualSampleRate = actualSampleRate;
        this.privDesiredSampleRate = desiredSampleRate;
    }
    return RiffPcmEncoder;
}());
exports.RiffPcmEncoder = RiffPcmEncoder;



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = __webpack_require__(3);
var Guid_1 = __webpack_require__(5);
var Queue_1 = __webpack_require__(16);
var Stream = /** @class */ (function () {
    function Stream(streamId) {
        var _this = this;
        this.privReaderIdCounter = 1;
        this.privIsEnded = false;
        this.getReader = function () {
            var readerId = _this.privReaderIdCounter;
            _this.privReaderIdCounter++;
            var readerQueue = new Queue_1.Queue();
            var currentLength = _this.privStreambuffer.length;
            _this.privReaderQueues[readerId] = readerQueue;
            for (var i = 0; i < currentLength; i++) {
                readerQueue.enqueue(_this.privStreambuffer[i]);
            }
            return new StreamReader(_this.privId, readerQueue, function () {
                delete _this.privReaderQueues[readerId];
            });
        };
        this.throwIfClosed = function () {
            if (_this.privIsEnded) {
                throw new Error_1.InvalidOperationError("Stream closed");
            }
        };
        this.privId = streamId ? streamId : Guid_1.createNoDashGuid();
        this.privStreambuffer = [];
        this.privReaderQueues = {};
    }
    Object.defineProperty(Stream.prototype, "isClosed", {
        get: function () {
            return this.privIsEnded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "id", {
        get: function () {
            return this.privId;
        },
        enumerable: true,
        configurable: true
    });
    Stream.prototype.close = function () {
        if (!this.privIsEnded) {
            this.writeStreamChunk({
                buffer: null,
                isEnd: true,
                timeReceived: Date.now(),
            });
            this.privIsEnded = true;
        }
    };
    Stream.prototype.writeStreamChunk = function (streamChunk) {
        this.throwIfClosed();
        this.privStreambuffer.push(streamChunk);
        for (var readerId in this.privReaderQueues) {
            if (!this.privReaderQueues[readerId].isDisposed()) {
                try {
                    this.privReaderQueues[readerId].enqueue(streamChunk);
                }
                catch (e) {
                    // Do nothing
                }
            }
        }
    };
    return Stream;
}());
exports.Stream = Stream;
// tslint:disable-next-line:max-classes-per-file
var StreamReader = /** @class */ (function () {
    function StreamReader(streamId, readerQueue, onClose) {
        var _this = this;
        this.privIsClosed = false;
        this.read = function () {
            if (_this.isClosed) {
                throw new Error_1.InvalidOperationError("StreamReader closed");
            }
            return _this.privReaderQueue
                .dequeue()
                .onSuccessContinueWith(function (streamChunk) {
                if (streamChunk.isEnd) {
                    _this.privReaderQueue.dispose("End of stream reached");
                }
                return streamChunk;
            });
        };
        this.close = function () {
            if (!_this.privIsClosed) {
                _this.privIsClosed = true;
                _this.privReaderQueue.dispose("StreamReader closed");
                _this.privOnClose();
            }
        };
        this.privReaderQueue = readerQueue;
        this.privOnClose = onClose;
        this.privStreamId = streamId;
    }
    Object.defineProperty(StreamReader.prototype, "isClosed", {
        get: function () {
            return this.privIsClosed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamReader.prototype, "streamId", {
        get: function () {
            return this.privStreamId;
        },
        enumerable: true,
        configurable: true
    });
    return StreamReader;
}());
exports.StreamReader = StreamReader;



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var ChunkedArrayBufferStream = /** @class */ (function (_super) {
    __extends(ChunkedArrayBufferStream, _super);
    function ChunkedArrayBufferStream(targetChunkSize, streamId) {
        var _this = _super.call(this, streamId) || this;
        _this.privTargetChunkSize = targetChunkSize;
        _this.privNextBufferReadyBytes = 0;
        return _this;
    }
    ChunkedArrayBufferStream.prototype.writeStreamChunk = function (chunk) {
        // No pending write, and the buffer is the right size so write it.
        if (chunk.isEnd ||
            (0 === this.privNextBufferReadyBytes && chunk.buffer.byteLength === this.privTargetChunkSize)) {
            _super.prototype.writeStreamChunk.call(this, chunk);
            return;
        }
        var bytesCopiedFromBuffer = 0;
        while (bytesCopiedFromBuffer < chunk.buffer.byteLength) {
            // Fill the next buffer.
            if (undefined === this.privNextBufferToWrite) {
                this.privNextBufferToWrite = new ArrayBuffer(this.privTargetChunkSize);
                this.privNextBufferStartTime = chunk.timeReceived;
            }
            // Find out how many bytes we can copy into the read buffer.
            var bytesToCopy = Math.min(chunk.buffer.byteLength - bytesCopiedFromBuffer, this.privTargetChunkSize - this.privNextBufferReadyBytes);
            var targetView = new Uint8Array(this.privNextBufferToWrite);
            var sourceView = new Uint8Array(chunk.buffer.slice(bytesCopiedFromBuffer, bytesToCopy + bytesCopiedFromBuffer));
            targetView.set(sourceView, this.privNextBufferReadyBytes);
            this.privNextBufferReadyBytes += bytesToCopy;
            bytesCopiedFromBuffer += bytesToCopy;
            // Are we ready to write?
            if (this.privNextBufferReadyBytes === this.privTargetChunkSize) {
                _super.prototype.writeStreamChunk.call(this, {
                    buffer: this.privNextBufferToWrite,
                    isEnd: false,
                    timeReceived: this.privNextBufferStartTime,
                });
                this.privNextBufferReadyBytes = 0;
                this.privNextBufferToWrite = undefined;
            }
        }
    };
    ChunkedArrayBufferStream.prototype.close = function () {
        // Send whatever is pending, then close the base class.
        if (0 !== this.privNextBufferReadyBytes && !this.isClosed) {
            _super.prototype.writeStreamChunk.call(this, {
                buffer: this.privNextBufferToWrite.slice(0, this.privNextBufferReadyBytes),
                isEnd: false,
                timeReceived: this.privNextBufferStartTime,
            });
        }
        _super.prototype.close.call(this);
    };
    return ChunkedArrayBufferStream;
}(Exports_1.Stream));
exports.ChunkedArrayBufferStream = ChunkedArrayBufferStream;



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var AudioStreamFormat_1 = __webpack_require__(7);
var Exports_1 = __webpack_require__(1);
var Exports_2 = __webpack_require__(2);
exports.AudioWorkletSourceURLPropertyName = "MICROPHONE-WorkletSourceUrl";
var MicAudioSource = /** @class */ (function () {
    function MicAudioSource(privRecorder, outputChunkSize, audioSourceId, deviceId) {
        var _this = this;
        this.privRecorder = privRecorder;
        this.deviceId = deviceId;
        this.privStreams = {};
        this.turnOn = function () {
            if (_this.privInitializeDeferral) {
                return _this.privInitializeDeferral.promise();
            }
            _this.privInitializeDeferral = new Exports_2.Deferred();
            _this.createAudioContext();
            var nav = window.navigator;
            var getUserMedia = (nav.getUserMedia ||
                nav.webkitGetUserMedia ||
                nav.mozGetUserMedia ||
                nav.msGetUserMedia);
            if (!!nav.mediaDevices) {
                getUserMedia = function (constraints, successCallback, errorCallback) {
                    nav.mediaDevices
                        .getUserMedia(constraints)
                        .then(successCallback)
                        .catch(errorCallback);
                };
            }
            if (!getUserMedia) {
                var errorMsg = "Browser does not support getUserMedia.";
                _this.privInitializeDeferral.reject(errorMsg);
                _this.onEvent(new Exports_2.AudioSourceErrorEvent(errorMsg, "")); // mic initialized error - no streamid at this point
            }
            else {
                var next = function () {
                    _this.onEvent(new Exports_2.AudioSourceInitializingEvent(_this.privId)); // no stream id
                    getUserMedia({ audio: _this.deviceId ? { deviceId: _this.deviceId } : true, video: false }, function (mediaStream) {
                        _this.privMediaStream = mediaStream;
                        _this.onEvent(new Exports_2.AudioSourceReadyEvent(_this.privId));
                        _this.privInitializeDeferral.resolve(true);
                    }, function (error) {
                        var errorMsg = "Error occurred during microphone initialization: " + error;
                        var tmp = _this.privInitializeDeferral;
                        // HACK: this should be handled through onError callbacks of all promises up the stack.
                        // Unfortunately, the current implementation does not provide an easy way to reject promises
                        // without a lot of code replication.
                        // TODO: fix promise implementation, allow for a graceful reject chaining.
                        _this.privInitializeDeferral = null;
                        tmp.reject(errorMsg); // this will bubble up through the whole chain of promises,
                        // with each new level adding extra "Unhandled callback error" prefix to the error message.
                        // The following line is not guaranteed to be executed.
                        _this.onEvent(new Exports_2.AudioSourceErrorEvent(_this.privId, errorMsg));
                    });
                };
                if (_this.privContext.state === "suspended") {
                    // NOTE: On iOS, the Web Audio API requires sounds to be triggered from an explicit user action.
                    // https://github.com/WebAudio/web-audio-api/issues/790
                    _this.privContext.resume().then(next, function (reason) {
                        _this.privInitializeDeferral.reject("Failed to initialize audio context: " + reason);
                    });
                }
                else {
                    next();
                }
            }
            return _this.privInitializeDeferral.promise();
        };
        this.id = function () {
            return _this.privId;
        };
        this.attach = function (audioNodeId) {
            _this.onEvent(new Exports_2.AudioStreamNodeAttachingEvent(_this.privId, audioNodeId));
            return _this.listen(audioNodeId).onSuccessContinueWith(function (streamReader) {
                _this.onEvent(new Exports_2.AudioStreamNodeAttachedEvent(_this.privId, audioNodeId));
                return {
                    detach: function () {
                        streamReader.close();
                        delete _this.privStreams[audioNodeId];
                        _this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(_this.privId, audioNodeId));
                        _this.turnOff();
                    },
                    id: function () {
                        return audioNodeId;
                    },
                    read: function () {
                        return streamReader.read();
                    },
                };
            });
        };
        this.detach = function (audioNodeId) {
            if (audioNodeId && _this.privStreams[audioNodeId]) {
                _this.privStreams[audioNodeId].close();
                delete _this.privStreams[audioNodeId];
                _this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(_this.privId, audioNodeId));
            }
        };
        this.turnOff = function () {
            for (var streamId in _this.privStreams) {
                if (streamId) {
                    var stream = _this.privStreams[streamId];
                    if (stream) {
                        stream.close();
                    }
                }
            }
            _this.onEvent(new Exports_2.AudioSourceOffEvent(_this.privId)); // no stream now
            _this.privInitializeDeferral = null;
            _this.destroyAudioContext();
            return Exports_2.PromiseHelper.fromResult(true);
        };
        this.listen = function (audioNodeId) {
            return _this.turnOn()
                .onSuccessContinueWith(function (_) {
                var stream = new Exports_2.ChunkedArrayBufferStream(_this.privOutputChunkSize, audioNodeId);
                _this.privStreams[audioNodeId] = stream;
                try {
                    _this.privRecorder.record(_this.privContext, _this.privMediaStream, stream);
                }
                catch (error) {
                    _this.onEvent(new Exports_2.AudioStreamNodeErrorEvent(_this.privId, audioNodeId, error));
                    throw error;
                }
                return stream.getReader();
            });
        };
        this.onEvent = function (event) {
            _this.privEvents.onEvent(event);
            Exports_2.Events.instance.onEvent(event);
        };
        this.createAudioContext = function () {
            if (!!_this.privContext) {
                return;
            }
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
            var AudioContext = (window.AudioContext)
                || (window.webkitAudioContext)
                || false;
            if (!AudioContext) {
                throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
            }
            _this.privContext = new AudioContext();
        };
        this.destroyAudioContext = function () {
            if (!_this.privContext) {
                return;
            }
            _this.privRecorder.releaseMediaResources(_this.privContext);
            // This pattern brought to you by a bug in the TypeScript compiler where it
            // confuses the ("close" in this.privContext) with this.privContext always being null as the alternate.
            // https://github.com/Microsoft/TypeScript/issues/11498
            var hasClose = false;
            if ("close" in _this.privContext) {
                hasClose = true;
            }
            if (hasClose) {
                _this.privContext.close();
                _this.privContext = null;
            }
            else if (null !== _this.privContext && _this.privContext.state === "running") {
                // Suspend actually takes a callback, but analogous to the
                // resume method, it'll be only fired if suspend is called
                // in a direct response to a user action. The later is not always
                // the case, as TurnOff is also called, when we receive an
                // end-of-speech message from the service. So, doing a best effort
                // fire-and-forget here.
                _this.privContext.suspend();
            }
        };
        this.privOutputChunkSize = outputChunkSize;
        this.privId = audioSourceId ? audioSourceId : Exports_2.createNoDashGuid();
        this.privEvents = new Exports_2.EventSource();
    }
    Object.defineProperty(MicAudioSource.prototype, "format", {
        get: function () {
            return MicAudioSource.AUDIOFORMAT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MicAudioSource.prototype, "events", {
        get: function () {
            return this.privEvents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MicAudioSource.prototype, "deviceInfo", {
        get: function () {
            return this.getMicrophoneLabel().onSuccessContinueWith(function (label) {
                return {
                    bitspersample: MicAudioSource.AUDIOFORMAT.bitsPerSample,
                    channelcount: MicAudioSource.AUDIOFORMAT.channels,
                    connectivity: Exports_1.connectivity.Unknown,
                    manufacturer: "Speech SDK",
                    model: label,
                    samplerate: MicAudioSource.AUDIOFORMAT.samplesPerSec,
                    type: Exports_1.type.Microphones,
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    MicAudioSource.prototype.setProperty = function (name, value) {
        if (name === exports.AudioWorkletSourceURLPropertyName) {
            this.privRecorder.setWorkletUrl(value);
        }
        else {
            throw new Error("Property '" + name + "' is not supported on Microphone.");
        }
    };
    MicAudioSource.prototype.getMicrophoneLabel = function () {
        var _this = this;
        var defaultMicrophoneName = "microphone";
        // If we did this already, return the value.
        if (this.privMicrophoneLabel !== undefined) {
            return Exports_2.PromiseHelper.fromResult(this.privMicrophoneLabel);
        }
        // If the stream isn't currently running, we can't query devices because security.
        if (this.privMediaStream === undefined || !this.privMediaStream.active) {
            return Exports_2.PromiseHelper.fromResult(defaultMicrophoneName);
        }
        // Setup a default
        this.privMicrophoneLabel = defaultMicrophoneName;
        // Get the id of the device running the audio track.
        var microphoneDeviceId = this.privMediaStream.getTracks()[0].getSettings().deviceId;
        // If the browser doesn't support getting the device ID, set a default and return.
        if (undefined === microphoneDeviceId) {
            return Exports_2.PromiseHelper.fromResult(this.privMicrophoneLabel);
        }
        var deferred = new Exports_2.Deferred();
        // Enumerate the media devices.
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.deviceId === microphoneDeviceId) {
                    // Found the device
                    _this.privMicrophoneLabel = device.label;
                    break;
                }
            }
            deferred.resolve(_this.privMicrophoneLabel);
        }, function () { return deferred.resolve(_this.privMicrophoneLabel); });
        return deferred.promise();
    };
    MicAudioSource.AUDIOFORMAT = AudioStreamFormat_1.AudioStreamFormat.getDefaultInputFormat();
    return MicAudioSource;
}());
exports.MicAudioSource = MicAudioSource;



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var IAuthentication_1 = __webpack_require__(10);
var AuthHeader = "Ocp-Apim-Subscription-Key";
/**
 * @class
 */
var CognitiveSubscriptionKeyAuthentication = /** @class */ (function () {
    /**
     * Creates and initializes an instance of the CognitiveSubscriptionKeyAuthentication class.
     * @constructor
     * @param {string} subscriptionKey - The subscription key
     */
    function CognitiveSubscriptionKeyAuthentication(subscriptionKey) {
        var _this = this;
        /**
         * Fetches the subscription key.
         * @member
         * @function
         * @public
         * @param {string} authFetchEventId - The id to fetch.
         */
        this.fetch = function (authFetchEventId) {
            return Exports_1.PromiseHelper.fromResult(_this.privAuthInfo);
        };
        /**
         * Fetches the subscription key.
         * @member
         * @function
         * @public
         * @param {string} authFetchEventId - The id to fetch.
         */
        this.fetchOnExpiry = function (authFetchEventId) {
            return Exports_1.PromiseHelper.fromResult(_this.privAuthInfo);
        };
        if (!subscriptionKey) {
            throw new Exports_1.ArgumentNullError("subscriptionKey");
        }
        this.privAuthInfo = new IAuthentication_1.AuthInfo(AuthHeader, subscriptionKey);
    }
    return CognitiveSubscriptionKeyAuthentication;
}());
exports.CognitiveSubscriptionKeyAuthentication = CognitiveSubscriptionKeyAuthentication;



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var IAuthentication_1 = __webpack_require__(10);
var AuthHeader = "Authorization";
var CognitiveTokenAuthentication = /** @class */ (function () {
    function CognitiveTokenAuthentication(fetchCallback, fetchOnExpiryCallback) {
        var _this = this;
        this.fetch = function (authFetchEventId) {
            return _this.privFetchCallback(authFetchEventId).onSuccessContinueWith(function (token) { return new IAuthentication_1.AuthInfo(AuthHeader, token); });
        };
        this.fetchOnExpiry = function (authFetchEventId) {
            return _this.privFetchOnExpiryCallback(authFetchEventId).onSuccessContinueWith(function (token) { return new IAuthentication_1.AuthInfo(AuthHeader, token); });
        };
        if (!fetchCallback) {
            throw new Exports_1.ArgumentNullError("fetchCallback");
        }
        if (!fetchOnExpiryCallback) {
            throw new Exports_1.ArgumentNullError("fetchOnExpiryCallback");
        }
        this.privFetchCallback = fetchCallback;
        this.privFetchOnExpiryCallback = fetchOnExpiryCallback;
    }
    return CognitiveTokenAuthentication;
}());
exports.CognitiveTokenAuthentication = CognitiveTokenAuthentication;



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(6);
var Exports_2 = __webpack_require__(0);
var Exports_3 = __webpack_require__(1);
var TestHooksParamName = "testhooks";
var ConnectionIdHeader = "X-ConnectionId";
var IntentConnectionFactory = /** @class */ (function () {
    function IntentConnectionFactory() {
        var _this = this;
        this.create = function (config, authInfo, connectionId) {
            var endpoint = config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Endpoint);
            if (!endpoint) {
                var region = config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_IntentRegion);
                endpoint = "wss://speech.platform.bing.com/speech/" + _this.getSpeechRegionFromIntentRegion(region) + "/recognition/interactive/cognitiveservices/v1";
            }
            var queryParams = {
                format: "simple",
                language: config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage),
            };
            var headers = {};
            headers[authInfo.headerName] = authInfo.token;
            headers[ConnectionIdHeader] = connectionId;
            return new Exports_1.WebsocketConnection(endpoint, queryParams, headers, new Exports_3.WebsocketMessageFormatter(), Exports_1.ProxyInfo.fromRecognizerConfig(config), connectionId);
        };
    }
    IntentConnectionFactory.prototype.getSpeechRegionFromIntentRegion = function (intentRegion) {
        switch (intentRegion) {
            case "West US":
            case "US West":
            case "westus":
                return "uswest";
            case "West US 2":
            case "US West 2":
            case "westus2":
                return "uswest2";
            case "South Central US":
            case "US South Central":
            case "southcentralus":
                return "ussouthcentral";
            case "West Central US":
            case "US West Central":
            case "westcentralus":
                return "uswestcentral";
            case "East US":
            case "US East":
            case "eastus":
                return "useast";
            case "East US 2":
            case "US East 2":
            case "eastus2":
                return "useast2";
            case "West Europe":
            case "Europe West":
            case "westeurope":
                return "europewest";
            case "North Europe":
            case "Europe North":
            case "northeurope":
                return "europenorth";
            case "Brazil South":
            case "South Brazil":
            case "southbrazil":
                return "brazilsouth";
            case "Australia East":
            case "East Australia":
            case "eastaustralia":
                return "australiaeast";
            case "Southeast Asia":
            case "Asia Southeast":
            case "southeastasia":
                return "asiasoutheast";
            case "East Asia":
            case "Asia East":
            case "eastasia":
                return "asiaeast";
            default:
                return intentRegion;
        }
    };
    return IntentConnectionFactory;
}());
exports.IntentConnectionFactory = IntentConnectionFactory;



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(6);
var Contracts_1 = __webpack_require__(4);
var Exports_2 = __webpack_require__(0);
var AudioInputStream_1 = __webpack_require__(17);
/**
 * Represents audio input configuration used for specifying what type of input to use (microphone, file, stream).
 * @class AudioConfig
 */
var AudioConfig = /** @class */ (function () {
    function AudioConfig() {
    }
    /**
     * Creates an AudioConfig object representing the default microphone on the system.
     * @member AudioConfig.fromDefaultMicrophoneInput
     * @function
     * @public
     * @returns {AudioConfig} The audio input configuration being created.
     */
    AudioConfig.fromDefaultMicrophoneInput = function () {
        var pcmRecorder = new Exports_1.PcmRecorder();
        return new AudioConfigImpl(new Exports_1.MicAudioSource(pcmRecorder, AudioInputStream_1.bufferSize));
    };
    /**
     * Creates an AudioConfig object representing a microphone with the specified device ID.
     * @member AudioConfig.fromMicrophoneInput
     * @function
     * @public
     * @param {string | undefined} deviceId - Specifies the device ID of the microphone to be used.
     *        Default microphone is used the value is omitted.
     * @returns {AudioConfig} The audio input configuration being created.
     */
    AudioConfig.fromMicrophoneInput = function (deviceId) {
        var pcmRecorder = new Exports_1.PcmRecorder();
        return new AudioConfigImpl(new Exports_1.MicAudioSource(pcmRecorder, AudioInputStream_1.bufferSize, deviceId));
    };
    /**
     * Creates an AudioConfig object representing the specified file.
     * @member AudioConfig.fromWavFileInput
     * @function
     * @public
     * @param {File} fileName - Specifies the audio input file. Currently, only WAV / PCM with 16-bit
     *        samples, 16 kHz sample rate, and a single channel (Mono) is supported.
     * @returns {AudioConfig} The audio input configuration being created.
     */
    AudioConfig.fromWavFileInput = function (file) {
        return new AudioConfigImpl(new Exports_1.FileAudioSource(file));
    };
    /**
     * Creates an AudioConfig object representing the specified stream.
     * @member AudioConfig.fromStreamInput
     * @function
     * @public
     * @param {AudioInputStream | PullAudioInputStreamCallback} audioStream - Specifies the custom audio input
     *        stream. Currently, only WAV / PCM with 16-bit samples, 16 kHz sample rate, and a single channel
     *        (Mono) is supported.
     * @returns {AudioConfig} The audio input configuration being created.
     */
    AudioConfig.fromStreamInput = function (audioStream) {
        if (audioStream instanceof Exports_2.PullAudioInputStreamCallback) {
            return new AudioConfigImpl(new AudioInputStream_1.PullAudioInputStreamImpl(audioStream));
        }
        if (audioStream instanceof Exports_2.AudioInputStream) {
            return new AudioConfigImpl(audioStream);
        }
        throw new Error("Not Supported Type");
    };
    return AudioConfig;
}());
exports.AudioConfig = AudioConfig;
/**
 * Represents audio input stream used for custom audio input configurations.
 * @private
 * @class AudioConfigImpl
 */
// tslint:disable-next-line:max-classes-per-file
var AudioConfigImpl = /** @class */ (function (_super) {
    __extends(AudioConfigImpl, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {IAudioSource} source - An audio source.
     */
    function AudioConfigImpl(source) {
        var _this = _super.call(this) || this;
        _this.privSource = source;
        return _this;
    }
    Object.defineProperty(AudioConfigImpl.prototype, "format", {
        /**
         * Format information for the audio
         */
        get: function () {
            return this.privSource.format;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @member AudioConfigImpl.prototype.close
     * @function
     * @public
     */
    AudioConfigImpl.prototype.close = function () {
        this.privSource.turnOff();
    };
    /**
     * @member AudioConfigImpl.prototype.id
     * @function
     * @public
     */
    AudioConfigImpl.prototype.id = function () {
        return this.privSource.id();
    };
    /**
     * @member AudioConfigImpl.prototype.turnOn
     * @function
     * @public
     * @returns {Promise<boolean>} A promise.
     */
    AudioConfigImpl.prototype.turnOn = function () {
        return this.privSource.turnOn();
    };
    /**
     * @member AudioConfigImpl.prototype.attach
     * @function
     * @public
     * @param {string} audioNodeId - The audio node id.
     * @returns {Promise<IAudioStreamNode>} A promise.
     */
    AudioConfigImpl.prototype.attach = function (audioNodeId) {
        return this.privSource.attach(audioNodeId);
    };
    /**
     * @member AudioConfigImpl.prototype.detach
     * @function
     * @public
     * @param {string} audioNodeId - The audio node id.
     */
    AudioConfigImpl.prototype.detach = function (audioNodeId) {
        return this.detach(audioNodeId);
    };
    /**
     * @member AudioConfigImpl.prototype.turnOff
     * @function
     * @public
     * @returns {Promise<boolean>} A promise.
     */
    AudioConfigImpl.prototype.turnOff = function () {
        return this.privSource.turnOff();
    };
    Object.defineProperty(AudioConfigImpl.prototype, "events", {
        /**
         * @member AudioConfigImpl.prototype.events
         * @function
         * @public
         * @returns {EventSource<AudioSourceEvent>} An event source for audio events.
         */
        get: function () {
            return this.privSource.events;
        },
        enumerable: true,
        configurable: true
    });
    AudioConfigImpl.prototype.setProperty = function (name, value) {
        Contracts_1.Contracts.throwIfNull(value, "value");
        if (undefined !== this.privSource.setProperty) {
            this.privSource.setProperty(name, value);
        }
        else {
            throw new Error("This AudioConfig instance does not support setting properties.");
        }
    };
    AudioConfigImpl.prototype.getProperty = function (name, def) {
        if (undefined !== this.privSource.getProperty) {
            return this.privSource.getProperty(name, def);
        }
        else {
            throw new Error("This AudioConfig instance does not support getting properties.");
        }
        return def;
    };
    Object.defineProperty(AudioConfigImpl.prototype, "deviceInfo", {
        get: function () {
            return this.privSource.deviceInfo;
        },
        enumerable: true,
        configurable: true
    });
    return AudioConfigImpl;
}(AudioConfig));
exports.AudioConfigImpl = AudioConfigImpl;



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the possible reasons a recognition result might be canceled.
 * @class CancellationReason
 */
var CancellationReason;
(function (CancellationReason) {
    /**
     * Indicates that an error occurred during speech recognition.
     * @member CancellationReason.Error
     */
    CancellationReason[CancellationReason["Error"] = 0] = "Error";
    /**
     * Indicates that the end of the audio stream was reached.
     * @member CancellationReason.EndOfStream
     */
    CancellationReason[CancellationReason["EndOfStream"] = 1] = "EndOfStream";
})(CancellationReason = exports.CancellationReason || (exports.CancellationReason = {}));



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * An abstract base class that defines callback methods (read() and close()) for
 * custom audio input streams).
 * @class PullAudioInputStreamCallback
 */
var PullAudioInputStreamCallback = /** @class */ (function () {
    function PullAudioInputStreamCallback() {
    }
    return PullAudioInputStreamCallback;
}());
exports.PullAudioInputStreamCallback = PullAudioInputStreamCallback;



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Contracts_1 = __webpack_require__(4);
/**
 * Represents a keyword recognition model for recognizing when
 * the user says a keyword to initiate further speech recognition.
 * @class KeywordRecognitionModel
 */
var KeywordRecognitionModel = /** @class */ (function () {
    /**
     * Create and initializes a new instance.
     * @constructor
     */
    function KeywordRecognitionModel() {
        this.privDisposed = false;
    }
    /**
     * Creates a keyword recognition model using the specified filename.
     * @member KeywordRecognitionModel.fromFile
     * @function
     * @public
     * @param {string} fileName - A string that represents file name for the keyword recognition model.
     *        Note, the file can point to a zip file in which case the model
     *        will be extracted from the zip.
     * @returns {KeywordRecognitionModel} The keyword recognition model being created.
     */
    KeywordRecognitionModel.fromFile = function (fileName) {
        Contracts_1.Contracts.throwIfFileDoesNotExist(fileName, "fileName");
        throw new Error("Not yet implemented.");
    };
    /**
     * Creates a keyword recognition model using the specified filename.
     * @member KeywordRecognitionModel.fromStream
     * @function
     * @public
     * @param {string} file - A File that represents file for the keyword recognition model.
     *        Note, the file can point to a zip file in which case the model will be extracted from the zip.
     * @returns {KeywordRecognitionModel} The keyword recognition model being created.
     */
    KeywordRecognitionModel.fromStream = function (file) {
        Contracts_1.Contracts.throwIfNull(file, "file");
        throw new Error("Not yet implemented.");
    };
    /**
     * Dispose of associated resources.
     * @member KeywordRecognitionModel.prototype.close
     * @function
     * @public
     */
    KeywordRecognitionModel.prototype.close = function () {
        if (this.privDisposed) {
            return;
        }
        this.privDisposed = true;
    };
    return KeywordRecognitionModel;
}());
exports.KeywordRecognitionModel = KeywordRecognitionModel;



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines content for session events like SessionStarted/Stopped, SoundStarted/Stopped.
 * @class SessionEventArgs
 */
var SessionEventArgs = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} sessionId - The session id.
     */
    function SessionEventArgs(sessionId) {
        this.privSessionId = sessionId;
    }
    Object.defineProperty(SessionEventArgs.prototype, "sessionId", {
        /**
         * Represents the session identifier.
         * @member SessionEventArgs.prototype.sessionId
         * @function
         * @public
         * @returns {string} Represents the session identifier.
         */
        get: function () {
            return this.privSessionId;
        },
        enumerable: true,
        configurable: true
    });
    return SessionEventArgs;
}());
exports.SessionEventArgs = SessionEventArgs;



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Defines payload for session events like Speech Start/End Detected
 * @class
 */
var RecognitionEventArgs = /** @class */ (function (_super) {
    __extends(RecognitionEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    function RecognitionEventArgs(offset, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privOffset = offset;
        return _this;
    }
    Object.defineProperty(RecognitionEventArgs.prototype, "offset", {
        /**
         * Represents the message offset
         * @member RecognitionEventArgs.prototype.offset
         * @function
         * @public
         */
        get: function () {
            return this.privOffset;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionEventArgs;
}(Exports_1.SessionEventArgs));
exports.RecognitionEventArgs = RecognitionEventArgs;



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Define Speech Recognizer output formats.
 * @class OutputFormat
 */
var OutputFormat;
(function (OutputFormat) {
    /**
     * @member OutputFormat.Simple
     */
    OutputFormat[OutputFormat["Simple"] = 0] = "Simple";
    /**
     * @member OutputFormat.Detailed
     */
    OutputFormat[OutputFormat["Detailed"] = 1] = "Detailed";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Intent recognition result event arguments.
 * @class
 */
var IntentRecognitionEventArgs = /** @class */ (function (_super) {
    __extends(IntentRecognitionEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param result - The result of the intent recognition.
     * @param offset - The offset.
     * @param sessionId - The session id.
     */
    function IntentRecognitionEventArgs(result, offset, sessionId) {
        var _this = _super.call(this, offset, sessionId) || this;
        _this.privResult = result;
        return _this;
    }
    Object.defineProperty(IntentRecognitionEventArgs.prototype, "result", {
        /**
         * Represents the intent recognition result.
         * @member IntentRecognitionEventArgs.prototype.result
         * @function
         * @public
         * @returns {IntentRecognitionResult} Represents the intent recognition result.
         */
        get: function () {
            return this.privResult;
        },
        enumerable: true,
        configurable: true
    });
    return IntentRecognitionEventArgs;
}(Exports_1.RecognitionEventArgs));
exports.IntentRecognitionEventArgs = IntentRecognitionEventArgs;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines result of speech recognition.
 * @class RecognitionResult
 */
var RecognitionResult = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {string} text - The recognized text.
     * @param {number} duration - The duration.
     * @param {number} offset - The offset into the stream.
     * @param {string} errorDetails - Error details, if provided.
     * @param {string} json - Additional Json, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    function RecognitionResult(resultId, reason, text, duration, offset, errorDetails, json, properties) {
        this.privResultId = resultId;
        this.privReason = reason;
        this.privText = text;
        this.privDuration = duration;
        this.privOffset = offset;
        this.privErrorDetails = errorDetails;
        this.privJson = json;
        this.privProperties = properties;
    }
    Object.defineProperty(RecognitionResult.prototype, "resultId", {
        /**
         * Specifies the result identifier.
         * @member RecognitionResult.prototype.resultId
         * @function
         * @public
         * @returns {string} Specifies the result identifier.
         */
        get: function () {
            return this.privResultId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "reason", {
        /**
         * Specifies status of the result.
         * @member RecognitionResult.prototype.reason
         * @function
         * @public
         * @returns {ResultReason} Specifies status of the result.
         */
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "text", {
        /**
         * Presents the recognized text in the result.
         * @member RecognitionResult.prototype.text
         * @function
         * @public
         * @returns {string} Presents the recognized text in the result.
         */
        get: function () {
            return this.privText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "duration", {
        /**
         * Duration of recognized speech in 100 nano second incements.
         * @member RecognitionResult.prototype.duration
         * @function
         * @public
         * @returns {number} Duration of recognized speech in 100 nano second incements.
         */
        get: function () {
            return this.privDuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "offset", {
        /**
         * Offset of recognized speech in 100 nano second incements.
         * @member RecognitionResult.prototype.offset
         * @function
         * @public
         * @returns {number} Offset of recognized speech in 100 nano second incements.
         */
        get: function () {
            return this.privOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "errorDetails", {
        /**
         * In case of an unsuccessful recognition, provides details of the occurred error.
         * @member RecognitionResult.prototype.errorDetails
         * @function
         * @public
         * @returns {string} a brief description of an error.
         */
        get: function () {
            return this.privErrorDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "json", {
        /**
         * A string containing Json serialized recognition result as it was received from the service.
         * @member RecognitionResult.prototype.json
         * @function
         * @private
         * @returns {string} Json serialized representation of the result.
         */
        get: function () {
            return this.privJson;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionResult.prototype, "properties", {
        /**
         *  The set of properties exposed in the result.
         * @member RecognitionResult.prototype.properties
         * @function
         * @public
         * @returns {PropertyCollection} The set of properties exposed in the result.
         */
        get: function () {
            return this.privProperties;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionResult;
}());
exports.RecognitionResult = RecognitionResult;



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Defines result of speech recognition.
 * @class SpeechRecognitionResult
 */
var SpeechRecognitionResult = /** @class */ (function (_super) {
    __extends(SpeechRecognitionResult, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @public
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {string} text - The recognized text.
     * @param {number} duration - The duration.
     * @param {number} offset - The offset into the stream.
     * @param {string} errorDetails - Error details, if provided.
     * @param {string} json - Additional Json, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    function SpeechRecognitionResult(resultId, reason, text, duration, offset, errorDetails, json, properties) {
        return _super.call(this, resultId, reason, text, duration, offset, errorDetails, json, properties) || this;
    }
    return SpeechRecognitionResult;
}(Exports_1.RecognitionResult));
exports.SpeechRecognitionResult = SpeechRecognitionResult;



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Intent recognition result.
 * @class
 */
var IntentRecognitionResult = /** @class */ (function (_super) {
    __extends(IntentRecognitionResult, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param intentId - The intent id.
     * @param resultId - The result id.
     * @param reason - The reason.
     * @param text - The recognized text.
     * @param duration - The duration.
     * @param offset - The offset into the stream.
     * @param errorDetails - Error details, if provided.
     * @param json - Additional Json, if provided.
     * @param properties - Additional properties, if provided.
     */
    function IntentRecognitionResult(intentId, resultId, reason, text, duration, offset, errorDetails, json, properties) {
        var _this = _super.call(this, resultId, reason, text, duration, offset, errorDetails, json, properties) || this;
        _this.privIntentId = intentId;
        return _this;
    }
    Object.defineProperty(IntentRecognitionResult.prototype, "intentId", {
        /**
         * A String that represents the intent identifier being recognized.
         * @member IntentRecognitionResult.prototype.intentId
         * @function
         * @public
         * @returns {string} A String that represents the intent identifier being recognized.
         */
        get: function () {
            return this.privIntentId;
        },
        enumerable: true,
        configurable: true
    });
    return IntentRecognitionResult;
}(Exports_1.SpeechRecognitionResult));
exports.IntentRecognitionResult = IntentRecognitionResult;



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contracts_1 = __webpack_require__(4);
/**
 * Language understanding model
 * @class LanguageUnderstandingModel
 */
var LanguageUnderstandingModel = /** @class */ (function () {
    /**
     * Creates and initializes a new instance
     * @constructor
     */
    function LanguageUnderstandingModel() {
    }
    /**
     * Creates an language understanding model using the specified endpoint.
     * @member LanguageUnderstandingModel.fromEndpoint
     * @function
     * @public
     * @param {URL} uri - A String that represents the endpoint of the language understanding model.
     * @returns {LanguageUnderstandingModel} The language understanding model being created.
     */
    LanguageUnderstandingModel.fromEndpoint = function (uri) {
        Contracts_1.Contracts.throwIfNull(uri, "uri");
        Contracts_1.Contracts.throwIfNullOrWhitespace(uri.hostname, "uri");
        var langModelImp = new LanguageUnderstandingModelImpl();
        // Need to extract the app ID from the URL.
        // URL is in the format: https://<region>.api.cognitive.microsoft.com/luis/v2.0/apps/<Guid>?subscription-key=<key>&timezoneOffset=-360
        // Start tearing the string apart.
        // region can be extracted from the host name.
        var firstDot = uri.host.indexOf(".");
        if (-1 === firstDot) {
            throw new Error("Could not determine region from endpoint");
        }
        langModelImp.region = uri.host.substr(0, firstDot);
        // Now the app ID.
        var lastSegment = uri.pathname.lastIndexOf("/") + 1;
        if (-1 === lastSegment) {
            throw new Error("Could not determine appId from endpoint");
        }
        langModelImp.appId = uri.pathname.substr(lastSegment);
        // And finally the key.
        langModelImp.subscriptionKey = uri.searchParams.get("subscription-key");
        if (undefined === langModelImp.subscriptionKey) {
            throw new Error("Could not determine subscription key from endpoint");
        }
        return langModelImp;
    };
    /**
     * Creates an language understanding model using the application id of Language Understanding service.
     * @member LanguageUnderstandingModel.fromAppId
     * @function
     * @public
     * @param {string} appId - A String that represents the application id of Language Understanding service.
     * @returns {LanguageUnderstandingModel} The language understanding model being created.
     */
    LanguageUnderstandingModel.fromAppId = function (appId) {
        Contracts_1.Contracts.throwIfNullOrWhitespace(appId, "appId");
        var langModelImp = new LanguageUnderstandingModelImpl();
        langModelImp.appId = appId;
        return langModelImp;
    };
    /**
     * Creates a language understanding model using hostname, subscription key and application
     * id of Language Understanding service.
     * @member LanguageUnderstandingModel.fromSubscription
     * @function
     * @public
     * @param {string} subscriptionKey - A String that represents the subscription key of
     *        Language Understanding service.
     * @param {string} appId - A String that represents the application id of Language
     *        Understanding service.
     * @param {LanguageUnderstandingModel} region - A String that represents the region
     *        of the Language Understanding service (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {LanguageUnderstandingModel} The language understanding model being created.
     */
    LanguageUnderstandingModel.fromSubscription = function (subscriptionKey, appId, region) {
        Contracts_1.Contracts.throwIfNullOrWhitespace(subscriptionKey, "subscriptionKey");
        Contracts_1.Contracts.throwIfNullOrWhitespace(appId, "appId");
        Contracts_1.Contracts.throwIfNullOrWhitespace(region, "region");
        var langModelImp = new LanguageUnderstandingModelImpl();
        langModelImp.appId = appId;
        langModelImp.region = region;
        langModelImp.subscriptionKey = subscriptionKey;
        return langModelImp;
    };
    return LanguageUnderstandingModel;
}());
exports.LanguageUnderstandingModel = LanguageUnderstandingModel;
/**
 * @private
 * @class LanguageUnderstandingModelImpl
 */
// tslint:disable-next-line:max-classes-per-file
var LanguageUnderstandingModelImpl = /** @class */ (function (_super) {
    __extends(LanguageUnderstandingModelImpl, _super);
    function LanguageUnderstandingModelImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LanguageUnderstandingModelImpl;
}(LanguageUnderstandingModel));
exports.LanguageUnderstandingModelImpl = LanguageUnderstandingModelImpl;



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Defines contents of speech recognizing/recognized event.
 * @class SpeechRecognitionEventArgs
 */
var SpeechRecognitionEventArgs = /** @class */ (function (_super) {
    __extends(SpeechRecognitionEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {SpeechRecognitionResult} result - The speech recognition result.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    function SpeechRecognitionEventArgs(result, offset, sessionId) {
        var _this = _super.call(this, offset, sessionId) || this;
        _this.privResult = result;
        return _this;
    }
    Object.defineProperty(SpeechRecognitionEventArgs.prototype, "result", {
        /**
         * Specifies the recognition result.
         * @member SpeechRecognitionEventArgs.prototype.result
         * @function
         * @public
         * @returns {SpeechRecognitionResult} the recognition result.
         */
        get: function () {
            return this.privResult;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechRecognitionEventArgs;
}(Exports_1.RecognitionEventArgs));
exports.SpeechRecognitionEventArgs = SpeechRecognitionEventArgs;



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Defines content of a RecognitionErrorEvent.
 * @class SpeechRecognitionCanceledEventArgs
 */
var SpeechRecognitionCanceledEventArgs = /** @class */ (function (_super) {
    __extends(SpeechRecognitionCanceledEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {CancellationReason} reason - The cancellation reason.
     * @param {string} errorDetails - Error details, if provided.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    function SpeechRecognitionCanceledEventArgs(reason, errorDetails, errorCode, offset, sessionId) {
        var _this = _super.call(this, offset, sessionId) || this;
        _this.privReason = reason;
        _this.privErrorDetails = errorDetails;
        _this.privErrorCode = errorCode;
        return _this;
    }
    Object.defineProperty(SpeechRecognitionCanceledEventArgs.prototype, "reason", {
        /**
         * The reason the recognition was canceled.
         * @member SpeechRecognitionCanceledEventArgs.prototype.reason
         * @function
         * @public
         * @returns {CancellationReason} Specifies the reason canceled.
         */
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognitionCanceledEventArgs.prototype, "errorCode", {
        /**
         * The error code in case of an unsuccessful recognition.
         * Added in version 1.1.0.
         * @return An error code that represents the error reason.
         */
        get: function () {
            return this.privErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognitionCanceledEventArgs.prototype, "errorDetails", {
        /**
         * In case of an unsuccessful recognition, provides details of the occurred error.
         * @member SpeechRecognitionCanceledEventArgs.prototype.errorDetails
         * @function
         * @public
         * @returns {string} A String that represents the error details.
         */
        get: function () {
            return this.privErrorDetails;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechRecognitionCanceledEventArgs;
}(Exports_1.RecognitionEventArgs));
exports.SpeechRecognitionCanceledEventArgs = SpeechRecognitionCanceledEventArgs;



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Translation text result event arguments.
 * @class TranslationRecognitionEventArgs
 */
var TranslationRecognitionEventArgs = /** @class */ (function (_super) {
    __extends(TranslationRecognitionEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {TranslationRecognitionResult} result - The translation recognition result.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    function TranslationRecognitionEventArgs(result, offset, sessionId) {
        var _this = _super.call(this, offset, sessionId) || this;
        _this.privResult = result;
        return _this;
    }
    Object.defineProperty(TranslationRecognitionEventArgs.prototype, "result", {
        /**
         * Specifies the recognition result.
         * @member TranslationRecognitionEventArgs.prototype.result
         * @function
         * @public
         * @returns {TranslationRecognitionResult} the recognition result.
         */
        get: function () {
            return this.privResult;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationRecognitionEventArgs;
}(Exports_1.RecognitionEventArgs));
exports.TranslationRecognitionEventArgs = TranslationRecognitionEventArgs;



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Translation Synthesis event arguments
 * @class TranslationSynthesisEventArgs
 */
var TranslationSynthesisEventArgs = /** @class */ (function (_super) {
    __extends(TranslationSynthesisEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {TranslationSynthesisResult} result - The translation synthesis result.
     * @param {string} sessionId - The session id.
     */
    function TranslationSynthesisEventArgs(result, sessionId) {
        var _this = _super.call(this, sessionId) || this;
        _this.privResult = result;
        return _this;
    }
    Object.defineProperty(TranslationSynthesisEventArgs.prototype, "result", {
        /**
         * Specifies the translation synthesis result.
         * @member TranslationSynthesisEventArgs.prototype.result
         * @function
         * @public
         * @returns {TranslationSynthesisResult} Specifies the translation synthesis result.
         */
        get: function () {
            return this.privResult;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationSynthesisEventArgs;
}(Exports_1.SessionEventArgs));
exports.TranslationSynthesisEventArgs = TranslationSynthesisEventArgs;



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Translation text result.
 * @class TranslationRecognitionResult
 */
var TranslationRecognitionResult = /** @class */ (function (_super) {
    __extends(TranslationRecognitionResult, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {Translations} translations - The translations.
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {string} text - The recognized text.
     * @param {number} duration - The duration.
     * @param {number} offset - The offset into the stream.
     * @param {string} errorDetails - Error details, if provided.
     * @param {string} json - Additional Json, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    function TranslationRecognitionResult(translations, resultId, reason, text, duration, offset, errorDetails, json, properties) {
        var _this = _super.call(this, resultId, reason, text, duration, offset, errorDetails, json, properties) || this;
        _this.privTranslations = translations;
        return _this;
    }
    Object.defineProperty(TranslationRecognitionResult.prototype, "translations", {
        /**
         * Presents the translation results. Each item in the dictionary represents
         * a translation result in one of target languages, where the key is the name
         * of the target language, in BCP-47 format, and the value is the translation
         * text in the specified language.
         * @member TranslationRecognitionResult.prototype.translations
         * @function
         * @public
         * @returns {Translations} the current translation map that holds all translations requested.
         */
        get: function () {
            return this.privTranslations;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationRecognitionResult;
}(Exports_1.SpeechRecognitionResult));
exports.TranslationRecognitionResult = TranslationRecognitionResult;



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines translation synthesis result, i.e. the voice output of the translated
 * text in the target language.
 * @class TranslationSynthesisResult
 */
var TranslationSynthesisResult = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {ResultReason} reason - The synthesis reason.
     * @param {ArrayBuffer} audio - The audio data.
     */
    function TranslationSynthesisResult(reason, audio) {
        this.privReason = reason;
        this.privAudio = audio;
    }
    Object.defineProperty(TranslationSynthesisResult.prototype, "audio", {
        /**
         * Translated text in the target language.
         * @member TranslationSynthesisResult.prototype.audio
         * @function
         * @public
         * @returns {ArrayBuffer} Translated audio in the target language.
         */
        get: function () {
            return this.privAudio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationSynthesisResult.prototype, "reason", {
        /**
         * The synthesis status.
         * @member TranslationSynthesisResult.prototype.reason
         * @function
         * @public
         * @returns {ResultReason} The synthesis status.
         */
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationSynthesisResult;
}());
exports.TranslationSynthesisResult = TranslationSynthesisResult;



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the possible reasons a recognition result might be generated.
 * @class ResultReason
 */
var ResultReason;
(function (ResultReason) {
    /**
     * Indicates speech could not be recognized. More details
     * can be found in the NoMatchDetails object.
     * @member ResultReason.NoMatch
     */
    ResultReason[ResultReason["NoMatch"] = 0] = "NoMatch";
    /**
     * Indicates that the recognition was canceled. More details
     * can be found using the CancellationDetails object.
     * @member ResultReason.Canceled
     */
    ResultReason[ResultReason["Canceled"] = 1] = "Canceled";
    /**
     * Indicates the speech result contains hypothesis text.
     * @member ResultReason.RecognizedSpeech
     */
    ResultReason[ResultReason["RecognizingSpeech"] = 2] = "RecognizingSpeech";
    /**
     * Indicates the speech result contains final text that has been recognized.
     * Speech Recognition is now complete for this phrase.
     * @member ResultReason.RecognizedSpeech
     */
    ResultReason[ResultReason["RecognizedSpeech"] = 3] = "RecognizedSpeech";
    /**
     * Indicates the intent result contains hypothesis text and intent.
     * @member ResultReason.RecognizingIntent
     */
    ResultReason[ResultReason["RecognizingIntent"] = 4] = "RecognizingIntent";
    /**
     * Indicates the intent result contains final text and intent.
     * Speech Recognition and Intent determination are now complete for this phrase.
     * @member ResultReason.RecognizedIntent
     */
    ResultReason[ResultReason["RecognizedIntent"] = 5] = "RecognizedIntent";
    /**
     * Indicates the translation result contains hypothesis text and its translation(s).
     * @member ResultReason.TranslatingSpeech
     */
    ResultReason[ResultReason["TranslatingSpeech"] = 6] = "TranslatingSpeech";
    /**
     * Indicates the translation result contains final text and corresponding translation(s).
     * Speech Recognition and Translation are now complete for this phrase.
     * @member ResultReason.TranslatedSpeech
     */
    ResultReason[ResultReason["TranslatedSpeech"] = 7] = "TranslatedSpeech";
    /**
     * Indicates the synthesized audio result contains a non-zero amount of audio data
     * @member ResultReason.SynthesizingAudio
     */
    ResultReason[ResultReason["SynthesizingAudio"] = 8] = "SynthesizingAudio";
    /**
     * Indicates the synthesized audio is now complete for this phrase.
     * @member ResultReason.SynthesizingAudioCompleted
     */
    ResultReason[ResultReason["SynthesizingAudioCompleted"] = 9] = "SynthesizingAudioCompleted";
})(ResultReason = exports.ResultReason || (exports.ResultReason = {}));



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Contracts_1 = __webpack_require__(4);
var Exports_2 = __webpack_require__(0);
/**
 * Speech configuration.
 * @class SpeechConfig
 */
var SpeechConfig = /** @class */ (function () {
    /**
     * Creates and initializes an instance.
     * @constructor
     */
    function SpeechConfig() {
    }
    /**
     * Static instance of SpeechConfig returned by passing subscriptionKey and service region.
     * Note: Please use your LanguageUnderstanding subscription key in case you want to use the Intent recognizer.
     * @member SpeechConfig.fromSubscription
     * @function
     * @public
     * @param {string} subscriptionKey - The subscription key.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechConfig} The speech factory
     */
    SpeechConfig.fromSubscription = function (subscriptionKey, region) {
        Contracts_1.Contracts.throwIfNullOrWhitespace(subscriptionKey, "subscriptionKey");
        Contracts_1.Contracts.throwIfNullOrWhitespace(region, "region");
        var speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Region, region);
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_IntentRegion, region);
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        return speechImpl;
    };
    /**
     * Creates an instance of the speech config with specified endpoint and subscription key.
     * This method is intended only for users who use a non-standard service endpoint or parameters.
     * Note: Please use your LanguageUnderstanding subscription key in case you want to use the Intent recognizer.
     * Note: The query parameters specified in the endpoint URL are not changed, even if they are set by any other APIs.
     * For example, if language is defined in the uri as query parameter "language=de-DE", and also set by
     *              SpeechConfig.speechRecognitionLanguage = "en-US", the language setting in uri takes precedence,
     *              and the effective language is "de-DE". Only the parameters that are not specified in the
     *              endpoint URL can be set by other APIs.
     * Note: To use authorization token with fromEndpoint, pass an empty string to the subscriptionKey in the
     *       fromEndpoint method, and then set authorizationToken="token" on the created SpeechConfig instance to
     *       use the authorization token.
     * @member SpeechConfig.fromEndpoint
     * @function
     * @public
     * @param {URL} endpoint - The service endpoint to connect to.
     * @param {string} subscriptionKey - The subscription key.
     * @returns {SpeechConfig} A speech factory instance.
     */
    SpeechConfig.fromEndpoint = function (endpoint, subscriptionKey) {
        Contracts_1.Contracts.throwIfNull(endpoint, "endpoint");
        Contracts_1.Contracts.throwIfNull(subscriptionKey, "subscriptionKey");
        var speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Endpoint, endpoint.href);
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        return speechImpl;
    };
    /**
     * Creates an instance of the speech factory with specified initial authorization token and region.
     * Note: The caller needs to ensure that the authorization token is valid. Before the authorization token
     *       expires, the caller needs to refresh it by calling this setter with a new valid token.
     * Note: Please use a token derived from your LanguageUnderstanding subscription key in case you want
     *       to use the Intent recognizer. As configuration values are copied when creating a new recognizer,
     *       the new token value will not apply to recognizers that have already been created. For recognizers
     *       that have been created before, you need to set authorization token of the corresponding recognizer
     *       to refresh the token. Otherwise, the recognizers will encounter errors during recognition.
     * @member SpeechConfig.fromAuthorizationToken
     * @function
     * @public
     * @param {string} authorizationToken - The initial authorization token.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechConfig} A speech factory instance.
     */
    SpeechConfig.fromAuthorizationToken = function (authorizationToken, region) {
        Contracts_1.Contracts.throwIfNull(authorizationToken, "authorizationToken");
        Contracts_1.Contracts.throwIfNullOrWhitespace(region, "region");
        var speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Region, region);
        speechImpl.setProperty(Exports_2.PropertyId.SpeechServiceConnection_IntentRegion, region);
        speechImpl.authorizationToken = authorizationToken;
        return speechImpl;
    };
    /**
     * Closes the configuration.
     * @member SpeechConfig.prototype.close
     * @function
     * @public
     */
    /* tslint:disable:no-empty */
    SpeechConfig.prototype.close = function () { };
    return SpeechConfig;
}());
exports.SpeechConfig = SpeechConfig;
/**
 * @private
 * @class SpeechConfigImpl
 */
// tslint:disable-next-line:max-classes-per-file
var SpeechConfigImpl = /** @class */ (function (_super) {
    __extends(SpeechConfigImpl, _super);
    function SpeechConfigImpl() {
        var _this = _super.call(this) || this;
        _this.privProperties = new Exports_2.PropertyCollection();
        _this.speechRecognitionLanguage = "en-US"; // Should we have a default?
        _this.outputFormat = Exports_2.OutputFormat.Simple;
        return _this;
    }
    Object.defineProperty(SpeechConfigImpl.prototype, "properties", {
        get: function () {
            return this.privProperties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "endPoint", {
        get: function () {
            return new URL(this.privProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Endpoint));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "subscriptionKey", {
        get: function () {
            return this.privProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "region", {
        get: function () {
            return this.privProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Region);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "authorizationToken", {
        get: function () {
            return this.privProperties.getProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token);
        },
        set: function (value) {
            this.privProperties.setProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "speechRecognitionLanguage", {
        get: function () {
            return this.privProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage);
        },
        set: function (value) {
            this.privProperties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "outputFormat", {
        get: function () {
            return Exports_2.OutputFormat[this.privProperties.getProperty(Exports_1.OutputFormatPropertyName, undefined)];
        },
        set: function (value) {
            this.privProperties.setProperty(Exports_1.OutputFormatPropertyName, Exports_2.OutputFormat[value]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConfigImpl.prototype, "endpointId", {
        get: function () {
            return this.privProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_EndpointId);
        },
        set: function (value) {
            this.privProperties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_EndpointId, value);
        },
        enumerable: true,
        configurable: true
    });
    SpeechConfigImpl.prototype.setProperty = function (name, value) {
        Contracts_1.Contracts.throwIfNull(value, "value");
        this.privProperties.setProperty(name, value);
    };
    SpeechConfigImpl.prototype.getProperty = function (name, def) {
        return this.privProperties.getProperty(name, def);
    };
    SpeechConfigImpl.prototype.setProxy = function (proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyHostName], proxyHostName);
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyPort], proxyPort);
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyUserName], proxyUserName);
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyPassword], proxyPassword);
    };
    SpeechConfigImpl.prototype.clone = function () {
        var ret = new SpeechConfigImpl();
        ret.privProperties = this.privProperties.clone();
        return ret;
    };
    return SpeechConfigImpl;
}(SpeechConfig));
exports.SpeechConfigImpl = SpeechConfigImpl;



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Contracts_1 = __webpack_require__(4);
var Exports_2 = __webpack_require__(0);
/**
 * Speech translation configuration.
 * @class SpeechTranslationConfig
 */
var SpeechTranslationConfig = /** @class */ (function (_super) {
    __extends(SpeechTranslationConfig, _super);
    /**
     * Creates an instance of recognizer config.
     */
    function SpeechTranslationConfig() {
        return _super.call(this) || this;
    }
    /**
     * Static instance of SpeechTranslationConfig returned by passing a subscription key and service region.
     * @member SpeechTranslationConfig.fromSubscription
     * @function
     * @public
     * @param {string} subscriptionKey - The subscription key.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechTranslationConfig} The speech translation config.
     */
    SpeechTranslationConfig.fromSubscription = function (subscriptionKey, region) {
        Contracts_1.Contracts.throwIfNullOrWhitespace(subscriptionKey, "subscriptionKey");
        Contracts_1.Contracts.throwIfNullOrWhitespace(region, "region");
        var ret = new SpeechTranslationConfigImpl();
        ret.properties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        ret.properties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Region, region);
        return ret;
    };
    /**
     * Static instance of SpeechTranslationConfig returned by passing authorization token and service region.
     * Note: The caller needs to ensure that the authorization token is valid. Before the authorization token
     *       expires, the caller needs to refresh it by setting the property authorizationToken with a new
     *       valid token. Otherwise, all the recognizers created by this SpeechTranslationConfig instance
     *       will encounter errors during recognition.
     * As configuration values are copied when creating a new recognizer, the new token value will not apply
     * to recognizers that have already been created.
     * For recognizers that have been created before, you need to set authorization token of the corresponding recognizer
     * to refresh the token. Otherwise, the recognizers will encounter errors during recognition.
     * @member SpeechTranslationConfig.fromAuthorizationToken
     * @function
     * @public
     * @param {string} authorizationToken - The authorization token.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechTranslationConfig} The speech translation config.
     */
    SpeechTranslationConfig.fromAuthorizationToken = function (authorizationToken, region) {
        Contracts_1.Contracts.throwIfNullOrWhitespace(authorizationToken, "authorizationToken");
        Contracts_1.Contracts.throwIfNullOrWhitespace(region, "region");
        var ret = new SpeechTranslationConfigImpl();
        ret.properties.setProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token, authorizationToken);
        ret.properties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Region, region);
        return ret;
    };
    /**
     * Creates an instance of the speech translation config with specified endpoint and subscription key.
     * This method is intended only for users who use a non-standard service endpoint or paramters.
     * Note: The query properties specified in the endpoint URL are not changed, even if they are
     *       set by any other APIs. For example, if language is defined in the uri as query parameter
     *       "language=de-DE", and also set by the speechRecognitionLanguage property, the language
     *       setting in uri takes precedence, and the effective language is "de-DE".
     * Only the properties that are not specified in the endpoint URL can be set by other APIs.
     * Note: To use authorization token with fromEndpoint, pass an empty string to the subscriptionKey in the
     *       fromEndpoint method, and then set authorizationToken="token" on the created SpeechConfig instance to
     *       use the authorization token.
     * @member SpeechTranslationConfig.fromEndpoint
     * @function
     * @public
     * @param {URL} endpoint - The service endpoint to connect to.
     * @param {string} subscriptionKey - The subscription key.
     * @returns {SpeechTranslationConfig} A speech config instance.
     */
    SpeechTranslationConfig.fromEndpoint = function (endpoint, subscriptionKey) {
        Contracts_1.Contracts.throwIfNull(endpoint, "endpoint");
        Contracts_1.Contracts.throwIfNull(subscriptionKey, "subscriptionKey");
        var ret = new SpeechTranslationConfigImpl();
        ret.properties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Endpoint, endpoint.href);
        ret.properties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        return ret;
    };
    return SpeechTranslationConfig;
}(Exports_2.SpeechConfig));
exports.SpeechTranslationConfig = SpeechTranslationConfig;
/**
 * @private
 * @class SpeechTranslationConfigImpl
 */
// tslint:disable-next-line:max-classes-per-file
var SpeechTranslationConfigImpl = /** @class */ (function (_super) {
    __extends(SpeechTranslationConfigImpl, _super);
    function SpeechTranslationConfigImpl() {
        var _this = _super.call(this) || this;
        _this.privSpeechProperties = new Exports_2.PropertyCollection();
        _this.outputFormat = Exports_2.OutputFormat.Simple;
        return _this;
    }
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "authorizationToken", {
        /**
         * Gets/Sets the authorization token.
         * If this is set, subscription key is ignored.
         * User needs to make sure the provided authorization token is valid and not expired.
         * @member SpeechTranslationConfigImpl.prototype.authorizationToken
         * @function
         * @public
         * @param {string} value - The authorization token.
         */
        set: function (value) {
            Contracts_1.Contracts.throwIfNullOrWhitespace(value, "value");
            this.privSpeechProperties.setProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "speechRecognitionLanguage", {
        /**
         * Gets/Sets the speech recognition language.
         * @member SpeechTranslationConfigImpl.prototype.speechRecognitionLanguage
         * @function
         * @public
         * @param {string} value - The authorization token.
         */
        set: function (value) {
            Contracts_1.Contracts.throwIfNullOrWhitespace(value, "value");
            this.privSpeechProperties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "subscriptionKey", {
        /**
         * @member SpeechTranslationConfigImpl.prototype.subscriptionKey
         * @function
         * @public
         */
        get: function () {
            return this.privSpeechProperties.getProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_Key]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "outputFormat", {
        /**
         * Gets the output format
         * @member SpeechTranslationConfigImpl.prototype.outputFormat
         * @function
         * @public
         */
        get: function () {
            return Exports_2.OutputFormat[this.privSpeechProperties.getProperty(Exports_1.OutputFormatPropertyName, undefined)];
        },
        /**
         * Gets/Sets the output format
         * @member SpeechTranslationConfigImpl.prototype.outputFormat
         * @function
         * @public
         */
        set: function (value) {
            this.privSpeechProperties.setProperty(Exports_1.OutputFormatPropertyName, Exports_2.OutputFormat[value]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "endpointId", {
        /**
         * Gets the endpoint id.
         * @member SpeechTranslationConfigImpl.prototype.endpointId
         * @function
         * @public
         */
        get: function () {
            return this.privSpeechProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_EndpointId);
        },
        /**
         * Gets/Sets the endpoint id.
         * @member SpeechTranslationConfigImpl.prototype.endpointId
         * @function
         * @public
         */
        set: function (value) {
            this.privSpeechProperties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_Endpoint, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a (text) target language to translate into.
     * @member SpeechTranslationConfigImpl.prototype.addTargetLanguage
     * @function
     * @public
     * @param {string} value - The language such as de-DE
     */
    SpeechTranslationConfigImpl.prototype.addTargetLanguage = function (value) {
        Contracts_1.Contracts.throwIfNullOrWhitespace(value, "value");
        var languages = this.targetLanguages;
        languages.push(value);
        this.privSpeechProperties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages, languages.join(","));
    };
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "targetLanguages", {
        /**
         * Gets the (text) target language to translate into.
         * @member SpeechTranslationConfigImpl.prototype.targetLanguages
         * @function
         * @public
         * @param {string} value - The language such as de-DE
         */
        get: function () {
            if (this.privSpeechProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages, undefined) !== undefined) {
                return this.privSpeechProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",");
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "voiceName", {
        /**
         * Gets the voice name.
         * @member SpeechTranslationConfigImpl.prototype.voiceName
         * @function
         * @public
         */
        get: function () {
            return this.getProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice]);
        },
        /**
         * Gets/Sets the voice of the translated language, enable voice synthesis output.
         * @member SpeechTranslationConfigImpl.prototype.voiceName
         * @function
         * @public
         * @param {string} value - The name of the voice.
         */
        set: function (value) {
            Contracts_1.Contracts.throwIfNullOrWhitespace(value, "value");
            this.privSpeechProperties.setProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "region", {
        /**
         * Provides the region.
         * @member SpeechTranslationConfigImpl.prototype.region
         * @function
         * @public
         * @returns {string} The region.
         */
        get: function () {
            return this.privSpeechProperties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Region);
        },
        enumerable: true,
        configurable: true
    });
    SpeechTranslationConfigImpl.prototype.setProxy = function (proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyHostName], proxyHostName);
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyPort], proxyPort);
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyUserName], proxyUserName);
        this.setProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_ProxyPassword], proxyPassword);
    };
    /**
     * Gets an arbitrary property value.
     * @member SpeechTranslationConfigImpl.prototype.getProperty
     * @function
     * @public
     * @param {string} name - The name of the property.
     * @param {string} def - The default value of the property in case it is not set.
     * @returns {string} The value of the property.
     */
    SpeechTranslationConfigImpl.prototype.getProperty = function (name, def) {
        return this.privSpeechProperties.getProperty(name, def);
    };
    /**
     * Gets/Sets an arbitrary property value.
     * @member SpeechTranslationConfigImpl.prototype.setProperty
     * @function
     * @public
     * @param {string} name - The name of the property.
     * @param {string} value - The value of the property.
     */
    SpeechTranslationConfigImpl.prototype.setProperty = function (name, value) {
        this.privSpeechProperties.setProperty(name, value);
    };
    Object.defineProperty(SpeechTranslationConfigImpl.prototype, "properties", {
        /**
         * Provides access to custom properties.
         * @member SpeechTranslationConfigImpl.prototype.properties
         * @function
         * @public
         * @returns {PropertyCollection} The properties.
         */
        get: function () {
            return this.privSpeechProperties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose of associated resources.
     * @member SpeechTranslationConfigImpl.prototype.close
     * @function
     * @public
     */
    SpeechTranslationConfigImpl.prototype.close = function () {
        return;
    };
    return SpeechTranslationConfigImpl;
}(SpeechTranslationConfig));
exports.SpeechTranslationConfigImpl = SpeechTranslationConfigImpl;



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Represents collection of properties and their values.
 * @class PropertyCollection
 */
var PropertyCollection = /** @class */ (function () {
    function PropertyCollection() {
        this.privKeys = [];
        this.privValues = [];
    }
    /**
     * Returns the property value in type String. The parameter must have the same type as String.
     * Currently only String, int and bool are allowed.
     * If the name is not available, the specified defaultValue is returned.
     * @member PropertyCollection.prototype.getProperty
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} def - The default value which is returned if the parameter
     *        is not available in the collection.
     * @returns {string} value of the parameter.
     */
    PropertyCollection.prototype.getProperty = function (key, def) {
        var keyToUse;
        if (typeof key === "string") {
            keyToUse = key;
        }
        else {
            keyToUse = Exports_1.PropertyId[key];
        }
        for (var n = 0; n < this.privKeys.length; n++) {
            if (this.privKeys[n] === keyToUse) {
                return this.privValues[n];
            }
        }
        return def;
    };
    /**
     * Sets the String value of the parameter specified by name.
     * @member PropertyCollection.prototype.setProperty
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} value - The value of the parameter.
     */
    PropertyCollection.prototype.setProperty = function (key, value) {
        var keyToUse;
        if (typeof key === "string") {
            keyToUse = key;
        }
        else {
            keyToUse = Exports_1.PropertyId[key];
        }
        for (var n = 0; n < this.privKeys.length; n++) {
            if (this.privKeys[n] === keyToUse) {
                this.privValues[n] = value;
                return;
            }
        }
        this.privKeys.push(keyToUse);
        this.privValues.push(value);
    };
    /**
     * Clones the collection.
     * @member PropertyCollection.prototype.clone
     * @function
     * @public
     * @returns {PropertyCollection} A copy of the collection.
     */
    PropertyCollection.prototype.clone = function () {
        var clonedMap = new PropertyCollection();
        for (var n = 0; n < this.privKeys.length; n++) {
            clonedMap.privKeys.push(this.privKeys[n]);
            clonedMap.privValues.push(this.privValues[n]);
        }
        return clonedMap;
    };
    return PropertyCollection;
}());
exports.PropertyCollection = PropertyCollection;



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines speech property ids.
 * @class PropertyId
 */
var PropertyId;
(function (PropertyId) {
    /**
     * The Cognitive Services Speech Service subscription Key. If you are using an intent recognizer, you need to specify
     * to specify the LUIS endpoint key for your particular LUIS app. Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.fromSubscription]].
     * @member PropertyId.SpeechServiceConnection_Key
     */
    PropertyId[PropertyId["SpeechServiceConnection_Key"] = 0] = "SpeechServiceConnection_Key";
    /**
     * The Cognitive Services Speech Service endpoint (url). Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.fromEndpoint]].
     * NOTE: This endpoint is not the same as the endpoint used to obtain an access token.
     * @member PropertyId.SpeechServiceConnection_Endpoint
     */
    PropertyId[PropertyId["SpeechServiceConnection_Endpoint"] = 1] = "SpeechServiceConnection_Endpoint";
    /**
     * The Cognitive Services Speech Service region. Under normal circumstances, you shouldn't have to
     * use this property directly.
     * Instead, use [[SpeechConfig.fromSubscription]], [[SpeechConfig.fromEndpoint]], [[SpeechConfig.fromAuthorizationToken]].
     * @member PropertyId.SpeechServiceConnection_Region
     */
    PropertyId[PropertyId["SpeechServiceConnection_Region"] = 2] = "SpeechServiceConnection_Region";
    /**
     * The Cognitive Services Speech Service authorization token (aka access token). Under normal circumstances,
     * you shouldn't have to use this property directly.
     * Instead, use [[SpeechConfig.fromAuthorizationToken]],
     * [[SpeechRecognizer.authorizationToken]], [[IntentRecognizer.authorizationToken]], [[TranslationRecognizer.authorizationToken]].
     * @member PropertyId.SpeechServiceAuthorization_Token
     */
    PropertyId[PropertyId["SpeechServiceAuthorization_Token"] = 3] = "SpeechServiceAuthorization_Token";
    /**
     * The Cognitive Services Speech Service authorization type. Currently unused.
     * @member PropertyId.SpeechServiceAuthorization_Type
     */
    PropertyId[PropertyId["SpeechServiceAuthorization_Type"] = 4] = "SpeechServiceAuthorization_Type";
    /**
     * The Cognitive Services Speech Service endpoint id. Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.endpointId]].
     * NOTE: The endpoint id is available in the Speech Portal, listed under Endpoint Details.
     * @member PropertyId.SpeechServiceConnection_EndpointId
     */
    PropertyId[PropertyId["SpeechServiceConnection_EndpointId"] = 5] = "SpeechServiceConnection_EndpointId";
    /**
     * The list of comma separated languages (BCP-47 format) used as target translation languages. Under normal circumstances,
     * you shouldn't have to use this property directly.
     * Instead use [[SpeechTranslationConfig.addTargetLanguage]],
     * [[SpeechTranslationConfig.targetLanguages]], [[TranslationRecognizer.targetLanguages]].
     * @member PropertyId.SpeechServiceConnection_TranslationToLanguages
     */
    PropertyId[PropertyId["SpeechServiceConnection_TranslationToLanguages"] = 6] = "SpeechServiceConnection_TranslationToLanguages";
    /**
     * The name of the Cognitive Service Text to Speech Service Voice. Under normal circumstances, you shouldn't have to use this
     * property directly.
     * Instead, use [[SpeechTranslationConfig.voiceName]].
     * NOTE: Valid voice names can be found <a href="https://aka.ms/csspeech/voicenames">here</a>.
     * @member PropertyId.SpeechServiceConnection_TranslationVoice
     */
    PropertyId[PropertyId["SpeechServiceConnection_TranslationVoice"] = 7] = "SpeechServiceConnection_TranslationVoice";
    /**
     * Translation features.
     * @member PropertyId.SpeechServiceConnection_TranslationFeatures
     */
    PropertyId[PropertyId["SpeechServiceConnection_TranslationFeatures"] = 8] = "SpeechServiceConnection_TranslationFeatures";
    /**
     * The Language Understanding Service Region. Under normal circumstances, you shouldn't have to use this property directly.
     * Instead, use [[LanguageUnderstandingModel]].
     * @member PropertyId.SpeechServiceConnection_IntentRegion
     */
    PropertyId[PropertyId["SpeechServiceConnection_IntentRegion"] = 9] = "SpeechServiceConnection_IntentRegion";
    /**
     * The host name of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyHostName"] = 10] = "SpeechServiceConnection_ProxyHostName";
    /**
     * The port of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyPort"] = 11] = "SpeechServiceConnection_ProxyPort";
    /**
     * The user name of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyUserName"] = 12] = "SpeechServiceConnection_ProxyUserName";
    /**
     * The password of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyPassword"] = 13] = "SpeechServiceConnection_ProxyPassword";
    /**
     * The Cognitive Services Speech Service recognition Mode. Can be "INTERACTIVE", "CONVERSATION", "DICTATION".
     * This property is intended to be read-only. The SDK is using it internally.
     * @member PropertyId.SpeechServiceConnection_RecoMode
     */
    PropertyId[PropertyId["SpeechServiceConnection_RecoMode"] = 14] = "SpeechServiceConnection_RecoMode";
    /**
     * The spoken language to be recognized (in BCP-47 format). Under normal circumstances, you shouldn't have to use this property
     * directly.
     * Instead, use [[SpeechConfig.speechRecognitionLanguage]].
     * @member PropertyId.SpeechServiceConnection_RecoLanguage
     */
    PropertyId[PropertyId["SpeechServiceConnection_RecoLanguage"] = 15] = "SpeechServiceConnection_RecoLanguage";
    /**
     * The session id. This id is a universally unique identifier (aka UUID) representing a specific binding of an audio input stream
     * and the underlying speech recognition instance to which it is bound. Under normal circumstances, you shouldn't have to use this
     * property directly.
     * Instead use [[SessionEventArgs.sessionId]].
     * @member PropertyId.Speech_SessionId
     */
    PropertyId[PropertyId["Speech_SessionId"] = 16] = "Speech_SessionId";
    /**
     * The requested Cognitive Services Speech Service response output format (simple or detailed). Under normal circumstances, you shouldn't have
     * to use this property directly.
     * Instead use [[SpeechConfig.outputFormat]].
     * @member PropertyId.SpeechServiceResponse_RequestDetailedResultTrueFalse
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestDetailedResultTrueFalse"] = 17] = "SpeechServiceResponse_RequestDetailedResultTrueFalse";
    /**
     * The requested Cognitive Services Speech Service response output profanity level. Currently unused.
     * @member PropertyId.SpeechServiceResponse_RequestProfanityFilterTrueFalse
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestProfanityFilterTrueFalse"] = 18] = "SpeechServiceResponse_RequestProfanityFilterTrueFalse";
    /**
     * The Cognitive Services Speech Service response output (in JSON format). This property is available on recognition result objects only.
     * @member PropertyId.SpeechServiceResponse_JsonResult
     */
    PropertyId[PropertyId["SpeechServiceResponse_JsonResult"] = 19] = "SpeechServiceResponse_JsonResult";
    /**
     * The Cognitive Services Speech Service error details (in JSON format). Under normal circumstances, you shouldn't have to
     * use this property directly. Instead use [[CancellationDetails.errorDetails]].
     * @member PropertyId.SpeechServiceResponse_JsonErrorDetails
     */
    PropertyId[PropertyId["SpeechServiceResponse_JsonErrorDetails"] = 20] = "SpeechServiceResponse_JsonErrorDetails";
    /**
     * The cancellation reason. Currently unused.
     * @member PropertyId.CancellationDetails_Reason
     */
    PropertyId[PropertyId["CancellationDetails_Reason"] = 21] = "CancellationDetails_Reason";
    /**
     * The cancellation text. Currently unused.
     * @member PropertyId.CancellationDetails_ReasonText
     */
    PropertyId[PropertyId["CancellationDetails_ReasonText"] = 22] = "CancellationDetails_ReasonText";
    /**
     * The Cancellation detailed text. Currently unused.
     * @member PropertyId.CancellationDetails_ReasonDetailedText
     */
    PropertyId[PropertyId["CancellationDetails_ReasonDetailedText"] = 23] = "CancellationDetails_ReasonDetailedText";
    /**
     * The Language Understanding Service response output (in JSON format). Available via [[IntentRecognitionResult]]
     * @member PropertyId.LanguageUnderstandingServiceResponse_JsonResult
     */
    PropertyId[PropertyId["LanguageUnderstandingServiceResponse_JsonResult"] = 24] = "LanguageUnderstandingServiceResponse_JsonResult";
})(PropertyId = exports.PropertyId || (exports.PropertyId = {}));



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Exports_2 = __webpack_require__(2);
var Contracts_1 = __webpack_require__(4);
var Exports_3 = __webpack_require__(0);
/**
 * Defines the base class Recognizer which mainly contains common event handlers.
 * @class Recognizer
 */
var Recognizer = /** @class */ (function () {
    /**
     * Creates and initializes an instance of a Recognizer
     * @constructor
     * @param {AudioConfig} audioInput - An optional audio input stream associated with the recognizer
     */
    function Recognizer(audioConfig, properties, connectionFactory) {
        this.audioConfig = (audioConfig !== undefined) ? audioConfig : Exports_3.AudioConfig.fromDefaultMicrophoneInput();
        this.privDisposed = false;
        this.privProperties = properties.clone();
        this.privConnectionFactory = connectionFactory;
        this.implCommonRecognizerSetup();
    }
    /**
     * Dispose of associated resources.
     * @member Recognizer.prototype.close
     * @function
     * @public
     */
    Recognizer.prototype.close = function () {
        Contracts_1.Contracts.throwIfDisposed(this.privDisposed);
        this.dispose(true);
    };
    Object.defineProperty(Recognizer.prototype, "internalData", {
        /**
         * @Internal
         * Internal data member to support fromRecognizer* pattern methods on other classes.
         * Do not use externally, object returned will change without warning or notive.
         */
        get: function () {
            return this.privReco;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method performs cleanup of resources.
     * The Boolean parameter disposing indicates whether the method is called
     * from Dispose (if disposing is true) or from the finalizer (if disposing is false).
     * Derived classes should override this method to dispose resource if needed.
     * @member Recognizer.prototype.dispose
     * @function
     * @public
     * @param {boolean} disposing - Flag to request disposal.
     */
    Recognizer.prototype.dispose = function (disposing) {
        if (this.privDisposed) {
            return;
        }
        if (disposing) {
            if (this.privReco) {
                this.privReco.audioSource.turnOff();
                this.privReco.dispose();
            }
        }
        this.privDisposed = true;
    };
    Object.defineProperty(Recognizer, "telemetryEnabled", {
        /**
         * This method returns the current state of the telemetry setting.
         * @member Recognizer.prototype.telemetryEnabled
         * @function
         * @public
         * @returns true if the telemetry is enabled, false otherwise.
         */
        get: function () {
            return Exports_1.ServiceRecognizerBase.telemetryDataEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method globally enables or disables telemetry.
     * @member Recognizer.prototype.enableTelemetry
     * @function
     * @public
     * @param enabled - Global setting for telemetry collection.
     * If set to true, telemetry information like microphone errors,
     * recognition errors are collected and sent to Microsoft.
     * If set to false, no telemetry is sent to Microsoft.
     */
    /* tslint:disable:member-ordering */
    Recognizer.enableTelemetry = function (enabled) {
        Exports_1.ServiceRecognizerBase.telemetryDataEnabled = enabled;
    };
    // Does the generic recognizer setup that is common accross all recognizer types.
    Recognizer.prototype.implCommonRecognizerSetup = function () {
        var _this = this;
        var osPlatform = (typeof window !== "undefined") ? "Browser" : "Node";
        var osName = "unknown";
        var osVersion = "unknown";
        if (typeof navigator !== "undefined") {
            osPlatform = osPlatform + "/" + navigator.platform;
            osName = navigator.userAgent;
            osVersion = navigator.appVersion;
        }
        var recognizerConfig = this.createRecognizerConfig(new Exports_1.SpeechServiceConfig(new Exports_1.Context(new Exports_1.OS(osPlatform, osName, osVersion))));
        var subscriptionKey = this.privProperties.getProperty(Exports_3.PropertyId.SpeechServiceConnection_Key, undefined);
        var authentication = (subscriptionKey && subscriptionKey !== "") ?
            new Exports_1.CognitiveSubscriptionKeyAuthentication(subscriptionKey) :
            new Exports_1.CognitiveTokenAuthentication(function (authFetchEventId) {
                var authorizationToken = _this.privProperties.getProperty(Exports_3.PropertyId.SpeechServiceAuthorization_Token, undefined);
                return Exports_2.PromiseHelper.fromResult(authorizationToken);
            }, function (authFetchEventId) {
                var authorizationToken = _this.privProperties.getProperty(Exports_3.PropertyId.SpeechServiceAuthorization_Token, undefined);
                return Exports_2.PromiseHelper.fromResult(authorizationToken);
            });
        this.privReco = this.createServiceRecognizer(authentication, this.privConnectionFactory, this.audioConfig, recognizerConfig);
    };
    // Start the recognition
    Recognizer.prototype.implRecognizerStart = function (recognitionMode, successCallback, errorCallback) {
        this.privReco.recognize(recognitionMode, successCallback, errorCallback).on(
        /* tslint:disable:no-empty */
        function (result) { }, function (error) {
            if (!!errorCallback) {
                // Internal error with service communication.
                errorCallback("Runtime error: " + error);
            }
        });
    };
    Recognizer.prototype.implRecognizerStop = function () {
        if (this.privReco) {
            this.privReco.stopRecognizing();
        }
    };
    return Recognizer;
}());
exports.Recognizer = Recognizer;



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var SpeechConnectionFactory_1 = __webpack_require__(18);
var Contracts_1 = __webpack_require__(4);
var Exports_2 = __webpack_require__(0);
/**
 * Performs speech recognition from microphone, file, or other audio input streams, and gets transcribed text as result.
 * @class SpeechRecognizer
 */
var SpeechRecognizer = /** @class */ (function (_super) {
    __extends(SpeechRecognizer, _super);
    /**
     * SpeechRecognizer constructor.
     * @constructor
     * @param {SpeechConfig} speechConfig - An set of initial properties for this recognizer
     * @param {AudioConfig} audioConfig - An optional audio configuration associated with the recognizer
     */
    function SpeechRecognizer(speechConfig, audioConfig) {
        var _this = this;
        var speechConfigImpl = speechConfig;
        Contracts_1.Contracts.throwIfNull(speechConfigImpl, "speechConfig");
        Contracts_1.Contracts.throwIfNullOrWhitespace(speechConfigImpl.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage), Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage]);
        _this = _super.call(this, audioConfig, speechConfigImpl.properties, new SpeechConnectionFactory_1.SpeechConnectionFactory()) || this;
        _this.privDisposedSpeechRecognizer = false;
        return _this;
    }
    Object.defineProperty(SpeechRecognizer.prototype, "endpointId", {
        /**
         * Gets the endpoint id of a customized speech model that is used for speech recognition.
         * @member SpeechRecognizer.prototype.endpointId
         * @function
         * @public
         * @returns {string} the endpoint id of a customized speech model that is used for speech recognition.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_EndpointId, "00000000-0000-0000-0000-000000000000");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognizer.prototype, "authorizationToken", {
        /**
         * Gets the authorization token used to communicate with the service.
         * @member SpeechRecognizer.prototype.authorizationToken
         * @function
         * @public
         * @returns {string} Authorization token.
         */
        get: function () {
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token);
        },
        /**
         * Gets/Sets the authorization token used to communicate with the service.
         * @member SpeechRecognizer.prototype.authorizationToken
         * @function
         * @public
         * @param {string} token - Authorization token.
         */
        set: function (token) {
            Contracts_1.Contracts.throwIfNullOrWhitespace(token, "token");
            this.properties.setProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token, token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognizer.prototype, "speechRecognitionLanguage", {
        /**
         * Gets the spoken language of recognition.
         * @member SpeechRecognizer.prototype.speechRecognitionLanguage
         * @function
         * @public
         * @returns {string} The spoken language of recognition.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognizer.prototype, "outputFormat", {
        /**
         * Gets the output format of recognition.
         * @member SpeechRecognizer.prototype.outputFormat
         * @function
         * @public
         * @returns {OutputFormat} The output format of recognition.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
            if (this.properties.getProperty(Exports_1.OutputFormatPropertyName, Exports_2.OutputFormat[Exports_2.OutputFormat.Simple]) === Exports_2.OutputFormat[Exports_2.OutputFormat.Simple]) {
                return Exports_2.OutputFormat.Simple;
            }
            else {
                return Exports_2.OutputFormat.Detailed;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechRecognizer.prototype, "properties", {
        /**
         * The collection of properties and their values defined for this SpeechRecognizer.
         * @member SpeechRecognizer.prototype.properties
         * @function
         * @public
         * @returns {PropertyCollection} The collection of properties and their values defined for this SpeechRecognizer.
         */
        get: function () {
            return this.privProperties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Starts speech recognition, and stops after the first utterance is recognized.
     * The task returns the recognition text as result.
     * Note: RecognizeOnceAsync() returns when the first utterance has been recognized,
     *       so it is suitable only for single shot recognition
     *       like command or query. For long-running recognition, use StartContinuousRecognitionAsync() instead.
     * @member SpeechRecognizer.prototype.recognizeOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the SpeechRecognitionResult.
     * @param err - Callback invoked in case of an error.
     */
    SpeechRecognizer.prototype.recognizeOnceAsync = function (cb, err) {
        var _this = this;
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
            this.implRecognizerStop();
            this.implRecognizerStart(Exports_1.RecognitionMode.Interactive, function (e) {
                _this.implRecognizerStop();
                if (!!cb) {
                    cb(e);
                }
            }, function (e) {
                _this.implRecognizerStop();
                if (!!err) {
                    err(e);
                }
            });
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Starts speech recognition, until stopContinuousRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * @member SpeechRecognizer.prototype.startContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    SpeechRecognizer.prototype.startContinuousRecognitionAsync = function (cb, err) {
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
            this.implRecognizerStop();
            this.implRecognizerStart(Exports_1.RecognitionMode.Conversation, undefined, undefined);
            // report result to promise.
            if (!!cb) {
                try {
                    cb();
                }
                catch (e) {
                    if (!!err) {
                        err(e);
                    }
                }
                cb = undefined;
            }
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Stops continuous speech recognition.
     * @member SpeechRecognizer.prototype.stopContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    SpeechRecognizer.prototype.stopContinuousRecognitionAsync = function (cb, err) {
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
            this.implRecognizerStop();
            if (!!cb) {
                try {
                    cb();
                }
                catch (e) {
                    if (!!err) {
                        err(e);
                    }
                }
            }
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Starts speech recognition with keyword spotting, until
     * stopKeywordRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * Note: Key word spotting functionality is only available on the
     *      Speech Devices SDK. This functionality is currently not included in the SDK itself.
     * @member SpeechRecognizer.prototype.startKeywordRecognitionAsync
     * @function
     * @public
     * @param {KeywordRecognitionModel} model The keyword recognition model that
     *        specifies the keyword to be recognized.
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    SpeechRecognizer.prototype.startKeywordRecognitionAsync = function (model, cb, err) {
        Contracts_1.Contracts.throwIfNull(model, "model");
        if (!!err) {
            err("Not yet implemented.");
        }
    };
    /**
     * Stops continuous speech recognition.
     * Note: Key word spotting functionality is only available on the
     *       Speech Devices SDK. This functionality is currently not included in the SDK itself.
     * @member SpeechRecognizer.prototype.stopKeywordRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    SpeechRecognizer.prototype.stopKeywordRecognitionAsync = function (cb, err) {
        if (!!cb) {
            cb();
        }
    };
    /**
     * closes all external resources held by an instance of this class.
     * @member SpeechRecognizer.prototype.close
     * @function
     * @public
     */
    SpeechRecognizer.prototype.close = function () {
        Contracts_1.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
        this.dispose(true);
    };
    /**
     * Disposes any resources held by the object.
     * @member SpeechRecognizer.prototype.dispose
     * @function
     * @public
     * @param {boolean} disposing - true if disposing the object.
     */
    SpeechRecognizer.prototype.dispose = function (disposing) {
        if (this.privDisposedSpeechRecognizer) {
            return;
        }
        if (disposing) {
            this.implRecognizerStop();
            this.privDisposedSpeechRecognizer = true;
        }
        _super.prototype.dispose.call(this, disposing);
    };
    SpeechRecognizer.prototype.createRecognizerConfig = function (speechConfig) {
        return new Exports_1.RecognizerConfig(speechConfig, this.properties);
    };
    SpeechRecognizer.prototype.createServiceRecognizer = function (authentication, connectionFactory, audioConfig, recognizerConfig) {
        var configImpl = audioConfig;
        return new Exports_1.SpeechServiceRecognizer(authentication, connectionFactory, configImpl, recognizerConfig, this);
    };
    return SpeechRecognizer;
}(Exports_2.Recognizer));
exports.SpeechRecognizer = SpeechRecognizer;



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var QueryParameterNames = /** @class */ (function () {
    function QueryParameterNames() {
    }
    Object.defineProperty(QueryParameterNames, "TestHooksParamName", {
        get: function () {
            return "testhooks";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParameterNames, "ConnectionIdHeader", {
        get: function () {
            return "X-ConnectionId";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParameterNames, "DeploymentIdParamName", {
        get: function () {
            return "cid";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParameterNames, "FormatParamName", {
        get: function () {
            return "format";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParameterNames, "LanguageParamName", {
        get: function () {
            return "language";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParameterNames, "TranslationFromParamName", {
        get: function () {
            return "from";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParameterNames, "TranslationToParamName", {
        get: function () {
            return "to";
        },
        enumerable: true,
        configurable: true
    });
    return QueryParameterNames;
}());
exports.QueryParameterNames = QueryParameterNames;



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Contracts_1 = __webpack_require__(4);
var Exports_2 = __webpack_require__(0);
/**
 * Intent recognizer.
 * @class
 */
var IntentRecognizer = /** @class */ (function (_super) {
    __extends(IntentRecognizer, _super);
    /**
     * Initializes an instance of the IntentRecognizer.
     * @constructor
     * @param {SpeechConfig} speechConfig - The set of configuration properties.
     * @param {AudioConfig} audioConfig - An optional audio input config associated with the recognizer
     */
    function IntentRecognizer(speechConfig, audioConfig) {
        var _this = this;
        Contracts_1.Contracts.throwIfNullOrUndefined(speechConfig, "speechConfig");
        var configImpl = speechConfig;
        Contracts_1.Contracts.throwIfNullOrUndefined(configImpl, "speechConfig");
        _this = _super.call(this, audioConfig, configImpl.properties, new Exports_1.IntentConnectionFactory()) || this;
        _this.privAddedIntents = [];
        _this.privAddedLmIntents = {};
        _this.privDisposedIntentRecognizer = false;
        _this.privProperties = configImpl.properties;
        Contracts_1.Contracts.throwIfNullOrWhitespace(_this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage), Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage]);
        return _this;
    }
    Object.defineProperty(IntentRecognizer.prototype, "speechRecognitionLanguage", {
        /**
         * Gets the spoken language of recognition.
         * @member IntentRecognizer.prototype.speechRecognitionLanguage
         * @function
         * @public
         * @returns {string} the spoken language of recognition.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntentRecognizer.prototype, "authorizationToken", {
        /**
         * Gets the authorization token used to communicate with the service.
         * @member IntentRecognizer.prototype.authorizationToken
         * @function
         * @public
         * @returns {string} Authorization token.
         */
        get: function () {
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token);
        },
        /**
         * Gets/Sets the authorization token used to communicate with the service.
         * Note: Please use a token derived from your LanguageUnderstanding subscription key for the Intent recognizer.
         * @member IntentRecognizer.prototype.authorizationToken
         * @function
         * @public
         * @param {string} value - Authorization token.
         */
        set: function (value) {
            this.properties.setProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntentRecognizer.prototype, "properties", {
        /**
         * The collection of properties and their values defined for this IntentRecognizer.
         * @member IntentRecognizer.prototype.properties
         * @function
         * @public
         * @returns {PropertyCollection} The collection of properties and their
         *          values defined for this IntentRecognizer.
         */
        get: function () {
            return this.privProperties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Starts intent recognition, and stops after the first utterance is recognized.
     * The task returns the recognition text and intent as result.
     * Note: RecognizeOnceAsync() returns when the first utterance has been recognized,
     *       so it is suitable only for single shot recognition like command or query.
     *       For long-running recognition, use StartContinuousRecognitionAsync() instead.
     * @member IntentRecognizer.prototype.recognizeOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the recognition has finished with an IntentRecognitionResult.
     * @param err - Callback invoked in case of an error.
     */
    IntentRecognizer.prototype.recognizeOnceAsync = function (cb, err) {
        var _this = this;
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
            this.implRecognizerStop();
            if (Object.keys(this.privAddedLmIntents).length !== 0 || undefined !== this.privUmbrellaIntent) {
                var context = this.buildSpeechContext();
                this.privReco.speechContext.setSection("intent", context.Intent);
                this.privReco.dynamicGrammar.addReferenceGrammar(context.ReferenceGrammars);
                var intentReco = this.privReco;
                intentReco.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent);
            }
            this.implRecognizerStart(Exports_1.RecognitionMode.Interactive, function (e) {
                _this.implRecognizerStop();
                if (!!cb) {
                    cb(e);
                }
            }, function (e) {
                _this.implRecognizerStop();
                if (!!err) {
                    err(e);
                }
            });
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Starts speech recognition, until stopContinuousRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * @member IntentRecognizer.prototype.startContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    IntentRecognizer.prototype.startContinuousRecognitionAsync = function (cb, err) {
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
            this.implRecognizerStop();
            if (Object.keys(this.privAddedLmIntents).length !== 0) {
                var context = this.buildSpeechContext();
                this.privReco.speechContext.setSection("intent", context.Intent);
                this.privReco.dynamicGrammar.addReferenceGrammar(context.ReferenceGrammars);
                var intentReco = this.privReco;
                intentReco.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent);
            }
            this.implRecognizerStart(Exports_1.RecognitionMode.Conversation, undefined, undefined);
            // report result to promise.
            if (!!cb) {
                try {
                    cb();
                }
                catch (e) {
                    if (!!err) {
                        err(e);
                    }
                }
                cb = undefined;
            }
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Stops continuous intent recognition.
     * @member IntentRecognizer.prototype.stopContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    IntentRecognizer.prototype.stopContinuousRecognitionAsync = function (cb, err) {
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
            this.implRecognizerStop();
            if (!!cb) {
                try {
                    cb();
                }
                catch (e) {
                    if (!!err) {
                        err(e);
                    }
                }
            }
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Starts speech recognition with keyword spotting, until stopKeywordRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * Note: Key word spotting functionality is only available on the Speech Devices SDK.
     *       This functionality is currently not included in the SDK itself.
     * @member IntentRecognizer.prototype.startKeywordRecognitionAsync
     * @function
     * @public
     * @param {KeywordRecognitionModel} model - The keyword recognition model that specifies the keyword to be recognized.
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    IntentRecognizer.prototype.startKeywordRecognitionAsync = function (model, cb, err) {
        Contracts_1.Contracts.throwIfNull(model, "model");
        if (!!err) {
            err("Not yet implemented.");
        }
    };
    /**
     * Stops continuous speech recognition.
     * Note: Key word spotting functionality is only available on the Speech Devices SDK.
     *       This functionality is currently not included in the SDK itself.
     * @member IntentRecognizer.prototype.stopKeywordRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    IntentRecognizer.prototype.stopKeywordRecognitionAsync = function (cb, err) {
        if (!!cb) {
            cb();
        }
    };
    /**
     * Adds a phrase that should be recognized as intent.
     * @member IntentRecognizer.prototype.addIntent
     * @function
     * @public
     * @param {string} intentId - A String that represents the identifier of the intent to be recognized.
     * @param {string} phrase - A String that specifies the phrase representing the intent.
     */
    IntentRecognizer.prototype.addIntent = function (simplePhrase, intentId) {
        Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        Contracts_1.Contracts.throwIfNullOrWhitespace(intentId, "intentId");
        Contracts_1.Contracts.throwIfNullOrWhitespace(simplePhrase, "simplePhrase");
        this.privAddedIntents.push([intentId, simplePhrase]);
    };
    /**
     * Adds an intent from Language Understanding service for recognition.
     * @member IntentRecognizer.prototype.addIntentWithLanguageModel
     * @function
     * @public
     * @param {string} intentId - A String that represents the identifier of the intent
     *        to be recognized. Ignored if intentName is empty.
     * @param {string} model - The intent model from Language Understanding service.
     * @param {string} intentName - The intent name defined in the intent model. If it
     *        is empty, all intent names defined in the model will be added.
     */
    IntentRecognizer.prototype.addIntentWithLanguageModel = function (intentId, model, intentName) {
        Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        Contracts_1.Contracts.throwIfNullOrWhitespace(intentId, "intentId");
        Contracts_1.Contracts.throwIfNull(model, "model");
        var modelImpl = model;
        Contracts_1.Contracts.throwIfNullOrWhitespace(modelImpl.appId, "model.appId");
        this.privAddedLmIntents[intentId] = new Exports_1.AddedLmIntent(modelImpl, intentName);
    };
    /**
     * @summary Adds all intents from the specified Language Understanding Model.
     * @member IntentRecognizer.prototype.addAllIntents
     * @function
     * @public
     * @function
     * @public
     * @param {LanguageUnderstandingModel} model - The language understanding model containing the intents.
     * @param {string} intentId - A custom id String to be returned in the IntentRecognitionResult's getIntentId() method.
     */
    IntentRecognizer.prototype.addAllIntents = function (model, intentId) {
        Contracts_1.Contracts.throwIfNull(model, "model");
        var modelImpl = model;
        Contracts_1.Contracts.throwIfNullOrWhitespace(modelImpl.appId, "model.appId");
        this.privUmbrellaIntent = new Exports_1.AddedLmIntent(modelImpl, intentId);
    };
    /**
     * closes all external resources held by an instance of this class.
     * @member IntentRecognizer.prototype.close
     * @function
     * @public
     */
    IntentRecognizer.prototype.close = function () {
        Contracts_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        this.dispose(true);
    };
    IntentRecognizer.prototype.createRecognizerConfig = function (speechConfig) {
        return new Exports_1.RecognizerConfig(speechConfig, this.properties);
    };
    IntentRecognizer.prototype.createServiceRecognizer = function (authentication, connectionFactory, audioConfig, recognizerConfig) {
        var audioImpl = audioConfig;
        return new Exports_1.IntentServiceRecognizer(authentication, connectionFactory, audioImpl, recognizerConfig, this);
    };
    IntentRecognizer.prototype.dispose = function (disposing) {
        if (this.privDisposedIntentRecognizer) {
            return;
        }
        if (disposing) {
            this.privDisposedIntentRecognizer = true;
            _super.prototype.dispose.call(this, disposing);
        }
    };
    IntentRecognizer.prototype.buildSpeechContext = function () {
        var appId;
        var region;
        var subscriptionKey;
        var refGrammers = [];
        if (undefined !== this.privUmbrellaIntent) {
            appId = this.privUmbrellaIntent.modelImpl.appId;
            region = this.privUmbrellaIntent.modelImpl.region;
            subscriptionKey = this.privUmbrellaIntent.modelImpl.subscriptionKey;
        }
        // Build the reference grammer array.
        for (var _i = 0, _a = Object.keys(this.privAddedLmIntents); _i < _a.length; _i++) {
            var intentId = _a[_i];
            var addedLmIntent = this.privAddedLmIntents[intentId];
            // validate all the same model, region, and key...
            if (appId === undefined) {
                appId = addedLmIntent.modelImpl.appId;
            }
            else {
                if (appId !== addedLmIntent.modelImpl.appId) {
                    throw new Error("Intents must all be from the same LUIS model");
                }
            }
            if (region === undefined) {
                region = addedLmIntent.modelImpl.region;
            }
            else {
                if (region !== addedLmIntent.modelImpl.region) {
                    throw new Error("Intents must all be from the same LUIS model in a single region");
                }
            }
            if (subscriptionKey === undefined) {
                subscriptionKey = addedLmIntent.modelImpl.subscriptionKey;
            }
            else {
                if (subscriptionKey !== addedLmIntent.modelImpl.subscriptionKey) {
                    throw new Error("Intents must all use the same subscription key");
                }
            }
            var grammer = "luis/" + appId + "-PRODUCTION#" + intentId;
            refGrammers.push(grammer);
        }
        return {
            Intent: {
                id: appId,
                key: (subscriptionKey === undefined) ? this.privProperties.getProperty(Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_Key]) : subscriptionKey,
                provider: "LUIS",
            },
            ReferenceGrammars: (undefined === this.privUmbrellaIntent) ? refGrammers : ["luis/" + appId + "-PRODUCTION"],
        };
    };
    return IntentRecognizer;
}(Exports_2.Recognizer));
exports.IntentRecognizer = IntentRecognizer;



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Contracts_1 = __webpack_require__(4);
var Exports_2 = __webpack_require__(0);
/**
 * Translation recognizer
 * @class TranslationRecognizer
 */
var TranslationRecognizer = /** @class */ (function (_super) {
    __extends(TranslationRecognizer, _super);
    /**
     * Initializes an instance of the TranslationRecognizer.
     * @constructor
     * @param {SpeechTranslationConfig} speechConfig - Set of properties to configure this recognizer.
     * @param {AudioConfig} audioConfig - An optional audio config associated with the recognizer
     */
    function TranslationRecognizer(speechConfig, audioConfig) {
        var _this = this;
        var configImpl = speechConfig;
        Contracts_1.Contracts.throwIfNull(configImpl, "speechConfig");
        _this = _super.call(this, audioConfig, configImpl.properties, new Exports_1.TranslationConnectionFactory()) || this;
        _this.privDisposedTranslationRecognizer = false;
        _this.privProperties = configImpl.properties.clone();
        if (_this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice, undefined) !== undefined) {
            Contracts_1.Contracts.throwIfNullOrWhitespace(_this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice), Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice]);
        }
        Contracts_1.Contracts.throwIfNullOrWhitespace(_this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages), Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages]);
        Contracts_1.Contracts.throwIfNullOrWhitespace(_this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage), Exports_2.PropertyId[Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage]);
        return _this;
    }
    Object.defineProperty(TranslationRecognizer.prototype, "speechRecognitionLanguage", {
        /**
         * Gets the language name that was set when the recognizer was created.
         * @member TranslationRecognizer.prototype.speechRecognitionLanguage
         * @function
         * @public
         * @returns {string} Gets the language name that was set when the recognizer was created.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognizer.prototype, "targetLanguages", {
        /**
         * Gets target languages for translation that were set when the recognizer was created.
         * The language is specified in BCP-47 format. The translation will provide translated text for each of language.
         * @member TranslationRecognizer.prototype.targetLanguages
         * @function
         * @public
         * @returns {string[]} Gets target languages for translation that were set when the recognizer was created.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognizer.prototype, "voiceName", {
        /**
         * Gets the name of output voice.
         * @member TranslationRecognizer.prototype.voiceName
         * @function
         * @public
         * @returns {string} the name of output voice.
         */
        get: function () {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognizer.prototype, "authorizationToken", {
        /**
         * Gets the authorization token used to communicate with the service.
         * @member TranslationRecognizer.prototype.authorizationToken
         * @function
         * @public
         * @returns {string} Authorization token.
         */
        get: function () {
            return this.properties.getProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token);
        },
        /**
         * Gets/Sets the authorization token used to communicate with the service.
         * @member TranslationRecognizer.prototype.authorizationToken
         * @function
         * @public
         * @param {string} value - Authorization token.
         */
        set: function (value) {
            this.properties.setProperty(Exports_2.PropertyId.SpeechServiceAuthorization_Token, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognizer.prototype, "properties", {
        /**
         * The collection of properties and their values defined for this TranslationRecognizer.
         * @member TranslationRecognizer.prototype.properties
         * @function
         * @public
         * @returns {PropertyCollection} The collection of properties and their values defined for this TranslationRecognizer.
         */
        get: function () {
            return this.privProperties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Starts recognition and translation, and stops after the first utterance is recognized.
     * The task returns the translation text as result.
     * Note: recognizeOnceAsync returns when the first utterance has been recognized, so it is suitableonly
     *       for single shot recognition like command or query. For long-running recognition,
     *       use startContinuousRecognitionAsync() instead.
     * @member TranslationRecognizer.prototype.recognizeOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the result when the translation has completed.
     * @param err - Callback invoked in case of an error.
     */
    TranslationRecognizer.prototype.recognizeOnceAsync = function (cb, err) {
        var _this = this;
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
            this.implRecognizerStop();
            this.implRecognizerStart(Exports_1.RecognitionMode.Conversation, function (e) {
                _this.implRecognizerStop();
                if (!!cb) {
                    cb(e);
                }
            }, function (e) {
                _this.implRecognizerStop();
                if (!!err) {
                    err(e);
                }
            });
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Starts recognition and translation, until stopContinuousRecognitionAsync() is called.
     * User must subscribe to events to receive translation results.
     * @member TranslationRecognizer.prototype.startContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback that received the translation has started.
     * @param err - Callback invoked in case of an error.
     */
    TranslationRecognizer.prototype.startContinuousRecognitionAsync = function (cb, err) {
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
            this.implRecognizerStop();
            this.implRecognizerStart(Exports_1.RecognitionMode.Conversation, undefined, undefined);
            // report result to promise.
            if (!!cb) {
                try {
                    cb();
                }
                catch (e) {
                    if (!!err) {
                        err(e);
                    }
                }
                cb = undefined;
            }
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * Stops continuous recognition and translation.
     * @member TranslationRecognizer.prototype.stopContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback that received the translation has stopped.
     * @param err - Callback invoked in case of an error.
     */
    TranslationRecognizer.prototype.stopContinuousRecognitionAsync = function (cb, err) {
        try {
            Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
            this.implRecognizerStop();
            if (!!cb) {
                try {
                    cb();
                }
                catch (e) {
                    if (!!err) {
                        err(e);
                    }
                }
            }
        }
        catch (error) {
            if (!!err) {
                if (error instanceof Error) {
                    var typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
            }
            // Destroy the recognizer.
            this.dispose(true);
        }
    };
    /**
     * closes all external resources held by an instance of this class.
     * @member TranslationRecognizer.prototype.close
     * @function
     * @public
     */
    TranslationRecognizer.prototype.close = function () {
        Contracts_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
        this.dispose(true);
    };
    TranslationRecognizer.prototype.dispose = function (disposing) {
        if (this.privDisposedTranslationRecognizer) {
            return;
        }
        if (disposing) {
            this.implRecognizerStop();
            this.privDisposedTranslationRecognizer = true;
            _super.prototype.dispose.call(this, disposing);
        }
    };
    TranslationRecognizer.prototype.createRecognizerConfig = function (speechConfig) {
        return new Exports_1.RecognizerConfig(speechConfig, this.properties);
    };
    TranslationRecognizer.prototype.createServiceRecognizer = function (authentication, connectionFactory, audioConfig, recognizerConfig) {
        var configImpl = audioConfig;
        return new Exports_1.TranslationServiceRecognizer(authentication, connectionFactory, configImpl, recognizerConfig, this);
    };
    return TranslationRecognizer;
}(Exports_2.Recognizer));
exports.TranslationRecognizer = TranslationRecognizer;



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Represents collection of parameters and their values.
 * @class Translation
 */
var Translations = /** @class */ (function () {
    function Translations() {
        // Use an PropertyCollection internally, just wrapping it to hide the | enum syntax it has.
        this.privMap = new Exports_1.PropertyCollection();
    }
    /**
     * Returns the parameter value in type String. The parameter must have the same type as String.
     * Currently only String, int and bool are allowed.
     * If the name is not available, the specified defaultValue is returned.
     * @member Translation.prototype.get
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} def - The default value which is returned if the parameter is not available in the collection.
     * @returns {string} value of the parameter.
     */
    Translations.prototype.get = function (key, def) {
        return this.privMap.getProperty(key, def);
    };
    /**
     * Sets the String value of the parameter specified by name.
     * @member Translation.prototype.set
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} value - The value of the parameter.
     */
    Translations.prototype.set = function (key, value) {
        this.privMap.setProperty(key, value);
    };
    return Translations;
}());
exports.Translations = Translations;



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the possible reasons a recognition result might not be recognized.
 * @class NoMatchReason
 */
var NoMatchReason;
(function (NoMatchReason) {
    /**
     * Indicates that speech was detected, but not recognized.
     * @member NoMatchReason.NotRecognized
     */
    NoMatchReason[NoMatchReason["NotRecognized"] = 0] = "NotRecognized";
    /**
     * Indicates that the start of the audio stream contained only silence,
     * and the service timed out waiting for speech.
     * @member NoMatchReason.InitialSilenceTimeout
     */
    NoMatchReason[NoMatchReason["InitialSilenceTimeout"] = 1] = "InitialSilenceTimeout";
    /**
     * Indicates that the start of the audio stream contained only noise,
     * and the service timed out waiting for speech.
     * @member NoMatchReason.InitialBabbleTimeout
     */
    NoMatchReason[NoMatchReason["InitialBabbleTimeout"] = 2] = "InitialBabbleTimeout";
})(NoMatchReason = exports.NoMatchReason || (exports.NoMatchReason = {}));



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Exports_2 = __webpack_require__(0);
/**
 * Contains detailed information for NoMatch recognition results.
 * @class NoMatchDetails
 */
var NoMatchDetails = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {NoMatchReason} reason - The no-match reason.
     */
    function NoMatchDetails(reason) {
        this.privReason = reason;
    }
    /**
     * Creates an instance of NoMatchDetails object for the NoMatch SpeechRecognitionResults.
     * @member NoMatchDetails.fromResult
     * @function
     * @public
     * @param {SpeechRecognitionResult | IntentRecognitionResult | TranslationRecognitionResult}
     *        result - The recognition result that was not recognized.
     * @returns {NoMatchDetails} The no match details object being created.
     */
    NoMatchDetails.fromResult = function (result) {
        var simpleSpeech = Exports_1.SimpleSpeechPhrase.fromJSON(result.json);
        var reason = Exports_2.NoMatchReason.NotRecognized;
        switch (simpleSpeech.RecognitionStatus) {
            case Exports_1.RecognitionStatus.BabbleTimeout:
                reason = Exports_2.NoMatchReason.InitialBabbleTimeout;
                break;
            case Exports_1.RecognitionStatus.InitialSilenceTimeout:
                reason = Exports_2.NoMatchReason.InitialSilenceTimeout;
                break;
            default:
                reason = Exports_2.NoMatchReason.NotRecognized;
                break;
        }
        return new NoMatchDetails(reason);
    };
    Object.defineProperty(NoMatchDetails.prototype, "reason", {
        /**
         * The reason the recognition was canceled.
         * @member NoMatchDetails.prototype.reason
         * @function
         * @public
         * @returns {NoMatchReason} Specifies the reason canceled.
         */
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    return NoMatchDetails;
}());
exports.NoMatchDetails = NoMatchDetails;



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Define payload of speech recognition canceled result events.
 * @class TranslationRecognitionCanceledEventArgs
 */
var TranslationRecognitionCanceledEventArgs = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} sessionid - The session id.
     * @param {CancellationReason} cancellationReason - The cancellation reason.
     * @param {string} errorDetails - Error details, if provided.
     * @param {TranslationRecognitionResult} result - The result.
     */
    function TranslationRecognitionCanceledEventArgs(sessionid, cancellationReason, errorDetails, errorCode, result) {
        this.privCancelReason = cancellationReason;
        this.privErrorDetails = errorDetails;
        this.privResult = result;
        this.privSessionId = sessionid;
        this.privErrorCode = errorCode;
    }
    Object.defineProperty(TranslationRecognitionCanceledEventArgs.prototype, "result", {
        /**
         * Specifies the recognition result.
         * @member TranslationRecognitionCanceledEventArgs.prototype.result
         * @function
         * @public
         * @returns {TranslationRecognitionResult} the recognition result.
         */
        get: function () {
            return this.privResult;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognitionCanceledEventArgs.prototype, "sessionId", {
        /**
         * Specifies the session identifier.
         * @member TranslationRecognitionCanceledEventArgs.prototype.sessionId
         * @function
         * @public
         * @returns {string} the session identifier.
         */
        get: function () {
            return this.privSessionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognitionCanceledEventArgs.prototype, "reason", {
        /**
         * The reason the recognition was canceled.
         * @member TranslationRecognitionCanceledEventArgs.prototype.reason
         * @function
         * @public
         * @returns {CancellationReason} Specifies the reason canceled.
         */
        get: function () {
            return this.privCancelReason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognitionCanceledEventArgs.prototype, "errorCode", {
        /**
         * The error code in case of an unsuccessful recognition.
         * Added in version 1.1.0.
         * @return An error code that represents the error reason.
         */
        get: function () {
            return this.privErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationRecognitionCanceledEventArgs.prototype, "errorDetails", {
        /**
         * In case of an unsuccessful recognition, provides details of the occurred error.
         * @member TranslationRecognitionCanceledEventArgs.prototype.errorDetails
         * @function
         * @public
         * @returns {string} A String that represents the error details.
         */
        get: function () {
            return this.privErrorDetails;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationRecognitionCanceledEventArgs;
}());
exports.TranslationRecognitionCanceledEventArgs = TranslationRecognitionCanceledEventArgs;



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Define payload of intent recognition canceled result events.
 * @class IntentRecognitionCanceledEventArgs
 */
var IntentRecognitionCanceledEventArgs = /** @class */ (function (_super) {
    __extends(IntentRecognitionCanceledEventArgs, _super);
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {CancellationReason} result - The result of the intent recognition.
     * @param {string} offset - The offset.
     * @param {IntentRecognitionResult} sessionId - The session id.
     */
    function IntentRecognitionCanceledEventArgs(reason, errorDetails, errorCode, result, offset, sessionId) {
        var _this = _super.call(this, result, offset, sessionId) || this;
        _this.privReason = reason;
        _this.privErrorDetails = errorDetails;
        _this.privErrorCode = errorCode;
        return _this;
    }
    Object.defineProperty(IntentRecognitionCanceledEventArgs.prototype, "reason", {
        /**
         * The reason the recognition was canceled.
         * @member IntentRecognitionCanceledEventArgs.prototype.reason
         * @function
         * @public
         * @returns {CancellationReason} Specifies the reason canceled.
         */
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntentRecognitionCanceledEventArgs.prototype, "errorCode", {
        /**
         * The error code in case of an unsuccessful recognition.
         * Added in version 1.1.0.
         * @return An error code that represents the error reason.
         */
        get: function () {
            return this.privErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntentRecognitionCanceledEventArgs.prototype, "errorDetails", {
        /**
         * In case of an unsuccessful recognition, provides details of the occurred error.
         * @member IntentRecognitionCanceledEventArgs.prototype.errorDetails
         * @function
         * @public
         * @returns {string} A String that represents the error details.
         */
        get: function () {
            return this.privErrorDetails;
        },
        enumerable: true,
        configurable: true
    });
    return IntentRecognitionCanceledEventArgs;
}(Exports_1.IntentRecognitionEventArgs));
exports.IntentRecognitionCanceledEventArgs = IntentRecognitionCanceledEventArgs;



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var Exports_2 = __webpack_require__(0);
/**
 * Contains detailed information about why a result was canceled.
 * @class CancellationDetails
 */
var CancellationDetails = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {CancellationReason} reason - The cancellation reason.
     * @param {string} errorDetails - The error details, if provided.
     */
    function CancellationDetails(reason, errorDetails, errorCode) {
        this.privReason = reason;
        this.privErrorDetails = errorDetails;
        this.privErrorCode = errorCode;
    }
    /**
     * Creates an instance of CancellationDetails object for the canceled RecognitionResult.
     * @member CancellationDetails.fromResult
     * @function
     * @public
     * @param {RecognitionResult} result - The result that was canceled.
     * @returns {CancellationDetails} The cancellation details object being created.
     */
    CancellationDetails.fromResult = function (result) {
        var reason = Exports_2.CancellationReason.Error;
        var errorCode = Exports_2.CancellationErrorCode.NoError;
        if (!!result.json) {
            var simpleSpeech = Exports_1.SimpleSpeechPhrase.fromJSON(result.json);
            reason = Exports_1.EnumTranslation.implTranslateCancelResult(simpleSpeech.RecognitionStatus);
        }
        if (!!result.properties) {
            errorCode = Exports_2.CancellationErrorCode[result.properties.getProperty(Exports_1.CancellationErrorCodePropertyName, Exports_2.CancellationErrorCode[Exports_2.CancellationErrorCode.NoError])];
        }
        return new CancellationDetails(reason, result.errorDetails, errorCode);
    };
    Object.defineProperty(CancellationDetails.prototype, "reason", {
        /**
         * The reason the recognition was canceled.
         * @member CancellationDetails.prototype.reason
         * @function
         * @public
         * @returns {CancellationReason} Specifies the reason canceled.
         */
        get: function () {
            return this.privReason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CancellationDetails.prototype, "errorDetails", {
        /**
         * In case of an unsuccessful recognition, provides details of the occurred error.
         * @member CancellationDetails.prototype.errorDetails
         * @function
         * @public
         * @returns {string} A String that represents the error details.
         */
        get: function () {
            return this.privErrorDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CancellationDetails.prototype, "ErrorCode", {
        /**
         * The error code in case of an unsuccessful recognition.
         * Added in version 1.1.0.
         * @return An error code that represents the error reason.
         */
        get: function () {
            return this.privErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    return CancellationDetails;
}());
exports.CancellationDetails = CancellationDetails;



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Defines error code in case that CancellationReason is Error.
 *  Added in version 1.1.0.
 */
var CancellationErrorCode;
(function (CancellationErrorCode) {
    /**
     * Indicates that no error occurred during speech recognition.
     */
    CancellationErrorCode[CancellationErrorCode["NoError"] = 0] = "NoError";
    /**
     * Indicates an authentication error.
     */
    CancellationErrorCode[CancellationErrorCode["AuthenticationFailure"] = 1] = "AuthenticationFailure";
    /**
     * Indicates that one or more recognition parameters are invalid.
     */
    CancellationErrorCode[CancellationErrorCode["BadRequestParameters"] = 2] = "BadRequestParameters";
    /**
     * Indicates that the number of parallel requests exceeded the number of allowed
     * concurrent transcriptions for the subscription.
     */
    CancellationErrorCode[CancellationErrorCode["TooManyRequests"] = 3] = "TooManyRequests";
    /**
     * Indicates a connection error.
     */
    CancellationErrorCode[CancellationErrorCode["ConnectionFailure"] = 4] = "ConnectionFailure";
    /**
     * Indicates a time-out error when waiting for response from service.
     */
    CancellationErrorCode[CancellationErrorCode["ServiceTimeout"] = 5] = "ServiceTimeout";
    /**
     * Indicates that an error is returned by the service.
     */
    CancellationErrorCode[CancellationErrorCode["ServiceError"] = 6] = "ServiceError";
    /**
     * Indicates an unexpected runtime error.
     */
    CancellationErrorCode[CancellationErrorCode["RuntimeError"] = 7] = "RuntimeError";
})(CancellationErrorCode = exports.CancellationErrorCode || (exports.CancellationErrorCode = {}));



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Defines payload for connection events like Connected/Disconnected.
 * Added in version 1.2.0
 */
var ConnectionEventArgs = /** @class */ (function (_super) {
    __extends(ConnectionEventArgs, _super);
    function ConnectionEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConnectionEventArgs;
}(Exports_1.SessionEventArgs));
exports.ConnectionEventArgs = ConnectionEventArgs;



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
/**
 * Connection is a proxy class for managing connection to the speech service of the specified Recognizer.
 * By default, a Recognizer autonomously manages connection to service when needed.
 * The Connection class provides additional methods for users to explicitly open or close a connection and
 * to subscribe to connection status changes.
 * The use of Connection is optional, and mainly for scenarios where fine tuning of application
 * behavior based on connection status is needed. Users can optionally call Open() to manually set up a connection
 * in advance before starting recognition on the Recognizer associated with this Connection.
 * If the Recognizer needs to connect or disconnect to service, it will
 * setup or shutdown the connection independently. In this case the Connection will be notified by change of connection
 * status via Connected/Disconnected events.
 * Added in version 1.2.0.
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    /**
     * Gets the Connection instance from the specified recognizer.
     * @param recognizer The recognizer associated with the connection.
     * @return The Connection instance of the recognizer.
     */
    Connection.fromRecognizer = function (recognizer) {
        var recoBase = recognizer.internalData;
        var ret = new Connection();
        ret.privServiceRecognizer = recoBase;
        ret.privEventListener = ret.privServiceRecognizer.connectionEvents.attach(function (connectionEvent) {
            if (connectionEvent.name === "ConnectionEstablishedEvent") {
                if (!!ret.connected) {
                    ret.connected(new Exports_1.ConnectionEventArgs(connectionEvent.connectionId));
                }
            }
            else if (connectionEvent.name === "ConnectionClosedEvent") {
                if (!!ret.disconnected) {
                    ret.disconnected(new Exports_1.ConnectionEventArgs(connectionEvent.connectionId));
                }
            }
        });
        return ret;
    };
    /**
     * Starts to set up connection to the service.
     * Users can optionally call openConnection() to manually set up a connection in advance before starting recognition on the
     * Recognizer associated with this Connection. After starting recognition, calling Open() will have no effect
     *
     * Note: On return, the connection might not be ready yet. Please subscribe to the Connected event to
     * be notfied when the connection is established.
     */
    Connection.prototype.openConnection = function () {
        this.privServiceRecognizer.connect();
    };
    /**
     * Closes the connection the service.
     * Users can optionally call closeConnection() to manually shutdown the connection of the associated Recognizer.
     *
     * If closeConnection() is called during recognition, recognition will fail and cancel wtih an error.
     */
    Connection.prototype.closeConnection = function () {
        this.privServiceRecognizer.disconnect();
    };
    /**
     * Dispose of associated resources.
     */
    Connection.prototype.close = function () {
        /* tslint:disable:no-empty */
    };
    return Connection;
}());
exports.Connection = Connection;



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Allows additions of new phrases to improve speech recognition.
 *
 * Phrases added to the recognizer are effective at the start of the next recognition, or the next time the SpeechSDK must reconnect
 * to the speech service.
 */
var PhraseListGrammar = /** @class */ (function () {
    function PhraseListGrammar(recogBase) {
        this.privGrammerBuilder = recogBase.dynamicGrammar;
    }
    /**
     * Creates a PhraseListGrammar from a given speech recognizer. Will accept any recognizer that derives from @class Recognizer.
     * @param recognizer The recognizer to add phrase lists to.
     */
    PhraseListGrammar.fromRecognizer = function (recognizer) {
        var recoBase = recognizer.internalData;
        return new PhraseListGrammar(recoBase);
    };
    /**
     * Adds a single phrase to the current recognizer.
     * @param phrase Phrase to add.
     */
    PhraseListGrammar.prototype.addPhrase = function (phrase) {
        this.privGrammerBuilder.addPhrase(phrase);
    };
    /**
     * Adds multiple phrases to the current recognizer.
     * @param phrases Array of phrases to add.
     */
    PhraseListGrammar.prototype.addPhrases = function (phrases) {
        this.privGrammerBuilder.addPhrase(phrases);
    };
    /**
     * Clears all phrases added to the current recognizer.
     */
    PhraseListGrammar.prototype.clear = function () {
        this.privGrammerBuilder.clearPhrases();
    };
    return PhraseListGrammar;
}());
exports.PhraseListGrammar = PhraseListGrammar;



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(6);
var Exports_2 = __webpack_require__(2);
var Exports_3 = __webpack_require__(0);
var Exports_4 = __webpack_require__(1);
var SpeechConnectionMessage_Internal_1 = __webpack_require__(75);
var ServiceRecognizerBase = /** @class */ (function () {
    function ServiceRecognizerBase(authentication, connectionFactory, audioSource, recognizerConfig, recognizer) {
        var _this = this;
        this.sendTelemetryData = function () {
            var telemetryData = _this.privRequestSession.getTelemetry();
            // console.warn("Telem: " + telemetryData);
            if (ServiceRecognizerBase.telemetryDataEnabled !== true ||
                _this.privIsDisposed ||
                null === telemetryData) {
                return Exports_2.PromiseHelper.fromResult(true);
            }
            if (!!ServiceRecognizerBase.telemetryData) {
                try {
                    ServiceRecognizerBase.telemetryData(telemetryData);
                    /* tslint:disable:no-empty */
                }
                catch (_a) { }
            }
            return _this.fetchConnection().onSuccessContinueWith(function (connection) {
                return connection.send(new SpeechConnectionMessage_Internal_1.SpeechConnectionMessage(Exports_2.MessageType.Text, "telemetry", _this.privRequestSession.requestId, "application/json", telemetryData));
            });
        };
        this.fetchConnection = function () {
            return _this.configureConnection();
        };
        this.receiveMessage = function (successCallback, errorCallBack) {
            return _this.fetchConnection().on(function (connection) {
                return connection.read()
                    .onSuccessContinueWithPromise(function (message) {
                    if (_this.privIsDisposed || !_this.privRequestSession.isRecognizing) {
                        // We're done.
                        return Exports_2.PromiseHelper.fromResult(undefined);
                    }
                    // indicates we are draining the queue and it came with no message;
                    if (!message) {
                        if (!_this.privRequestSession.isRecognizing) {
                            return Exports_2.PromiseHelper.fromResult(true);
                        }
                        else {
                            return _this.receiveMessage(successCallback, errorCallBack);
                        }
                    }
                    var connectionMessage = SpeechConnectionMessage_Internal_1.SpeechConnectionMessage.fromConnectionMessage(message);
                    if (connectionMessage.requestId.toLowerCase() === _this.privRequestSession.requestId.toLowerCase()) {
                        switch (connectionMessage.path.toLowerCase()) {
                            case "turn.start":
                                _this.privMustReportEndOfStream = true;
                                break;
                            case "speech.startdetected":
                                var speechStartDetected = Exports_4.SpeechDetected.fromJSON(connectionMessage.textBody);
                                var speechStartEventArgs = new Exports_3.RecognitionEventArgs(speechStartDetected.Offset, _this.privRequestSession.sessionId);
                                if (!!_this.privRecognizer.speechStartDetected) {
                                    _this.privRecognizer.speechStartDetected(_this.privRecognizer, speechStartEventArgs);
                                }
                                break;
                            case "speech.enddetected":
                                var json = void 0;
                                if (connectionMessage.textBody.length > 0) {
                                    json = connectionMessage.textBody;
                                }
                                else {
                                    // If the request was empty, the JSON returned is empty.
                                    json = "{ Offset: 0 }";
                                }
                                var speechStopDetected = Exports_4.SpeechDetected.fromJSON(json);
                                _this.privRequestSession.onServiceRecognized(speechStopDetected.Offset + _this.privRequestSession.currentTurnAudioOffset);
                                var speechStopEventArgs = new Exports_3.RecognitionEventArgs(speechStopDetected.Offset + _this.privRequestSession.currentTurnAudioOffset, _this.privRequestSession.sessionId);
                                if (!!_this.privRecognizer.speechEndDetected) {
                                    _this.privRecognizer.speechEndDetected(_this.privRecognizer, speechStopEventArgs);
                                }
                                break;
                            case "turn.end":
                                _this.sendTelemetryData();
                                if (_this.privRequestSession.isSpeechEnded && _this.privMustReportEndOfStream) {
                                    _this.privMustReportEndOfStream = false;
                                    _this.cancelRecognitionLocal(Exports_3.CancellationReason.EndOfStream, Exports_3.CancellationErrorCode.NoError, undefined, successCallback);
                                }
                                var sessionStopEventArgs = new Exports_3.SessionEventArgs(_this.privRequestSession.sessionId);
                                _this.privRequestSession.onServiceTurnEndResponse(_this.privRecognizerConfig.isContinuousRecognition);
                                if (!_this.privRecognizerConfig.isContinuousRecognition || _this.privRequestSession.isSpeechEnded) {
                                    if (!!_this.privRecognizer.sessionStopped) {
                                        _this.privRecognizer.sessionStopped(_this.privRecognizer, sessionStopEventArgs);
                                    }
                                    return Exports_2.PromiseHelper.fromResult(true);
                                }
                                else {
                                    _this.fetchConnection().onSuccessContinueWith(function (connection) {
                                        _this.sendSpeechContext(connection);
                                    });
                                }
                            default:
                                _this.processTypeSpecificMessages(connectionMessage, successCallback, errorCallBack);
                        }
                    }
                    return _this.receiveMessage(successCallback, errorCallBack);
                });
            }, function (error) {
            });
        };
        this.sendSpeechServiceConfig = function (connection, requestSession, SpeechServiceConfigJson) {
            // filter out anything that is not required for the service to work.
            if (ServiceRecognizerBase.telemetryDataEnabled !== true) {
                var withTelemetry = JSON.parse(SpeechServiceConfigJson);
                var replacement = {
                    context: {
                        system: withTelemetry.context.system,
                    },
                };
                SpeechServiceConfigJson = JSON.stringify(replacement);
            }
            if (SpeechServiceConfigJson) { // && this.privConnectionId !== this.privSpeechServiceConfigConnectionId) {
                _this.privSpeechServiceConfigConnectionId = _this.privConnectionId;
                return connection.send(new SpeechConnectionMessage_Internal_1.SpeechConnectionMessage(Exports_2.MessageType.Text, "speech.config", requestSession.requestId, "application/json", SpeechServiceConfigJson));
            }
            return Exports_2.PromiseHelper.fromResult(true);
        };
        this.sendSpeechContext = function (connection) {
            var speechContextJson = _this.speechContext.toJSON();
            if (speechContextJson) {
                return connection.send(new SpeechConnectionMessage_Internal_1.SpeechConnectionMessage(Exports_2.MessageType.Text, "speech.context", _this.privRequestSession.requestId, "application/json", speechContextJson));
            }
            return Exports_2.PromiseHelper.fromResult(true);
        };
        this.sendAudio = function (audioStreamNode) {
            // NOTE: Home-baked promises crash ios safari during the invocation
            // of the error callback chain (looks like the recursion is way too deep, and
            // it blows up the stack). The following construct is a stop-gap that does not
            // bubble the error up the callback chain and hence circumvents this problem.
            // TODO: rewrite with ES6 promises.
            var deferred = new Exports_2.Deferred();
            // The time we last sent data to the service.
            var nextSendTime = Date.now();
            var audioFormat = _this.privAudioSource.format;
            // Max amount to send before we start to throttle
            var fastLaneSizeMs = _this.privRecognizerConfig.parameters.getProperty("SPEECH-TransmitLengthBeforThrottleMs", "5000");
            var maxSendUnthrottledBytes = audioFormat.avgBytesPerSec / 1000 * parseInt(fastLaneSizeMs, 10);
            var readAndUploadCycle = function () {
                // If speech is done, stop sending audio.
                if (!_this.privIsDisposed && !_this.privRequestSession.isSpeechEnded && _this.privRequestSession.isRecognizing) {
                    _this.fetchConnection().on(function (connection) {
                        audioStreamNode.read().on(function (audioStreamChunk) {
                            // we have a new audio chunk to upload.
                            if (_this.privRequestSession.isSpeechEnded) {
                                // If service already recognized audio end then don't send any more audio
                                deferred.resolve(true);
                                return;
                            }
                            var payload;
                            var sendDelay;
                            if (audioStreamChunk.isEnd) {
                                payload = null;
                                sendDelay = 0;
                            }
                            else {
                                payload = audioStreamChunk.buffer;
                                _this.privRequestSession.onAudioSent(payload.byteLength);
                                if (maxSendUnthrottledBytes >= _this.privRequestSession.bytesSent) {
                                    sendDelay = 0;
                                }
                                else {
                                    sendDelay = Math.max(0, nextSendTime - Date.now());
                                }
                            }
                            // Are we ready to send, or need we delay more?
                            setTimeout(function () {
                                if (payload !== null) {
                                    nextSendTime = Date.now() + (payload.byteLength * 1000 / (audioFormat.avgBytesPerSec * 2));
                                }
                                var uploaded = connection.send(new SpeechConnectionMessage_Internal_1.SpeechConnectionMessage(Exports_2.MessageType.Binary, "audio", _this.privRequestSession.requestId, null, payload));
                                if (!audioStreamChunk.isEnd) {
                                    uploaded.continueWith(function (_) {
                                        // Regardless of success or failure, schedule the next upload.
                                        // If the underlying connection was broken, the next cycle will
                                        // get a new connection and re-transmit missing audio automatically.
                                        readAndUploadCycle();
                                    });
                                }
                                else {
                                    // the audio stream has been closed, no need to schedule next
                                    // read-upload cycle.
                                    _this.privRequestSession.onSpeechEnded();
                                    deferred.resolve(true);
                                }
                            }, sendDelay);
                        }, function (error) {
                            if (_this.privRequestSession.isSpeechEnded) {
                                // For whatever reason, Reject is used to remove queue subscribers inside
                                // the Queue.DrainAndDispose invoked from DetachAudioNode down below, which
                                // means that sometimes things can be rejected in normal circumstances, without
                                // any errors.
                                deferred.resolve(true); // TODO: remove the argument, it's is completely meaningless.
                            }
                            else {
                                // Only reject, if there was a proper error.
                                deferred.reject(error);
                            }
                        });
                    }, function (error) {
                        deferred.reject(error);
                    });
                }
            };
            readAndUploadCycle();
            return deferred.promise();
        };
        if (!authentication) {
            throw new Exports_2.ArgumentNullError("authentication");
        }
        if (!connectionFactory) {
            throw new Exports_2.ArgumentNullError("connectionFactory");
        }
        if (!audioSource) {
            throw new Exports_2.ArgumentNullError("audioSource");
        }
        if (!recognizerConfig) {
            throw new Exports_2.ArgumentNullError("recognizerConfig");
        }
        this.privMustReportEndOfStream = false;
        this.privAuthentication = authentication;
        this.privConnectionFactory = connectionFactory;
        this.privAudioSource = audioSource;
        this.privRecognizerConfig = recognizerConfig;
        this.privIsDisposed = false;
        this.privRecognizer = recognizer;
        this.privRequestSession = new Exports_4.RequestSession(this.privAudioSource.id());
        this.privConnectionEvents = new Exports_2.EventSource();
        this.privDynamicGrammar = new Exports_4.DynamicGrammarBuilder();
        this.privSpeechContext = new Exports_4.SpeechContext(this.privDynamicGrammar);
    }
    Object.defineProperty(ServiceRecognizerBase.prototype, "audioSource", {
        get: function () {
            return this.privAudioSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRecognizerBase.prototype, "speechContext", {
        get: function () {
            return this.privSpeechContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRecognizerBase.prototype, "dynamicGrammar", {
        get: function () {
            return this.privDynamicGrammar;
        },
        enumerable: true,
        configurable: true
    });
    ServiceRecognizerBase.prototype.isDisposed = function () {
        return this.privIsDisposed;
    };
    ServiceRecognizerBase.prototype.dispose = function (reason) {
        this.privIsDisposed = true;
        if (this.privConnectionConfigurationPromise) {
            this.privConnectionConfigurationPromise.onSuccessContinueWith(function (connection) {
                connection.dispose(reason);
            });
        }
    };
    Object.defineProperty(ServiceRecognizerBase.prototype, "connectionEvents", {
        get: function () {
            return this.privConnectionEvents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRecognizerBase.prototype, "recognitionMode", {
        get: function () {
            return this.privRecognizerConfig.recognitionMode;
        },
        enumerable: true,
        configurable: true
    });
    ServiceRecognizerBase.prototype.recognize = function (recoMode, successCallback, errorCallBack) {
        var _this = this;
        // Clear the existing configuration promise to force a re-transmission of config and context.
        this.privConnectionConfigurationPromise = null;
        this.privRecognizerConfig.recognitionMode = recoMode;
        this.privRequestSession.startNewRecognition();
        this.privRequestSession.listenForServiceTelemetry(this.privAudioSource.events);
        // Start the connection to the service. The promise this will create is stored and will be used by configureConnection().
        this.connectImpl();
        return this.audioSource
            .attach(this.privRequestSession.audioNodeId)
            .continueWithPromise(function (result) {
            var audioNode;
            if (result.isError) {
                _this.cancelRecognitionLocal(Exports_3.CancellationReason.Error, Exports_3.CancellationErrorCode.ConnectionFailure, result.error, successCallback);
                return Exports_2.PromiseHelper.fromError(result.error);
            }
            else {
                audioNode = new Exports_1.ReplayableAudioNode(result.result, _this.audioSource.format);
                _this.privRequestSession.onAudioSourceAttachCompleted(audioNode, false);
            }
            return _this.audioSource.deviceInfo.onSuccessContinueWithPromise(function (deviceInfo) {
                _this.privRecognizerConfig.SpeechServiceConfig.Context.audio = { source: deviceInfo };
                return _this.configureConnection()
                    .on(function (_) {
                    var sessionStartEventArgs = new Exports_3.SessionEventArgs(_this.privRequestSession.sessionId);
                    if (!!_this.privRecognizer.sessionStarted) {
                        _this.privRecognizer.sessionStarted(_this.privRecognizer, sessionStartEventArgs);
                    }
                    var messageRetrievalPromise = _this.receiveMessage(successCallback, errorCallBack);
                    var audioSendPromise = _this.sendAudio(audioNode);
                    /* tslint:disable:no-empty */
                    audioSendPromise.on(function (_) { }, function (error) {
                        _this.cancelRecognitionLocal(Exports_3.CancellationReason.Error, Exports_3.CancellationErrorCode.RuntimeError, error, successCallback);
                    });
                    var completionPromise = Exports_2.PromiseHelper.whenAll([messageRetrievalPromise, audioSendPromise]);
                    return completionPromise.on(function (r) {
                        return true;
                    }, function (error) {
                        _this.cancelRecognitionLocal(Exports_3.CancellationReason.Error, Exports_3.CancellationErrorCode.RuntimeError, error, successCallback);
                    });
                }, function (error) {
                    _this.cancelRecognitionLocal(Exports_3.CancellationReason.Error, Exports_3.CancellationErrorCode.ConnectionFailure, error, successCallback);
                }).continueWithPromise(function (result) {
                    if (result.isError) {
                        return Exports_2.PromiseHelper.fromError(result.error);
                    }
                    else {
                        return Exports_2.PromiseHelper.fromResult(true);
                    }
                });
            });
        });
    };
    ServiceRecognizerBase.prototype.stopRecognizing = function () {
        if (this.privRequestSession.isRecognizing) {
            this.privRequestSession.onStopRecognizing();
            this.sendTelemetryData();
            this.audioSource.turnOff();
            this.sendFinalAudio();
            this.privRequestSession.dispose();
        }
    };
    ServiceRecognizerBase.prototype.connect = function () {
        this.connectImpl().result();
    };
    ServiceRecognizerBase.prototype.disconnect = function () {
        this.cancelRecognitionLocal(Exports_3.CancellationReason.Error, Exports_3.CancellationErrorCode.NoError, "Disconnecting", undefined);
        if (this.privConnectionPromise.result().isCompleted) {
            if (!this.privConnectionPromise.result().isError) {
                this.privConnectionPromise.result().result.dispose();
                this.privConnectionPromise = null;
            }
        }
        else {
            this.privConnectionPromise.onSuccessContinueWith(function (connection) {
                connection.dispose();
            });
        }
    };
    // Cancels recognition.
    ServiceRecognizerBase.prototype.cancelRecognitionLocal = function (cancellationReason, errorCode, error, cancelRecoCallback) {
        if (!!this.privRequestSession.isRecognizing) {
            this.privRequestSession.onStopRecognizing();
            this.sendTelemetryData();
            this.cancelRecognition(this.privRequestSession.sessionId, this.privRequestSession.requestId, cancellationReason, errorCode, error, cancelRecoCallback);
        }
    };
    // Establishes a websocket connection to the end point.
    ServiceRecognizerBase.prototype.connectImpl = function (isUnAuthorized) {
        var _this = this;
        if (isUnAuthorized === void 0) { isUnAuthorized = false; }
        if (this.privConnectionPromise) {
            if (this.privConnectionPromise.result().isCompleted &&
                (this.privConnectionPromise.result().isError
                    || this.privConnectionPromise.result().result.state() === Exports_2.ConnectionState.Disconnected)) {
                this.privConnectionId = null;
                this.privConnectionPromise = null;
                return this.connectImpl();
            }
            else {
                return this.privConnectionPromise;
            }
        }
        this.privAuthFetchEventId = Exports_2.createNoDashGuid();
        this.privConnectionId = Exports_2.createNoDashGuid();
        this.privRequestSession.onPreConnectionStart(this.privAuthFetchEventId, this.privConnectionId);
        var authPromise = isUnAuthorized ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId) : this.privAuthentication.fetch(this.privAuthFetchEventId);
        this.privConnectionPromise = authPromise
            .continueWithPromise(function (result) {
            if (result.isError) {
                _this.privRequestSession.onAuthCompleted(true, result.error);
                throw new Error(result.error);
            }
            else {
                _this.privRequestSession.onAuthCompleted(false);
            }
            var connection = _this.privConnectionFactory.create(_this.privRecognizerConfig, result.result, _this.privConnectionId);
            _this.privRequestSession.listenForServiceTelemetry(connection.events);
            // Attach to the underlying event. No need to hold onto the detach pointers as in the event the connection goes away,
            // it'll stop sending events.
            connection.events.attach(function (event) {
                _this.connectionEvents.onEvent(event);
            });
            return connection.open().onSuccessContinueWithPromise(function (response) {
                if (response.statusCode === 200) {
                    _this.privRequestSession.onPreConnectionStart(_this.privAuthFetchEventId, _this.privConnectionId);
                    _this.privRequestSession.onConnectionEstablishCompleted(response.statusCode);
                    return Exports_2.PromiseHelper.fromResult(connection);
                }
                else if (response.statusCode === 403 && !isUnAuthorized) {
                    return _this.connectImpl(true);
                }
                else {
                    _this.privRequestSession.onConnectionEstablishCompleted(response.statusCode, response.reason);
                    return Exports_2.PromiseHelper.fromError("Unable to contact server. StatusCode: " + response.statusCode + ", " + _this.privRecognizerConfig.parameters.getProperty(Exports_3.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + response.reason);
                }
            });
        });
        return this.privConnectionPromise;
    };
    // Takes an established websocket connection to the endpoint and sends speech configuration information.
    ServiceRecognizerBase.prototype.configureConnection = function () {
        var _this = this;
        if (this.privConnectionConfigurationPromise) {
            if (this.privConnectionConfigurationPromise.result().isCompleted &&
                (this.privConnectionConfigurationPromise.result().isError
                    || this.privConnectionConfigurationPromise.result().result.state() === Exports_2.ConnectionState.Disconnected)) {
                this.privConnectionConfigurationPromise = null;
                return this.configureConnection();
            }
            else {
                return this.privConnectionConfigurationPromise;
            }
        }
        this.privConnectionConfigurationPromise = this.connectImpl().onSuccessContinueWithPromise(function (connection) {
            return _this.sendSpeechServiceConfig(connection, _this.privRequestSession, _this.privRecognizerConfig.SpeechServiceConfig.serialize())
                .onSuccessContinueWithPromise(function (_) {
                return _this.sendSpeechContext(connection).onSuccessContinueWith(function (_) {
                    return connection;
                });
            });
        });
        return this.privConnectionConfigurationPromise;
    };
    ServiceRecognizerBase.prototype.sendFinalAudio = function () {
        var _this = this;
        var deferred = new Exports_2.Deferred();
        this.fetchConnection().on(function (connection) {
            connection.send(new SpeechConnectionMessage_Internal_1.SpeechConnectionMessage(Exports_2.MessageType.Binary, "audio", _this.privRequestSession.requestId, null, null)).on(function (_) {
                deferred.resolve(true);
            }, function (error) {
                deferred.reject(error);
            });
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise();
    };
    ServiceRecognizerBase.telemetryDataEnabled = true;
    return ServiceRecognizerBase;
}());
exports.ServiceRecognizerBase = ServiceRecognizerBase;



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var PathHeaderName = "path";
var ContentTypeHeaderName = "content-type";
var RequestIdHeaderName = "x-requestid";
var RequestTimestampHeaderName = "x-timestamp";
var SpeechConnectionMessage = /** @class */ (function (_super) {
    __extends(SpeechConnectionMessage, _super);
    function SpeechConnectionMessage(messageType, path, requestId, contentType, body, additionalHeaders, id) {
        var _this = this;
        if (!path) {
            throw new Exports_1.ArgumentNullError("path");
        }
        if (!requestId) {
            throw new Exports_1.ArgumentNullError("requestId");
        }
        var headers = {};
        headers[PathHeaderName] = path;
        headers[RequestIdHeaderName] = requestId;
        headers[RequestTimestampHeaderName] = new Date().toISOString();
        if (contentType) {
            headers[ContentTypeHeaderName] = contentType;
        }
        if (additionalHeaders) {
            for (var headerName in additionalHeaders) {
                if (headerName) {
                    headers[headerName] = additionalHeaders[headerName];
                }
            }
        }
        if (id) {
            _this = _super.call(this, messageType, body, headers, id) || this;
        }
        else {
            _this = _super.call(this, messageType, body, headers) || this;
        }
        _this.privPath = path;
        _this.privRequestId = requestId;
        _this.privContentType = contentType;
        _this.privAdditionalHeaders = additionalHeaders;
        return _this;
    }
    Object.defineProperty(SpeechConnectionMessage.prototype, "path", {
        get: function () {
            return this.privPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionMessage.prototype, "requestId", {
        get: function () {
            return this.privRequestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionMessage.prototype, "contentType", {
        get: function () {
            return this.privContentType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionMessage.prototype, "additionalHeaders", {
        get: function () {
            return this.privAdditionalHeaders;
        },
        enumerable: true,
        configurable: true
    });
    SpeechConnectionMessage.fromConnectionMessage = function (message) {
        var path = null;
        var requestId = null;
        var contentType = null;
        var requestTimestamp = null;
        var additionalHeaders = {};
        if (message.headers) {
            for (var headerName in message.headers) {
                if (headerName) {
                    if (headerName.toLowerCase() === PathHeaderName.toLowerCase()) {
                        path = message.headers[headerName];
                    }
                    else if (headerName.toLowerCase() === RequestIdHeaderName.toLowerCase()) {
                        requestId = message.headers[headerName];
                    }
                    else if (headerName.toLowerCase() === RequestTimestampHeaderName.toLowerCase()) {
                        requestTimestamp = message.headers[headerName];
                    }
                    else if (headerName.toLowerCase() === ContentTypeHeaderName.toLowerCase()) {
                        contentType = message.headers[headerName];
                    }
                    else {
                        additionalHeaders[headerName] = message.headers[headerName];
                    }
                }
            }
        }
        return new SpeechConnectionMessage(message.messageType, path, requestId, contentType, message.body, additionalHeaders, message.id);
    };
    return SpeechConnectionMessage;
}(Exports_1.ConnectionMessage));
exports.SpeechConnectionMessage = SpeechConnectionMessage;



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var RecognitionMode;
(function (RecognitionMode) {
    RecognitionMode[RecognitionMode["Interactive"] = 0] = "Interactive";
    RecognitionMode[RecognitionMode["Conversation"] = 1] = "Conversation";
    RecognitionMode[RecognitionMode["Dictation"] = 2] = "Dictation";
})(RecognitionMode = exports.RecognitionMode || (exports.RecognitionMode = {}));
var SpeechResultFormat;
(function (SpeechResultFormat) {
    SpeechResultFormat[SpeechResultFormat["Simple"] = 0] = "Simple";
    SpeechResultFormat[SpeechResultFormat["Detailed"] = 1] = "Detailed";
})(SpeechResultFormat = exports.SpeechResultFormat || (exports.SpeechResultFormat = {}));
var RecognizerConfig = /** @class */ (function () {
    function RecognizerConfig(speechServiceConfig, parameters) {
        this.privRecognitionMode = RecognitionMode.Interactive;
        this.privSpeechServiceConfig = speechServiceConfig ? speechServiceConfig : new SpeechServiceConfig(new Context(null));
        this.privParameters = parameters;
    }
    Object.defineProperty(RecognizerConfig.prototype, "parameters", {
        get: function () {
            return this.privParameters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "recognitionMode", {
        get: function () {
            return this.privRecognitionMode;
        },
        set: function (value) {
            this.privRecognitionMode = value;
            this.privRecognitionActivityTimeout = value === RecognitionMode.Interactive ? 8000 : 25000;
            this.privSpeechServiceConfig.Recognition = RecognitionMode[value];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "SpeechServiceConfig", {
        get: function () {
            return this.privSpeechServiceConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "recognitionActivityTimeout", {
        get: function () {
            return this.privRecognitionActivityTimeout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "isContinuousRecognition", {
        get: function () {
            return this.privRecognitionMode !== RecognitionMode.Interactive;
        },
        enumerable: true,
        configurable: true
    });
    return RecognizerConfig;
}());
exports.RecognizerConfig = RecognizerConfig;
// The config is serialized and sent as the Speech.Config
// tslint:disable-next-line:max-classes-per-file
var SpeechServiceConfig = /** @class */ (function () {
    function SpeechServiceConfig(context) {
        var _this = this;
        this.serialize = function () {
            return JSON.stringify(_this, function (key, value) {
                if (value && typeof value === "object") {
                    var replacement = {};
                    for (var k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            replacement[k && k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                        }
                    }
                    return replacement;
                }
                return value;
            });
        };
        this.context = context;
    }
    Object.defineProperty(SpeechServiceConfig.prototype, "Context", {
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechServiceConfig.prototype, "Recognition", {
        get: function () {
            return this.recognition;
        },
        set: function (value) {
            this.recognition = value.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    return SpeechServiceConfig;
}());
exports.SpeechServiceConfig = SpeechServiceConfig;
// tslint:disable-next-line:max-classes-per-file
var Context = /** @class */ (function () {
    function Context(os) {
        this.system = new System();
        this.os = os;
    }
    return Context;
}());
exports.Context = Context;
// tslint:disable-next-line:max-classes-per-file
var System = /** @class */ (function () {
    function System() {
        // Note: below will be patched for official builds.
        var SPEECHSDK_CLIENTSDK_VERSION = "1.6.0";
        this.name = "SpeechSDK";
        this.version = SPEECHSDK_CLIENTSDK_VERSION;
        this.build = "JavaScript";
        this.lang = "JavaScript";
    }
    return System;
}());
exports.System = System;
// tslint:disable-next-line:max-classes-per-file
var OS = /** @class */ (function () {
    function OS(platform, name, version) {
        this.platform = platform;
        this.name = name;
        this.version = version;
    }
    return OS;
}());
exports.OS = OS;
// tslint:disable-next-line:max-classes-per-file
var Device = /** @class */ (function () {
    function Device(manufacturer, model, version) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.version = version;
    }
    return Device;
}());
exports.Device = Device;
var connectivity;
(function (connectivity) {
    connectivity["Bluetooth"] = "Bluetooth";
    connectivity["Wired"] = "Wired";
    connectivity["WiFi"] = "WiFi";
    connectivity["Cellular"] = "Cellular";
    connectivity["InBuilt"] = "InBuilt";
    connectivity["Unknown"] = "Unknown";
})(connectivity = exports.connectivity || (exports.connectivity = {}));
var type;
(function (type) {
    type["Phone"] = "Phone";
    type["Speaker"] = "Speaker";
    type["Car"] = "Car";
    type["Headset"] = "Headset";
    type["Thermostat"] = "Thermostat";
    type["Microphones"] = "Microphones";
    type["Deskphone"] = "Deskphone";
    type["RemoteControl"] = "RemoteControl";
    type["Unknown"] = "Unknown";
    type["File"] = "File";
    type["Stream"] = "Stream";
})(type = exports.type || (exports.type = {}));



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var CRLF = "\r\n";
var WebsocketMessageFormatter = /** @class */ (function () {
    function WebsocketMessageFormatter() {
        var _this = this;
        this.toConnectionMessage = function (message) {
            var deferral = new Exports_1.Deferred();
            try {
                if (message.messageType === Exports_1.MessageType.Text) {
                    var textMessage = message.textContent;
                    var headers = {};
                    var body = null;
                    if (textMessage) {
                        var headerBodySplit = textMessage.split("\r\n\r\n");
                        if (headerBodySplit && headerBodySplit.length > 0) {
                            headers = _this.parseHeaders(headerBodySplit[0]);
                            if (headerBodySplit.length > 1) {
                                body = headerBodySplit[1];
                            }
                        }
                    }
                    deferral.resolve(new Exports_1.ConnectionMessage(message.messageType, body, headers, message.id));
                }
                else if (message.messageType === Exports_1.MessageType.Binary) {
                    var binaryMessage = message.binaryContent;
                    var headers = {};
                    var body = null;
                    if (!binaryMessage || binaryMessage.byteLength < 2) {
                        throw new Error("Invalid binary message format. Header length missing.");
                    }
                    var dataView = new DataView(binaryMessage);
                    var headerLength = dataView.getInt16(0);
                    if (binaryMessage.byteLength < headerLength + 2) {
                        throw new Error("Invalid binary message format. Header content missing.");
                    }
                    var headersString = "";
                    for (var i = 0; i < headerLength; i++) {
                        headersString += String.fromCharCode((dataView).getInt8(i + 2));
                    }
                    headers = _this.parseHeaders(headersString);
                    if (binaryMessage.byteLength > headerLength + 2) {
                        body = binaryMessage.slice(2 + headerLength);
                    }
                    deferral.resolve(new Exports_1.ConnectionMessage(message.messageType, body, headers, message.id));
                }
            }
            catch (e) {
                deferral.reject("Error formatting the message. Error: " + e);
            }
            return deferral.promise();
        };
        this.fromConnectionMessage = function (message) {
            var deferral = new Exports_1.Deferred();
            try {
                if (message.messageType === Exports_1.MessageType.Text) {
                    var payload = "" + _this.makeHeaders(message) + CRLF + (message.textBody ? message.textBody : "");
                    deferral.resolve(new Exports_1.RawWebsocketMessage(Exports_1.MessageType.Text, payload, message.id));
                }
                else if (message.messageType === Exports_1.MessageType.Binary) {
                    var headersString = _this.makeHeaders(message);
                    var content = message.binaryBody;
                    var headerInt8Array = new Int8Array(_this.stringToArrayBuffer(headersString));
                    var payload = new ArrayBuffer(2 + headerInt8Array.byteLength + (content ? content.byteLength : 0));
                    var dataView = new DataView(payload);
                    dataView.setInt16(0, headerInt8Array.length);
                    for (var i = 0; i < headerInt8Array.byteLength; i++) {
                        dataView.setInt8(2 + i, headerInt8Array[i]);
                    }
                    if (content) {
                        var bodyInt8Array = new Int8Array(content);
                        for (var i = 0; i < bodyInt8Array.byteLength; i++) {
                            dataView.setInt8(2 + headerInt8Array.byteLength + i, bodyInt8Array[i]);
                        }
                    }
                    deferral.resolve(new Exports_1.RawWebsocketMessage(Exports_1.MessageType.Binary, payload, message.id));
                }
            }
            catch (e) {
                deferral.reject("Error formatting the message. " + e);
            }
            return deferral.promise();
        };
        this.makeHeaders = function (message) {
            var headersString = "";
            if (message.headers) {
                for (var header in message.headers) {
                    if (header) {
                        headersString += header + ": " + message.headers[header] + CRLF;
                    }
                }
            }
            return headersString;
        };
        this.parseHeaders = function (headersString) {
            var headers = {};
            if (headersString) {
                var headerMatches = headersString.match(/[^\r\n]+/g);
                if (headers) {
                    for (var _i = 0, headerMatches_1 = headerMatches; _i < headerMatches_1.length; _i++) {
                        var header = headerMatches_1[_i];
                        if (header) {
                            var separatorIndex = header.indexOf(":");
                            var headerName = separatorIndex > 0 ? header.substr(0, separatorIndex).trim().toLowerCase() : header;
                            var headerValue = separatorIndex > 0 && header.length > (separatorIndex + 1) ?
                                header.substr(separatorIndex + 1).trim() :
                                "";
                            headers[headerName] = headerValue;
                        }
                    }
                }
            }
            return headers;
        };
        this.stringToArrayBuffer = function (str) {
            var buffer = new ArrayBuffer(str.length);
            var view = new DataView(buffer);
            for (var i = 0; i < str.length; i++) {
                view.setUint8(i, str.charCodeAt(i));
            }
            return buffer;
        };
    }
    return WebsocketMessageFormatter;
}());
exports.WebsocketMessageFormatter = WebsocketMessageFormatter;



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(6);
var Exports_2 = __webpack_require__(0);
var Exports_3 = __webpack_require__(1);
var TestHooksParamName = "testhooks";
var ConnectionIdHeader = "X-ConnectionId";
var TranslationConnectionFactory = /** @class */ (function () {
    function TranslationConnectionFactory() {
        this.create = function (config, authInfo, connectionId) {
            var endpoint = config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Endpoint, undefined);
            if (!endpoint) {
                var region = config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_Region, undefined);
                endpoint = "wss://" + region + ".s2s.speech.microsoft.com/speech/translation/cognitiveservices/v1";
            }
            var queryParams = {
                from: config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_RecoLanguage),
                to: config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationToLanguages),
            };
            var voiceName = "voice";
            var featureName = "features";
            if (config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice, undefined) !== undefined) {
                queryParams[voiceName] = config.parameters.getProperty(Exports_2.PropertyId.SpeechServiceConnection_TranslationVoice);
                queryParams[featureName] = "texttospeech";
            }
            var headers = {};
            headers[authInfo.headerName] = authInfo.token;
            headers[ConnectionIdHeader] = connectionId;
            return new Exports_1.WebsocketConnection(endpoint, queryParams, headers, new Exports_3.WebsocketMessageFormatter(), Exports_1.ProxyInfo.fromRecognizerConfig(config), connectionId);
        };
    }
    return TranslationConnectionFactory;
}());
exports.TranslationConnectionFactory = TranslationConnectionFactory;



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
var Exports_2 = __webpack_require__(1);
var EnumTranslation = /** @class */ (function () {
    function EnumTranslation() {
    }
    EnumTranslation.implTranslateRecognitionResult = function (recognitionStatus) {
        var reason = Exports_1.ResultReason.Canceled;
        switch (recognitionStatus) {
            case Exports_2.RecognitionStatus.Success:
                reason = Exports_1.ResultReason.RecognizedSpeech;
                break;
            case Exports_2.RecognitionStatus.NoMatch:
            case Exports_2.RecognitionStatus.InitialSilenceTimeout:
            case Exports_2.RecognitionStatus.BabbleTimeout:
            case Exports_2.RecognitionStatus.EndOfDictation:
                reason = Exports_1.ResultReason.NoMatch;
                break;
            case Exports_2.RecognitionStatus.Error:
            default:
                reason = Exports_1.ResultReason.Canceled;
                break;
        }
        return reason;
    };
    EnumTranslation.implTranslateCancelResult = function (recognitionStatus) {
        var reason = Exports_1.CancellationReason.EndOfStream;
        switch (recognitionStatus) {
            case Exports_2.RecognitionStatus.Success:
            case Exports_2.RecognitionStatus.EndOfDictation:
            case Exports_2.RecognitionStatus.NoMatch:
                reason = Exports_1.CancellationReason.EndOfStream;
                break;
            case Exports_2.RecognitionStatus.InitialSilenceTimeout:
            case Exports_2.RecognitionStatus.BabbleTimeout:
            case Exports_2.RecognitionStatus.Error:
            default:
                reason = Exports_1.CancellationReason.Error;
                break;
        }
        return reason;
    };
    return EnumTranslation;
}());
exports.EnumTranslation = EnumTranslation;



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class SynthesisStatus
 * @private
 */
var SynthesisStatus;
(function (SynthesisStatus) {
    /**
     * The response contains valid audio data.
     * @member SynthesisStatus.Success
     */
    SynthesisStatus[SynthesisStatus["Success"] = 0] = "Success";
    /**
     * Indicates the end of audio data. No valid audio data is included in the message.
     * @member SynthesisStatus.SynthesisEnd
     */
    SynthesisStatus[SynthesisStatus["SynthesisEnd"] = 1] = "SynthesisEnd";
    /**
     * Indicates an error occurred during synthesis data processing.
     * @member SynthesisStatus.Error
     */
    SynthesisStatus[SynthesisStatus["Error"] = 2] = "Error";
})(SynthesisStatus = exports.SynthesisStatus || (exports.SynthesisStatus = {}));
var RecognitionStatus;
(function (RecognitionStatus) {
    RecognitionStatus[RecognitionStatus["Success"] = 0] = "Success";
    RecognitionStatus[RecognitionStatus["NoMatch"] = 1] = "NoMatch";
    RecognitionStatus[RecognitionStatus["InitialSilenceTimeout"] = 2] = "InitialSilenceTimeout";
    RecognitionStatus[RecognitionStatus["BabbleTimeout"] = 3] = "BabbleTimeout";
    RecognitionStatus[RecognitionStatus["Error"] = 4] = "Error";
    RecognitionStatus[RecognitionStatus["EndOfDictation"] = 5] = "EndOfDictation";
})(RecognitionStatus = exports.RecognitionStatus || (exports.RecognitionStatus = {}));



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var TranslationSynthesisEnd = /** @class */ (function () {
    function TranslationSynthesisEnd(json) {
        this.privSynthesisEnd = JSON.parse(json);
        this.privSynthesisEnd.SynthesisStatus = Exports_1.SynthesisStatus[this.privSynthesisEnd.SynthesisStatus];
    }
    TranslationSynthesisEnd.fromJSON = function (json) {
        return new TranslationSynthesisEnd(json);
    };
    Object.defineProperty(TranslationSynthesisEnd.prototype, "SynthesisStatus", {
        get: function () {
            return this.privSynthesisEnd.SynthesisStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationSynthesisEnd.prototype, "FailureReason", {
        get: function () {
            return this.privSynthesisEnd.FailureReason;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationSynthesisEnd;
}());
exports.TranslationSynthesisEnd = TranslationSynthesisEnd;



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var TranslationStatus_1 = __webpack_require__(9);
var TranslationHypothesis = /** @class */ (function () {
    function TranslationHypothesis(json) {
        this.privTranslationHypothesis = JSON.parse(json);
        this.privTranslationHypothesis.Translation.TranslationStatus = TranslationStatus_1.TranslationStatus[this.privTranslationHypothesis.Translation.TranslationStatus];
    }
    TranslationHypothesis.fromJSON = function (json) {
        return new TranslationHypothesis(json);
    };
    Object.defineProperty(TranslationHypothesis.prototype, "Duration", {
        get: function () {
            return this.privTranslationHypothesis.Duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationHypothesis.prototype, "Offset", {
        get: function () {
            return this.privTranslationHypothesis.Offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationHypothesis.prototype, "Text", {
        get: function () {
            return this.privTranslationHypothesis.Text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationHypothesis.prototype, "Translation", {
        get: function () {
            return this.privTranslationHypothesis.Translation;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationHypothesis;
}());
exports.TranslationHypothesis = TranslationHypothesis;



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var TranslationStatus_1 = __webpack_require__(9);
var TranslationPhrase = /** @class */ (function () {
    function TranslationPhrase(json) {
        this.privTranslationPhrase = JSON.parse(json);
        this.privTranslationPhrase.RecognitionStatus = Exports_1.RecognitionStatus[this.privTranslationPhrase.RecognitionStatus];
        if (this.privTranslationPhrase.Translation !== undefined) {
            this.privTranslationPhrase.Translation.TranslationStatus = TranslationStatus_1.TranslationStatus[this.privTranslationPhrase.Translation.TranslationStatus];
        }
    }
    TranslationPhrase.fromJSON = function (json) {
        return new TranslationPhrase(json);
    };
    Object.defineProperty(TranslationPhrase.prototype, "RecognitionStatus", {
        get: function () {
            return this.privTranslationPhrase.RecognitionStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationPhrase.prototype, "Offset", {
        get: function () {
            return this.privTranslationPhrase.Offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationPhrase.prototype, "Duration", {
        get: function () {
            return this.privTranslationPhrase.Duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationPhrase.prototype, "Text", {
        get: function () {
            return this.privTranslationPhrase.Text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslationPhrase.prototype, "Translation", {
        get: function () {
            return this.privTranslationPhrase.Translation;
        },
        enumerable: true,
        configurable: true
    });
    return TranslationPhrase;
}());
exports.TranslationPhrase = TranslationPhrase;



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var Exports_2 = __webpack_require__(0);
var Exports_3 = __webpack_require__(1);
// tslint:disable-next-line:max-classes-per-file
var TranslationServiceRecognizer = /** @class */ (function (_super) {
    __extends(TranslationServiceRecognizer, _super);
    function TranslationServiceRecognizer(authentication, connectionFactory, audioSource, recognizerConfig, translationRecognizer) {
        var _this = _super.call(this, authentication, connectionFactory, audioSource, recognizerConfig, translationRecognizer) || this;
        _this.privTranslationRecognizer = translationRecognizer;
        return _this;
    }
    TranslationServiceRecognizer.prototype.processTypeSpecificMessages = function (connectionMessage, successCallback, errorCallBack) {
        var resultProps = new Exports_2.PropertyCollection();
        if (connectionMessage.messageType === Exports_1.MessageType.Text) {
            resultProps.setProperty(Exports_2.PropertyId.SpeechServiceResponse_JsonResult, connectionMessage.textBody);
        }
        switch (connectionMessage.path.toLowerCase()) {
            case "translation.hypothesis":
                var result = this.fireEventForResult(Exports_3.TranslationHypothesis.fromJSON(connectionMessage.textBody), resultProps);
                this.privRequestSession.onHypothesis(this.privRequestSession.currentTurnAudioOffset + result.offset);
                if (!!this.privTranslationRecognizer.recognizing) {
                    try {
                        this.privTranslationRecognizer.recognizing(this.privTranslationRecognizer, result);
                        /* tslint:disable:no-empty */
                    }
                    catch (error) {
                        // Not going to let errors in the event handler
                        // trip things up.
                    }
                }
                break;
            case "translation.phrase":
                var translatedPhrase = Exports_3.TranslationPhrase.fromJSON(connectionMessage.textBody);
                this.privRequestSession.onPhraseRecognized(this.privRequestSession.currentTurnAudioOffset + translatedPhrase.Offset + translatedPhrase.Duration);
                if (translatedPhrase.RecognitionStatus === Exports_3.RecognitionStatus.Success) {
                    // OK, the recognition was successful. How'd the translation do?
                    var result_1 = this.fireEventForResult(translatedPhrase, resultProps);
                    if (!!this.privTranslationRecognizer.recognized) {
                        try {
                            this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, result_1);
                            /* tslint:disable:no-empty */
                        }
                        catch (error) {
                            // Not going to let errors in the event handler
                            // trip things up.
                        }
                    }
                    // report result to promise.
                    if (!!successCallback) {
                        try {
                            successCallback(result_1.result);
                        }
                        catch (e) {
                            if (!!errorCallBack) {
                                errorCallBack(e);
                            }
                        }
                        // Only invoke the call back once.
                        // and if it's successful don't invoke the
                        // error after that.
                        successCallback = undefined;
                        errorCallBack = undefined;
                    }
                    break;
                }
                else {
                    var reason = Exports_3.EnumTranslation.implTranslateRecognitionResult(translatedPhrase.RecognitionStatus);
                    var result_2 = new Exports_2.TranslationRecognitionResult(undefined, this.privRequestSession.requestId, reason, translatedPhrase.Text, translatedPhrase.Duration, this.privRequestSession.currentTurnAudioOffset + translatedPhrase.Offset, undefined, connectionMessage.textBody, resultProps);
                    if (reason === Exports_2.ResultReason.Canceled) {
                        var cancelReason = Exports_3.EnumTranslation.implTranslateCancelResult(translatedPhrase.RecognitionStatus);
                        var ev = new Exports_2.TranslationRecognitionCanceledEventArgs(this.privRequestSession.sessionId, cancelReason, null, cancelReason === Exports_2.CancellationReason.Error ? Exports_2.CancellationErrorCode.ServiceError : Exports_2.CancellationErrorCode.NoError, result_2);
                        if (!!this.privTranslationRecognizer.canceled) {
                            try {
                                this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, ev);
                                /* tslint:disable:no-empty */
                            }
                            catch (error) {
                                // Not going to let errors in the event handler
                                // trip things up.
                            }
                        }
                    }
                    else {
                        if (!(this.privRequestSession.isSpeechEnded && reason === Exports_2.ResultReason.NoMatch && translatedPhrase.RecognitionStatus !== Exports_3.RecognitionStatus.InitialSilenceTimeout)) {
                            var ev = new Exports_2.TranslationRecognitionEventArgs(result_2, result_2.offset, this.privRequestSession.sessionId);
                            if (!!this.privTranslationRecognizer.recognized) {
                                try {
                                    this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, ev);
                                    /* tslint:disable:no-empty */
                                }
                                catch (error) {
                                    // Not going to let errors in the event handler
                                    // trip things up.
                                }
                            }
                        }
                    }
                    // report result to promise.
                    if (!!successCallback) {
                        try {
                            successCallback(result_2);
                        }
                        catch (e) {
                            if (!!errorCallBack) {
                                errorCallBack(e);
                            }
                        }
                        // Only invoke the call back once.
                        // and if it's successful don't invoke the
                        // error after that.
                        successCallback = undefined;
                        errorCallBack = undefined;
                    }
                }
                break;
            case "translation.synthesis":
                this.sendSynthesisAudio(connectionMessage.binaryBody, this.privRequestSession.sessionId);
                break;
            case "translation.synthesis.end":
                var synthEnd = Exports_3.TranslationSynthesisEnd.fromJSON(connectionMessage.textBody);
                switch (synthEnd.SynthesisStatus) {
                    case Exports_3.SynthesisStatus.Error:
                        if (!!this.privTranslationRecognizer.synthesizing) {
                            var result_3 = new Exports_2.TranslationSynthesisResult(Exports_2.ResultReason.Canceled, undefined);
                            var retEvent = new Exports_2.TranslationSynthesisEventArgs(result_3, this.privRequestSession.sessionId);
                            try {
                                this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, retEvent);
                                /* tslint:disable:no-empty */
                            }
                            catch (error) {
                                // Not going to let errors in the event handler
                                // trip things up.
                            }
                        }
                        if (!!this.privTranslationRecognizer.canceled) {
                            // And raise a canceled event to send the rich(er) error message back.
                            var canceledResult = new Exports_2.TranslationRecognitionCanceledEventArgs(this.privRequestSession.sessionId, Exports_2.CancellationReason.Error, synthEnd.FailureReason, Exports_2.CancellationErrorCode.ServiceError, null);
                            try {
                                this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, canceledResult);
                                /* tslint:disable:no-empty */
                            }
                            catch (error) {
                                // Not going to let errors in the event handler
                                // trip things up.
                            }
                        }
                        break;
                    case Exports_3.SynthesisStatus.Success:
                        this.sendSynthesisAudio(undefined, this.privRequestSession.sessionId);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };
    // Cancels recognition.
    TranslationServiceRecognizer.prototype.cancelRecognition = function (sessionId, requestId, cancellationReason, errorCode, error, cancelRecoCallback) {
        if (!!this.privTranslationRecognizer.canceled) {
            var properties = new Exports_2.PropertyCollection();
            properties.setProperty(Exports_3.CancellationErrorCodePropertyName, Exports_2.CancellationErrorCode[errorCode]);
            var cancelEvent = new Exports_2.TranslationRecognitionCanceledEventArgs(sessionId, cancellationReason, error, errorCode, undefined);
            try {
                this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, cancelEvent);
                /* tslint:disable:no-empty */
            }
            catch (_a) { }
            if (!!cancelRecoCallback) {
                var result = new Exports_2.TranslationRecognitionResult(undefined, // Translations
                requestId, Exports_2.ResultReason.Canceled, undefined, // Text
                undefined, // Druation
                undefined, // Offset
                error, undefined, // Json
                properties);
                try {
                    cancelRecoCallback(result);
                    /* tslint:disable:no-empty */
                }
                catch (_b) { }
            }
        }
    };
    TranslationServiceRecognizer.prototype.fireEventForResult = function (serviceResult, properties) {
        var translations;
        if (undefined !== serviceResult.Translation.Translations) {
            translations = new Exports_2.Translations();
            for (var _i = 0, _a = serviceResult.Translation.Translations; _i < _a.length; _i++) {
                var translation = _a[_i];
                translations.set(translation.Language, translation.Text);
            }
        }
        var resultReason;
        if (serviceResult instanceof Exports_3.TranslationPhrase) {
            if (serviceResult.Translation.TranslationStatus === Exports_1.TranslationStatus.Success) {
                resultReason = Exports_2.ResultReason.TranslatedSpeech;
            }
            else {
                resultReason = Exports_2.ResultReason.RecognizedSpeech;
            }
        }
        else {
            resultReason = Exports_2.ResultReason.TranslatingSpeech;
        }
        var offset = serviceResult.Offset + this.privRequestSession.currentTurnAudioOffset;
        var result = new Exports_2.TranslationRecognitionResult(translations, this.privRequestSession.requestId, resultReason, serviceResult.Text, serviceResult.Duration, offset, serviceResult.Translation.FailureReason, JSON.stringify(serviceResult), properties);
        var ev = new Exports_2.TranslationRecognitionEventArgs(result, offset, this.privRequestSession.sessionId);
        return ev;
    };
    TranslationServiceRecognizer.prototype.sendSynthesisAudio = function (audio, sessionId) {
        var reason = (undefined === audio) ? Exports_2.ResultReason.SynthesizingAudioCompleted : Exports_2.ResultReason.SynthesizingAudio;
        var result = new Exports_2.TranslationSynthesisResult(reason, audio);
        var retEvent = new Exports_2.TranslationSynthesisEventArgs(result, sessionId);
        if (!!this.privTranslationRecognizer.synthesizing) {
            try {
                this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, retEvent);
                /* tslint:disable:no-empty */
            }
            catch (error) {
                // Not going to let errors in the event handler
                // trip things up.
            }
        }
    };
    return TranslationServiceRecognizer;
}(Exports_3.ServiceRecognizerBase));
exports.TranslationServiceRecognizer = TranslationServiceRecognizer;



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var SpeechDetected = /** @class */ (function () {
    function SpeechDetected(json) {
        this.privSpeechStartDetected = JSON.parse(json);
    }
    SpeechDetected.fromJSON = function (json) {
        return new SpeechDetected(json);
    };
    Object.defineProperty(SpeechDetected.prototype, "Offset", {
        get: function () {
            return this.privSpeechStartDetected.Offset;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechDetected;
}());
exports.SpeechDetected = SpeechDetected;



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var SpeechHypothesis = /** @class */ (function () {
    function SpeechHypothesis(json) {
        this.privSpeechHypothesis = JSON.parse(json);
    }
    SpeechHypothesis.fromJSON = function (json) {
        return new SpeechHypothesis(json);
    };
    Object.defineProperty(SpeechHypothesis.prototype, "Text", {
        get: function () {
            return this.privSpeechHypothesis.Text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechHypothesis.prototype, "Offset", {
        get: function () {
            return this.privSpeechHypothesis.Offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechHypothesis.prototype, "Duration", {
        get: function () {
            return this.privSpeechHypothesis.Duration;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechHypothesis;
}());
exports.SpeechHypothesis = SpeechHypothesis;



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
var Exports_2 = __webpack_require__(1);
// tslint:disable-next-line:max-classes-per-file
var SpeechServiceRecognizer = /** @class */ (function (_super) {
    __extends(SpeechServiceRecognizer, _super);
    function SpeechServiceRecognizer(authentication, connectionFactory, audioSource, recognizerConfig, speechRecognizer) {
        var _this = _super.call(this, authentication, connectionFactory, audioSource, recognizerConfig, speechRecognizer) || this;
        _this.privSpeechRecognizer = speechRecognizer;
        return _this;
    }
    SpeechServiceRecognizer.prototype.processTypeSpecificMessages = function (connectionMessage, successCallback, errorCallBack) {
        var result;
        var resultProps = new Exports_1.PropertyCollection();
        resultProps.setProperty(Exports_1.PropertyId.SpeechServiceResponse_JsonResult, connectionMessage.textBody);
        switch (connectionMessage.path.toLowerCase()) {
            case "speech.hypothesis":
                var hypothesis = Exports_2.SpeechHypothesis.fromJSON(connectionMessage.textBody);
                var offset = hypothesis.Offset + this.privRequestSession.currentTurnAudioOffset;
                result = new Exports_1.SpeechRecognitionResult(this.privRequestSession.requestId, Exports_1.ResultReason.RecognizingSpeech, hypothesis.Text, hypothesis.Duration, offset, undefined, connectionMessage.textBody, resultProps);
                this.privRequestSession.onHypothesis(offset);
                var ev = new Exports_1.SpeechRecognitionEventArgs(result, hypothesis.Duration, this.privRequestSession.sessionId);
                if (!!this.privSpeechRecognizer.recognizing) {
                    try {
                        this.privSpeechRecognizer.recognizing(this.privSpeechRecognizer, ev);
                        /* tslint:disable:no-empty */
                    }
                    catch (error) {
                        // Not going to let errors in the event handler
                        // trip things up.
                    }
                }
                break;
            case "speech.phrase":
                var simple = Exports_2.SimpleSpeechPhrase.fromJSON(connectionMessage.textBody);
                var resultReason = Exports_2.EnumTranslation.implTranslateRecognitionResult(simple.RecognitionStatus);
                this.privRequestSession.onPhraseRecognized(this.privRequestSession.currentTurnAudioOffset + simple.Offset + simple.Duration);
                if (Exports_1.ResultReason.Canceled === resultReason) {
                    var cancelReason = Exports_2.EnumTranslation.implTranslateCancelResult(simple.RecognitionStatus);
                    result = new Exports_1.SpeechRecognitionResult(this.privRequestSession.requestId, resultReason, undefined, undefined, undefined, undefined, connectionMessage.textBody, resultProps);
                    if (!!this.privSpeechRecognizer.canceled) {
                        var cancelEvent = new Exports_1.SpeechRecognitionCanceledEventArgs(cancelReason, undefined, cancelReason === Exports_1.CancellationReason.Error ? Exports_1.CancellationErrorCode.ServiceError : Exports_1.CancellationErrorCode.NoError, undefined, this.privRequestSession.sessionId);
                        try {
                            this.privSpeechRecognizer.canceled(this.privSpeechRecognizer, cancelEvent);
                            /* tslint:disable:no-empty */
                        }
                        catch (_a) { }
                    }
                }
                else {
                    if (!(this.privRequestSession.isSpeechEnded && resultReason === Exports_1.ResultReason.NoMatch && simple.RecognitionStatus !== Exports_2.RecognitionStatus.InitialSilenceTimeout)) {
                        if (this.privRecognizerConfig.parameters.getProperty(Exports_2.OutputFormatPropertyName) === Exports_1.OutputFormat[Exports_1.OutputFormat.Simple]) {
                            result = new Exports_1.SpeechRecognitionResult(this.privRequestSession.requestId, resultReason, simple.DisplayText, simple.Duration, simple.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, connectionMessage.textBody, resultProps);
                        }
                        else {
                            var detailed = Exports_2.DetailedSpeechPhrase.fromJSON(connectionMessage.textBody);
                            result = new Exports_1.SpeechRecognitionResult(this.privRequestSession.requestId, resultReason, detailed.RecognitionStatus === Exports_2.RecognitionStatus.Success ? detailed.NBest[0].Display : undefined, detailed.Duration, detailed.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, connectionMessage.textBody, resultProps);
                        }
                        var event_1 = new Exports_1.SpeechRecognitionEventArgs(result, result.offset, this.privRequestSession.sessionId);
                        if (!!this.privSpeechRecognizer.recognized) {
                            try {
                                this.privSpeechRecognizer.recognized(this.privSpeechRecognizer, event_1);
                                /* tslint:disable:no-empty */
                            }
                            catch (error) {
                                // Not going to let errors in the event handler
                                // trip things up.
                            }
                        }
                    }
                }
                // report result to promise.
                if (!!successCallback) {
                    try {
                        successCallback(result);
                    }
                    catch (e) {
                        if (!!errorCallBack) {
                            errorCallBack(e);
                        }
                    }
                    // Only invoke the call back once.
                    // and if it's successful don't invoke the
                    // error after that.
                    successCallback = undefined;
                    errorCallBack = undefined;
                }
                break;
            default:
                break;
        }
    };
    // Cancels recognition.
    SpeechServiceRecognizer.prototype.cancelRecognition = function (sessionId, requestId, cancellationReason, errorCode, error, cancelRecoCallback) {
        var properties = new Exports_1.PropertyCollection();
        properties.setProperty(Exports_2.CancellationErrorCodePropertyName, Exports_1.CancellationErrorCode[errorCode]);
        if (!!this.privSpeechRecognizer.canceled) {
            var cancelEvent = new Exports_1.SpeechRecognitionCanceledEventArgs(cancellationReason, error, errorCode, undefined, sessionId);
            try {
                this.privSpeechRecognizer.canceled(this.privSpeechRecognizer, cancelEvent);
                /* tslint:disable:no-empty */
            }
            catch (_a) { }
        }
        if (!!cancelRecoCallback) {
            var result = new Exports_1.SpeechRecognitionResult(requestId, Exports_1.ResultReason.Canceled, undefined, // Text
            undefined, // Druation
            undefined, // Offset
            error, undefined, // Json
            properties);
            try {
                cancelRecoCallback(result);
                /* tslint:disable:no-empty */
            }
            catch (_b) { }
        }
    };
    return SpeechServiceRecognizer;
}(Exports_2.ServiceRecognizerBase));
exports.SpeechServiceRecognizer = SpeechServiceRecognizer;



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var DetailedSpeechPhrase = /** @class */ (function () {
    function DetailedSpeechPhrase(json) {
        this.privDetailedSpeechPhrase = JSON.parse(json);
        this.privDetailedSpeechPhrase.RecognitionStatus = Exports_1.RecognitionStatus[this.privDetailedSpeechPhrase.RecognitionStatus];
    }
    DetailedSpeechPhrase.fromJSON = function (json) {
        return new DetailedSpeechPhrase(json);
    };
    Object.defineProperty(DetailedSpeechPhrase.prototype, "RecognitionStatus", {
        get: function () {
            return this.privDetailedSpeechPhrase.RecognitionStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedSpeechPhrase.prototype, "NBest", {
        get: function () {
            return this.privDetailedSpeechPhrase.NBest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedSpeechPhrase.prototype, "Duration", {
        get: function () {
            return this.privDetailedSpeechPhrase.Duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailedSpeechPhrase.prototype, "Offset", {
        get: function () {
            return this.privDetailedSpeechPhrase.Offset;
        },
        enumerable: true,
        configurable: true
    });
    return DetailedSpeechPhrase;
}());
exports.DetailedSpeechPhrase = DetailedSpeechPhrase;



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(1);
var SimpleSpeechPhrase = /** @class */ (function () {
    function SimpleSpeechPhrase(json) {
        this.privSimpleSpeechPhrase = JSON.parse(json);
        this.privSimpleSpeechPhrase.RecognitionStatus = Exports_1.RecognitionStatus[this.privSimpleSpeechPhrase.RecognitionStatus];
    }
    SimpleSpeechPhrase.fromJSON = function (json) {
        return new SimpleSpeechPhrase(json);
    };
    Object.defineProperty(SimpleSpeechPhrase.prototype, "RecognitionStatus", {
        get: function () {
            return this.privSimpleSpeechPhrase.RecognitionStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleSpeechPhrase.prototype, "DisplayText", {
        get: function () {
            return this.privSimpleSpeechPhrase.DisplayText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleSpeechPhrase.prototype, "Offset", {
        get: function () {
            return this.privSimpleSpeechPhrase.Offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleSpeechPhrase.prototype, "Duration", {
        get: function () {
            return this.privSimpleSpeechPhrase.Duration;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleSpeechPhrase;
}());
exports.SimpleSpeechPhrase = SimpleSpeechPhrase;



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class AddedLmIntent
 */
// tslint:disable-next-line:max-classes-per-file
var AddedLmIntent = /** @class */ (function () {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param modelImpl - The model.
     * @param intentName - The intent name.
     */
    function AddedLmIntent(modelImpl, intentName) {
        this.modelImpl = modelImpl;
        this.intentName = intentName;
    }
    return AddedLmIntent;
}());
exports.AddedLmIntent = AddedLmIntent;



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var Exports_2 = __webpack_require__(0);
var Exports_3 = __webpack_require__(1);
// tslint:disable-next-line:max-classes-per-file
var IntentServiceRecognizer = /** @class */ (function (_super) {
    __extends(IntentServiceRecognizer, _super);
    function IntentServiceRecognizer(authentication, connectionFactory, audioSource, recognizerConfig, recognizer) {
        var _this = _super.call(this, authentication, connectionFactory, audioSource, recognizerConfig, recognizer) || this;
        _this.privIntentRecognizer = recognizer;
        _this.privIntentDataSent = false;
        return _this;
    }
    IntentServiceRecognizer.prototype.setIntents = function (addedIntents, umbrellaIntent) {
        this.privAddedLmIntents = addedIntents;
        this.privUmbrellaIntent = umbrellaIntent;
        this.privIntentDataSent = true;
    };
    IntentServiceRecognizer.prototype.processTypeSpecificMessages = function (connectionMessage, successCallback, errorCallBack) {
        var _this = this;
        var result;
        var ev;
        var resultProps = new Exports_2.PropertyCollection();
        if (connectionMessage.messageType === Exports_1.MessageType.Text) {
            resultProps.setProperty(Exports_2.PropertyId.SpeechServiceResponse_JsonResult, connectionMessage.textBody);
        }
        switch (connectionMessage.path.toLowerCase()) {
            case "speech.hypothesis":
                var speechHypothesis = Exports_3.SpeechHypothesis.fromJSON(connectionMessage.textBody);
                result = new Exports_2.IntentRecognitionResult(undefined, this.privRequestSession.requestId, Exports_2.ResultReason.RecognizingIntent, speechHypothesis.Text, speechHypothesis.Duration, speechHypothesis.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, connectionMessage.textBody, resultProps);
                this.privRequestSession.onHypothesis(result.offset);
                ev = new Exports_2.IntentRecognitionEventArgs(result, speechHypothesis.Offset + this.privRequestSession.currentTurnAudioOffset, this.privRequestSession.sessionId);
                if (!!this.privIntentRecognizer.recognizing) {
                    try {
                        this.privIntentRecognizer.recognizing(this.privIntentRecognizer, ev);
                        /* tslint:disable:no-empty */
                    }
                    catch (error) {
                        // Not going to let errors in the event handler
                        // trip things up.
                    }
                }
                break;
            case "speech.phrase":
                var simple = Exports_3.SimpleSpeechPhrase.fromJSON(connectionMessage.textBody);
                result = new Exports_2.IntentRecognitionResult(undefined, this.privRequestSession.requestId, Exports_3.EnumTranslation.implTranslateRecognitionResult(simple.RecognitionStatus), simple.DisplayText, simple.Duration, simple.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, connectionMessage.textBody, resultProps);
                ev = new Exports_2.IntentRecognitionEventArgs(result, result.offset, this.privRequestSession.sessionId);
                var sendEvent = function () {
                    if (!!_this.privIntentRecognizer.recognized) {
                        try {
                            _this.privIntentRecognizer.recognized(_this.privIntentRecognizer, ev);
                            /* tslint:disable:no-empty */
                        }
                        catch (error) {
                            // Not going to let errors in the event handler
                            // trip things up.
                        }
                    }
                    // report result to promise.
                    if (!!successCallback) {
                        try {
                            successCallback(result);
                        }
                        catch (e) {
                            if (!!errorCallBack) {
                                errorCallBack(e);
                            }
                        }
                        // Only invoke the call back once.
                        // and if it's successful don't invoke the
                        // error after that.
                        successCallback = undefined;
                        errorCallBack = undefined;
                    }
                };
                // If intent data was sent, the terminal result for this recognizer is an intent being found.
                // If no intent data was sent, the terminal event is speech recognition being successful.
                if (false === this.privIntentDataSent || Exports_2.ResultReason.NoMatch === ev.result.reason) {
                    // Advance the buffers.
                    this.privRequestSession.onPhraseRecognized(ev.offset + ev.result.duration);
                    sendEvent();
                }
                else {
                    // Squirrel away the args, when the response event arrives it will build upon them
                    // and then return
                    this.privPendingIntentArgs = ev;
                }
                break;
            case "response":
                // Response from LUIS
                ev = this.privPendingIntentArgs;
                this.privPendingIntentArgs = undefined;
                if (undefined === ev) {
                    if ("" === connectionMessage.textBody) {
                        // This condition happens if there is nothing but silence in the
                        // audio sent to the service.
                        return;
                    }
                    // Odd... Not sure this can happen
                    ev = new Exports_2.IntentRecognitionEventArgs(new Exports_2.IntentRecognitionResult(), 0 /*TODO*/, this.privRequestSession.sessionId);
                }
                var intentResponse = Exports_3.IntentResponse.fromJSON(connectionMessage.textBody);
                // If LUIS didn't return anything, send the existing event, else
                // modify it to show the match.
                // See if the intent found is in the list of intents asked for.
                var addedIntent = this.privAddedLmIntents[intentResponse.topScoringIntent.intent];
                if (this.privUmbrellaIntent !== undefined) {
                    addedIntent = this.privUmbrellaIntent;
                }
                if (null !== intentResponse && addedIntent !== undefined) {
                    var intentId = addedIntent.intentName === undefined ? intentResponse.topScoringIntent.intent : addedIntent.intentName;
                    var reason = ev.result.reason;
                    if (undefined !== intentId) {
                        reason = Exports_2.ResultReason.RecognizedIntent;
                    }
                    // make sure, properties is set.
                    var properties = (undefined !== ev.result.properties) ?
                        ev.result.properties : new Exports_2.PropertyCollection();
                    properties.setProperty(Exports_2.PropertyId.LanguageUnderstandingServiceResponse_JsonResult, connectionMessage.textBody);
                    ev = new Exports_2.IntentRecognitionEventArgs(new Exports_2.IntentRecognitionResult(intentId, ev.result.resultId, reason, ev.result.text, ev.result.duration, ev.result.offset, ev.result.errorDetails, ev.result.json, properties), ev.offset, ev.sessionId);
                }
                this.privRequestSession.onPhraseRecognized(ev.offset + ev.result.duration);
                if (!!this.privIntentRecognizer.recognized) {
                    try {
                        this.privIntentRecognizer.recognized(this.privIntentRecognizer, ev);
                        /* tslint:disable:no-empty */
                    }
                    catch (error) {
                        // Not going to let errors in the event handler
                        // trip things up.
                    }
                }
                // report result to promise.
                if (!!successCallback) {
                    try {
                        successCallback(ev.result);
                    }
                    catch (e) {
                        if (!!errorCallBack) {
                            errorCallBack(e);
                        }
                    }
                    // Only invoke the call back once.
                    // and if it's successful don't invoke the
                    // error after that.
                    successCallback = undefined;
                    errorCallBack = undefined;
                }
                break;
            default:
                break;
        }
    };
    // Cancels recognition.
    IntentServiceRecognizer.prototype.cancelRecognition = function (sessionId, requestId, cancellationReason, errorCode, error, cancelRecoCallback) {
        if (!!this.privIntentRecognizer.canceled) {
            var properties = new Exports_2.PropertyCollection();
            properties.setProperty(Exports_3.CancellationErrorCodePropertyName, Exports_2.CancellationErrorCode[errorCode]);
            var cancelEvent = new Exports_2.IntentRecognitionCanceledEventArgs(cancellationReason, error, errorCode, undefined, undefined, sessionId);
            try {
                this.privIntentRecognizer.canceled(this.privIntentRecognizer, cancelEvent);
                /* tslint:disable:no-empty */
            }
            catch (_a) { }
            if (!!cancelRecoCallback) {
                var result = new Exports_2.IntentRecognitionResult(undefined, // Intent Id
                requestId, Exports_2.ResultReason.Canceled, undefined, // Text
                undefined, // Druation
                undefined, // Offset
                error, undefined, // Json
                properties);
                try {
                    cancelRecoCallback(result);
                    /* tslint:disable:no-empty */
                }
                catch (_b) { }
            }
        }
    };
    return IntentServiceRecognizer;
}(Exports_3.ServiceRecognizerBase));
exports.IntentServiceRecognizer = IntentServiceRecognizer;



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
// response
Object.defineProperty(exports, "__esModule", { value: true });
var IntentResponse = /** @class */ (function () {
    function IntentResponse(json) {
        this.privIntentResponse = JSON.parse(json);
    }
    IntentResponse.fromJSON = function (json) {
        return new IntentResponse(json);
    };
    Object.defineProperty(IntentResponse.prototype, "query", {
        get: function () {
            return this.privIntentResponse.query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntentResponse.prototype, "topScoringIntent", {
        get: function () {
            return this.privIntentResponse.topScoringIntent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntentResponse.prototype, "entities", {
        get: function () {
            return this.privIntentResponse.entities;
        },
        enumerable: true,
        configurable: true
    });
    return IntentResponse;
}());
exports.IntentResponse = IntentResponse;



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var RecognitionEvents_1 = __webpack_require__(11);
var ServiceTelemetryListener_Internal_1 = __webpack_require__(94);
var RequestSession = /** @class */ (function () {
    function RequestSession(audioSourceId) {
        var _this = this;
        this.privIsDisposed = false;
        this.privDetachables = new Array();
        this.privIsAudioNodeDetached = false;
        this.privIsRecognizing = false;
        this.privIsSpeechEnded = false;
        this.privTurnStartAudioOffset = 0;
        this.privLastRecoOffset = 0;
        this.privHypothesisReceived = false;
        this.privBytesSent = 0;
        this.onAudioSourceAttachCompleted = function (audioNode, isError, error) {
            _this.privAudioNode = audioNode;
            if (isError) {
                _this.onComplete();
            }
            else {
                _this.onEvent(new RecognitionEvents_1.ListeningStartedEvent(_this.privRequestId, _this.privSessionId, _this.privAudioSourceId, _this.privAudioNodeId));
            }
        };
        this.onPreConnectionStart = function (authFetchEventId, connectionId) {
            _this.privAuthFetchEventId = authFetchEventId;
            _this.privSessionId = connectionId;
            _this.onEvent(new RecognitionEvents_1.ConnectingToServiceEvent(_this.privRequestId, _this.privAuthFetchEventId, _this.privSessionId));
        };
        this.onAuthCompleted = function (isError, error) {
            if (isError) {
                _this.onComplete();
            }
        };
        this.onConnectionEstablishCompleted = function (statusCode, reason) {
            if (statusCode === 200) {
                _this.onEvent(new RecognitionEvents_1.RecognitionStartedEvent(_this.requestId, _this.privAudioSourceId, _this.privAudioNodeId, _this.privAuthFetchEventId, _this.privSessionId));
                if (!!_this.privAudioNode) {
                    _this.privAudioNode.replay();
                }
                _this.privTurnStartAudioOffset = _this.privLastRecoOffset;
                _this.privBytesSent = 0;
                return;
            }
            else if (statusCode === 403) {
                _this.onComplete();
            }
        };
        this.onServiceTurnEndResponse = function (continuousRecognition) {
            if (!continuousRecognition || _this.isSpeechEnded) {
                _this.onComplete();
            }
            else {
                // Start a new request set.
                _this.privTurnStartAudioOffset = _this.privLastRecoOffset;
                _this.privRequestId = Exports_1.createNoDashGuid();
                _this.privAudioNode.replay();
            }
        };
        this.dispose = function (error) {
            if (!_this.privIsDisposed) {
                // we should have completed by now. If we did not its an unknown error.
                _this.privIsDisposed = true;
                for (var _i = 0, _a = _this.privDetachables; _i < _a.length; _i++) {
                    var detachable = _a[_i];
                    detachable.detach();
                }
                _this.privServiceTelemetryListener.dispose();
            }
        };
        this.getTelemetry = function () {
            if (_this.privServiceTelemetryListener.hasTelemetry) {
                return _this.privServiceTelemetryListener.getTelemetry();
            }
            else {
                return null;
            }
        };
        this.onEvent = function (event) {
            if (!!_this.privServiceTelemetryListener) {
                _this.privServiceTelemetryListener.onEvent(event);
            }
            Exports_1.Events.instance.onEvent(event);
        };
        this.onComplete = function () {
            if (!!_this.privIsRecognizing) {
                _this.privIsRecognizing = false;
                _this.detachAudioNode();
            }
        };
        this.detachAudioNode = function () {
            if (!_this.privIsAudioNodeDetached) {
                _this.privIsAudioNodeDetached = true;
                if (_this.privAudioNode) {
                    _this.privAudioNode.detach();
                }
            }
        };
        this.privAudioSourceId = audioSourceId;
        this.privRequestId = Exports_1.createNoDashGuid();
        this.privAudioNodeId = Exports_1.createNoDashGuid();
        this.privRequestCompletionDeferral = new Exports_1.Deferred();
    }
    Object.defineProperty(RequestSession.prototype, "sessionId", {
        get: function () {
            return this.privSessionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "requestId", {
        get: function () {
            return this.privRequestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "audioNodeId", {
        get: function () {
            return this.privAudioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "completionPromise", {
        get: function () {
            return this.privRequestCompletionDeferral.promise();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "isSpeechEnded", {
        get: function () {
            return this.privIsSpeechEnded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "isRecognizing", {
        get: function () {
            return this.privIsRecognizing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "currentTurnAudioOffset", {
        get: function () {
            return this.privTurnStartAudioOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "bytesSent", {
        // The number of bytes sent for the current connection.
        // Counter is reset to 0 each time a connection is established.
        get: function () {
            return this.privBytesSent;
        },
        enumerable: true,
        configurable: true
    });
    RequestSession.prototype.listenForServiceTelemetry = function (eventSource) {
        if (!!this.privServiceTelemetryListener) {
            this.privDetachables.push(eventSource.attachListener(this.privServiceTelemetryListener));
        }
    };
    RequestSession.prototype.startNewRecognition = function () {
        this.privIsSpeechEnded = false;
        this.privIsRecognizing = true;
        this.privTurnStartAudioOffset = 0;
        this.privLastRecoOffset = 0;
        this.privRequestId = Exports_1.createNoDashGuid();
        this.privServiceTelemetryListener = new ServiceTelemetryListener_Internal_1.ServiceTelemetryListener(this.privRequestId, this.privAudioSourceId, this.privAudioNodeId);
        this.onEvent(new RecognitionEvents_1.RecognitionTriggeredEvent(this.requestId, this.privSessionId, this.privAudioSourceId, this.privAudioNodeId));
    };
    RequestSession.prototype.onHypothesis = function (offset) {
        if (!this.privHypothesisReceived) {
            this.privHypothesisReceived = true;
            this.privServiceTelemetryListener.hypothesisReceived(this.privAudioNode.findTimeAtOffset(offset));
        }
    };
    RequestSession.prototype.onPhraseRecognized = function (offset) {
        this.privServiceTelemetryListener.phraseReceived(this.privAudioNode.findTimeAtOffset(offset));
        this.onServiceRecognized(offset);
    };
    RequestSession.prototype.onServiceRecognized = function (offset) {
        this.privLastRecoOffset = offset;
        this.privHypothesisReceived = false;
        this.privAudioNode.shrinkBuffers(offset);
    };
    RequestSession.prototype.onAudioSent = function (bytesSent) {
        this.privBytesSent += bytesSent;
    };
    RequestSession.prototype.onStopRecognizing = function () {
        this.privIsRecognizing = false;
    };
    // Should be called with the audioNode for this session has indicated that it is out of speech.
    RequestSession.prototype.onSpeechEnded = function () {
        this.privIsSpeechEnded = true;
    };
    return RequestSession;
}());
exports.RequestSession = RequestSession;



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var RecognitionEvents_1 = __webpack_require__(11);
// tslint:disable-next-line:max-classes-per-file
var ServiceTelemetryListener = /** @class */ (function () {
    function ServiceTelemetryListener(requestId, audioSourceId, audioNodeId) {
        var _this = this;
        this.privIsDisposed = false;
        this.privListeningTriggerMetric = null;
        this.privMicMetric = null;
        this.privConnectionEstablishMetric = null;
        this.onEvent = function (e) {
            if (_this.privIsDisposed) {
                return;
            }
            if (e instanceof RecognitionEvents_1.RecognitionTriggeredEvent && e.requestId === _this.privRequestId) {
                _this.privListeningTriggerMetric = {
                    End: e.eventTime,
                    Name: "ListeningTrigger",
                    Start: e.eventTime,
                };
            }
            if (e instanceof Exports_1.AudioStreamNodeAttachingEvent && e.audioSourceId === _this.privAudioSourceId && e.audioNodeId === _this.privAudioNodeId) {
                _this.privMicStartTime = e.eventTime;
            }
            if (e instanceof Exports_1.AudioStreamNodeAttachedEvent && e.audioSourceId === _this.privAudioSourceId && e.audioNodeId === _this.privAudioNodeId) {
                _this.privMicStartTime = e.eventTime;
            }
            if (e instanceof Exports_1.AudioSourceErrorEvent && e.audioSourceId === _this.privAudioSourceId) {
                if (!_this.privMicMetric) {
                    _this.privMicMetric = {
                        End: e.eventTime,
                        Error: e.error,
                        Name: "Microphone",
                        Start: _this.privMicStartTime,
                    };
                }
            }
            if (e instanceof Exports_1.AudioStreamNodeErrorEvent && e.audioSourceId === _this.privAudioSourceId && e.audioNodeId === _this.privAudioNodeId) {
                if (!_this.privMicMetric) {
                    _this.privMicMetric = {
                        End: e.eventTime,
                        Error: e.error,
                        Name: "Microphone",
                        Start: _this.privMicStartTime,
                    };
                }
            }
            if (e instanceof Exports_1.AudioStreamNodeDetachedEvent && e.audioSourceId === _this.privAudioSourceId && e.audioNodeId === _this.privAudioNodeId) {
                if (!_this.privMicMetric) {
                    _this.privMicMetric = {
                        End: e.eventTime,
                        Name: "Microphone",
                        Start: _this.privMicStartTime,
                    };
                }
            }
            if (e instanceof RecognitionEvents_1.ConnectingToServiceEvent && e.requestId === _this.privRequestId) {
                _this.privConnectionId = e.sessionId;
            }
            if (e instanceof Exports_1.ConnectionStartEvent && e.connectionId === _this.privConnectionId) {
                _this.privConnectionStartTime = e.eventTime;
            }
            if (e instanceof Exports_1.ConnectionEstablishedEvent && e.connectionId === _this.privConnectionId) {
                if (!_this.privConnectionEstablishMetric) {
                    _this.privConnectionEstablishMetric = {
                        End: e.eventTime,
                        Id: _this.privConnectionId,
                        Name: "Connection",
                        Start: _this.privConnectionStartTime,
                    };
                }
            }
            if (e instanceof Exports_1.ConnectionEstablishErrorEvent && e.connectionId === _this.privConnectionId) {
                if (!_this.privConnectionEstablishMetric) {
                    _this.privConnectionEstablishMetric = {
                        End: e.eventTime,
                        Error: _this.getConnectionError(e.statusCode),
                        Id: _this.privConnectionId,
                        Name: "Connection",
                        Start: _this.privConnectionStartTime,
                    };
                }
            }
            if (e instanceof Exports_1.ConnectionMessageReceivedEvent && e.connectionId === _this.privConnectionId) {
                if (e.message && e.message.headers && e.message.headers.path) {
                    if (!_this.privReceivedMessages[e.message.headers.path]) {
                        _this.privReceivedMessages[e.message.headers.path] = new Array();
                    }
                    _this.privReceivedMessages[e.message.headers.path].push(e.networkReceivedTime);
                }
            }
        };
        this.getTelemetry = function () {
            var metrics = new Array();
            if (_this.privListeningTriggerMetric) {
                metrics.push(_this.privListeningTriggerMetric);
            }
            if (_this.privMicMetric) {
                metrics.push(_this.privMicMetric);
            }
            if (_this.privConnectionEstablishMetric) {
                metrics.push(_this.privConnectionEstablishMetric);
            }
            if (_this.privPhraseLatencies.length > 0) {
                metrics.push({
                    PhraseLatencyMs: _this.privPhraseLatencies,
                });
            }
            if (_this.privHypothesisLatencies.length > 0) {
                metrics.push({
                    FirstHypothesisLatencyMs: _this.privHypothesisLatencies,
                });
            }
            var telemetry = {
                Metrics: metrics,
                ReceivedMessages: _this.privReceivedMessages,
            };
            var json = JSON.stringify(telemetry);
            // We dont want to send the same telemetry again. So clean those out.
            _this.privReceivedMessages = {};
            _this.privListeningTriggerMetric = null;
            _this.privMicMetric = null;
            _this.privConnectionEstablishMetric = null;
            _this.privPhraseLatencies = [];
            _this.privHypothesisLatencies = [];
            return json;
        };
        this.dispose = function () {
            _this.privIsDisposed = true;
        };
        this.getConnectionError = function (statusCode) {
            /*
            -- Websocket status codes --
            NormalClosure = 1000,
            EndpointUnavailable = 1001,
            ProtocolError = 1002,
            InvalidMessageType = 1003,
            Empty = 1005,
            InvalidPayloadData = 1007,
            PolicyViolation = 1008,
            MessageTooBig = 1009,
            MandatoryExtension = 1010,
            InternalServerError = 1011
            */
            switch (statusCode) {
                case 400:
                case 1002:
                case 1003:
                case 1005:
                case 1007:
                case 1008:
                case 1009: return "BadRequest";
                case 401: return "Unauthorized";
                case 403: return "Forbidden";
                case 503:
                case 1001: return "ServerUnavailable";
                case 500:
                case 1011: return "ServerError";
                case 408:
                case 504: return "Timeout";
                default: return "statuscode:" + statusCode.toString();
            }
        };
        this.privRequestId = requestId;
        this.privAudioSourceId = audioSourceId;
        this.privAudioNodeId = audioNodeId;
        this.privReceivedMessages = {};
        this.privPhraseLatencies = [];
        this.privHypothesisLatencies = [];
    }
    ServiceTelemetryListener.prototype.phraseReceived = function (audioReceivedTime) {
        if (audioReceivedTime > 0) { // 0 indicates the time is unknown. Drop it.
            this.privPhraseLatencies.push(Date.now() - audioReceivedTime);
        }
    };
    ServiceTelemetryListener.prototype.hypothesisReceived = function (audioReceivedTime) {
        if (audioReceivedTime > 0) { // 0 indicates the time is unknown. Drop it.
            this.privHypothesisLatencies.push(Date.now() - audioReceivedTime);
        }
    };
    Object.defineProperty(ServiceTelemetryListener.prototype, "hasTelemetry", {
        // Determines if there are any telemetry events to send to the service.
        get: function () {
            return (Object.keys(this.privReceivedMessages).length !== 0 ||
                this.privListeningTriggerMetric !== null ||
                this.privMicMetric !== null ||
                this.privConnectionEstablishMetric !== null ||
                this.privPhraseLatencies.length !== 0 ||
                this.privHypothesisLatencies.length !== 0);
        },
        enumerable: true,
        configurable: true
    });
    return ServiceTelemetryListener;
}());
exports.ServiceTelemetryListener = ServiceTelemetryListener;



/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the JSON used in the speech.context message sent to the speech service.
 * The dynamic grammar is always refreshed from the encapsulated dynamic grammar object.
 */
var SpeechContext = /** @class */ (function () {
    function SpeechContext(dynamicGrammar) {
        this.privContext = {};
        this.privDynamicGrammar = dynamicGrammar;
    }
    /**
     * Adds a section to the speech.context object.
     * @param sectionName Name of the section to add.
     * @param value JSON serializeable object that represents the value.
     */
    SpeechContext.prototype.setSection = function (sectionName, value) {
        this.privContext[sectionName] = value;
    };
    SpeechContext.prototype.toJSON = function () {
        var dgi = this.privDynamicGrammar.generateGrammarObject();
        this.setSection("dgi", dgi);
        var ret = JSON.stringify(this.privContext);
        return ret;
    };
    return SpeechContext;
}());
exports.SpeechContext = SpeechContext;



/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Responsible for building the object to be sent to the speech service to support dynamic grammars.
 * @class DynamicGrammarBuilder
 */
var DynamicGrammarBuilder = /** @class */ (function () {
    function DynamicGrammarBuilder() {
    }
    // Adds one more reference phrases to the dynamic grammar to send.
    // All added phrases are generic phrases.
    DynamicGrammarBuilder.prototype.addPhrase = function (phrase) {
        if (!this.privPhrases) {
            this.privPhrases = [];
        }
        if (phrase instanceof Array) {
            this.privPhrases = this.privPhrases.concat(phrase);
        }
        else {
            this.privPhrases.push(phrase);
        }
    };
    // Clears all phrases stored in the current object.
    DynamicGrammarBuilder.prototype.clearPhrases = function () {
        this.privPhrases = undefined;
    };
    // Adds one or more reference grammars to the current grammar.
    DynamicGrammarBuilder.prototype.addReferenceGrammar = function (grammar) {
        if (!this.privGrammars) {
            this.privGrammars = [];
        }
        if (grammar instanceof Array) {
            this.privGrammars = this.privGrammars.concat(grammar);
        }
        else {
            this.privGrammars.push(grammar);
        }
    };
    // clears all grammars stored on the recognizer.
    DynamicGrammarBuilder.prototype.clearGrammars = function () {
        this.privGrammars = undefined;
    };
    // Generates an object that represents the dynamic grammar used by the Speech Service.
    // This is done by building an object with the correct layout based on the phrases and reference grammars added to this instance
    // of a DynamicGrammarBuilder
    DynamicGrammarBuilder.prototype.generateGrammarObject = function () {
        if (this.privGrammars === undefined && this.privPhrases === undefined) {
            return undefined;
        }
        var retObj = {};
        retObj.ReferenceGrammars = this.privGrammars;
        if (undefined !== this.privPhrases && 0 !== this.privPhrases.length) {
            var retPhrases_1 = [];
            this.privPhrases.forEach(function (value, index, array) {
                retPhrases_1.push({
                    Text: value,
                });
            });
            retObj.Groups = [{ Type: "Generic", Items: retPhrases_1 }];
        }
        return retObj;
    };
    return DynamicGrammarBuilder;
}());
exports.DynamicGrammarBuilder = DynamicGrammarBuilder;



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var AudioStreamFormat_1 = __webpack_require__(7);
var Exports_1 = __webpack_require__(1);
var Exports_2 = __webpack_require__(2);
var FileAudioSource = /** @class */ (function () {
    function FileAudioSource(file, audioSourceId) {
        var _this = this;
        this.privStreams = {};
        this.turnOn = function () {
            if (typeof FileReader === "undefined") {
                var errorMsg = "Browser does not support FileReader.";
                _this.onEvent(new Exports_2.AudioSourceErrorEvent(errorMsg, "")); // initialization error - no streamid at this point
                return Exports_2.PromiseHelper.fromError(errorMsg);
            }
            else if (_this.privFile.name.lastIndexOf(".wav") !== _this.privFile.name.length - 4) {
                var errorMsg = _this.privFile.name + " is not supported. Only WAVE files are allowed at the moment.";
                _this.onEvent(new Exports_2.AudioSourceErrorEvent(errorMsg, ""));
                return Exports_2.PromiseHelper.fromError(errorMsg);
            }
            else if (_this.privFile.size > FileAudioSource.MAX_SIZE) {
                var errorMsg = _this.privFile.name + " exceeds the maximum allowed file size (" + FileAudioSource.MAX_SIZE + ").";
                _this.onEvent(new Exports_2.AudioSourceErrorEvent(errorMsg, ""));
                return Exports_2.PromiseHelper.fromError(errorMsg);
            }
            _this.onEvent(new Exports_2.AudioSourceInitializingEvent(_this.privId)); // no stream id
            _this.onEvent(new Exports_2.AudioSourceReadyEvent(_this.privId));
            return Exports_2.PromiseHelper.fromResult(true);
        };
        this.id = function () {
            return _this.privId;
        };
        this.attach = function (audioNodeId) {
            _this.onEvent(new Exports_2.AudioStreamNodeAttachingEvent(_this.privId, audioNodeId));
            return _this.upload(audioNodeId).onSuccessContinueWith(function (streamReader) {
                _this.onEvent(new Exports_2.AudioStreamNodeAttachedEvent(_this.privId, audioNodeId));
                return {
                    detach: function () {
                        streamReader.close();
                        delete _this.privStreams[audioNodeId];
                        _this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(_this.privId, audioNodeId));
                        _this.turnOff();
                    },
                    id: function () {
                        return audioNodeId;
                    },
                    read: function () {
                        return streamReader.read();
                    },
                };
            });
        };
        this.detach = function (audioNodeId) {
            if (audioNodeId && _this.privStreams[audioNodeId]) {
                _this.privStreams[audioNodeId].close();
                delete _this.privStreams[audioNodeId];
                _this.onEvent(new Exports_2.AudioStreamNodeDetachedEvent(_this.privId, audioNodeId));
            }
        };
        this.turnOff = function () {
            for (var streamId in _this.privStreams) {
                if (streamId) {
                    var stream = _this.privStreams[streamId];
                    if (stream && !stream.isClosed) {
                        stream.close();
                    }
                }
            }
            _this.onEvent(new Exports_2.AudioSourceOffEvent(_this.privId)); // no stream now
            return Exports_2.PromiseHelper.fromResult(true);
        };
        this.upload = function (audioNodeId) {
            return _this.turnOn()
                .onSuccessContinueWith(function (_) {
                var stream = new Exports_2.Stream(audioNodeId);
                _this.privStreams[audioNodeId] = stream;
                var reader = new FileReader();
                var startOffset = 0;
                var endOffset = FileAudioSource.CHUNK_SIZE;
                var processNextChunk = function (event) {
                    if (stream.isClosed) {
                        return; // output stream was closed (somebody called TurnOff). We're done here.
                    }
                    stream.writeStreamChunk({
                        buffer: reader.result,
                        isEnd: false,
                        timeReceived: Date.now(),
                    });
                    if (endOffset < _this.privFile.size) {
                        startOffset = endOffset;
                        endOffset = Math.min(endOffset + FileAudioSource.CHUNK_SIZE, _this.privFile.size);
                        var chunk_1 = _this.privFile.slice(startOffset, endOffset);
                        reader.readAsArrayBuffer(chunk_1);
                    }
                    else {
                        // we've written the entire file to the output stream, can close it now.
                        stream.close();
                    }
                };
                reader.onload = processNextChunk;
                reader.onerror = function (event) {
                    var errorMsg = "Error occurred while processing '" + _this.privFile.name + "'. " + event;
                    _this.onEvent(new Exports_2.AudioStreamNodeErrorEvent(_this.privId, audioNodeId, errorMsg));
                    throw new Error(errorMsg);
                };
                var chunk = _this.privFile.slice(startOffset, endOffset);
                reader.readAsArrayBuffer(chunk);
                return stream.getReader();
            });
        };
        this.onEvent = function (event) {
            _this.privEvents.onEvent(event);
            Exports_2.Events.instance.onEvent(event);
        };
        this.privId = audioSourceId ? audioSourceId : Exports_2.createNoDashGuid();
        this.privEvents = new Exports_2.EventSource();
        this.privFile = file;
    }
    Object.defineProperty(FileAudioSource.prototype, "format", {
        get: function () {
            return FileAudioSource.FILEFORMAT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileAudioSource.prototype, "events", {
        get: function () {
            return this.privEvents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileAudioSource.prototype, "deviceInfo", {
        get: function () {
            return Exports_2.PromiseHelper.fromResult({
                bitspersample: FileAudioSource.FILEFORMAT.bitsPerSample,
                channelcount: FileAudioSource.FILEFORMAT.channels,
                connectivity: Exports_1.connectivity.Unknown,
                manufacturer: "Speech SDK",
                model: "File",
                samplerate: FileAudioSource.FILEFORMAT.samplesPerSec,
                type: Exports_1.type.File,
            });
        },
        enumerable: true,
        configurable: true
    });
    // Recommended sample rate (bytes/second).
    FileAudioSource.SAMPLE_RATE = 16000 * 2; // 16 kHz * 16 bits
    // We should stream audio at no faster than 2x real-time (i.e., send five chunks
    // per second, with the chunk size == sample rate in bytes per second * 2 / 5).
    FileAudioSource.CHUNK_SIZE = FileAudioSource.SAMPLE_RATE * 2 / 5;
    // 10 seconds of audio in bytes =
    // sample rate (bytes/second) * 600 (seconds) + 44 (size of the wave header).
    FileAudioSource.MAX_SIZE = FileAudioSource.SAMPLE_RATE * 600 + 44;
    FileAudioSource.FILEFORMAT = AudioStreamFormat_1.AudioStreamFormat.getWaveFormatPCM(16000, 16, 1);
    return FileAudioSource;
}());
exports.FileAudioSource = FileAudioSource;



/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var PcmRecorder = /** @class */ (function () {
    function PcmRecorder() {
        var _this = this;
        this.record = function (context, mediaStream, outputStream) {
            var desiredSampleRate = 16000;
            var scriptNode = (function () {
                var bufferSize = 0;
                try {
                    return context.createScriptProcessor(bufferSize, 1, 1);
                }
                catch (error) {
                    // Webkit (<= version 31) requires a valid bufferSize.
                    bufferSize = 2048;
                    var audioSampleRate = context.sampleRate;
                    while (bufferSize < 16384 && audioSampleRate >= (2 * desiredSampleRate)) {
                        bufferSize <<= 1;
                        audioSampleRate >>= 1;
                    }
                    return context.createScriptProcessor(bufferSize, 1, 1);
                }
            })();
            var waveStreamEncoder = new Exports_1.RiffPcmEncoder(context.sampleRate, desiredSampleRate);
            var needHeader = true;
            var that = _this;
            scriptNode.onaudioprocess = function (event) {
                var inputFrame = event.inputBuffer.getChannelData(0);
                if (outputStream && !outputStream.isClosed) {
                    var waveFrame = waveStreamEncoder.encode(needHeader, inputFrame);
                    if (!!waveFrame) {
                        outputStream.writeStreamChunk({
                            buffer: waveFrame,
                            isEnd: false,
                            timeReceived: Date.now(),
                        });
                        needHeader = false;
                    }
                }
            };
            var micInput = context.createMediaStreamSource(mediaStream);
            // https://webaudio.github.io/web-audio-api/#audioworklet
            // Using AudioWorklet to improve audio quality and avoid audio glitches due to blocking the UI thread
            if (!!_this.privSpeechProcessorScript && !!context.audioWorklet) {
                context.audioWorklet
                    .addModule(_this.privSpeechProcessorScript)
                    .then(function () {
                    var workletNode = new AudioWorkletNode(context, "speech-processor");
                    workletNode.port.onmessage = function (ev) {
                        var inputFrame = ev.data;
                        if (outputStream && !outputStream.isClosed) {
                            var waveFrame = waveStreamEncoder.encode(needHeader, inputFrame);
                            if (!!waveFrame) {
                                outputStream.writeStreamChunk({
                                    buffer: waveFrame,
                                    isEnd: false,
                                    timeReceived: Date.now(),
                                });
                                needHeader = false;
                            }
                        }
                    };
                    micInput.connect(workletNode);
                    workletNode.connect(context.destination);
                    _this.privMediaResources = {
                        scriptProcessorNode: workletNode,
                        source: micInput,
                        stream: mediaStream,
                    };
                })
                    .catch(function () {
                    micInput.connect(scriptNode);
                    scriptNode.connect(context.destination);
                    _this.privMediaResources = {
                        scriptProcessorNode: scriptNode,
                        source: micInput,
                        stream: mediaStream,
                    };
                });
            }
            else {
                micInput.connect(scriptNode);
                scriptNode.connect(context.destination);
                _this.privMediaResources = {
                    scriptProcessorNode: scriptNode,
                    source: micInput,
                    stream: mediaStream,
                };
            }
        };
        this.releaseMediaResources = function (context) {
            if (_this.privMediaResources) {
                if (_this.privMediaResources.scriptProcessorNode) {
                    _this.privMediaResources.scriptProcessorNode.disconnect(context.destination);
                    _this.privMediaResources.scriptProcessorNode = null;
                }
                if (_this.privMediaResources.source) {
                    _this.privMediaResources.source.disconnect();
                    _this.privMediaResources.stream.getTracks().forEach(function (track) { return track.stop(); });
                    _this.privMediaResources.source = null;
                }
            }
        };
    }
    PcmRecorder.prototype.setWorkletUrl = function (url) {
        this.privSpeechProcessorScript = url;
    };
    return PcmRecorder;
}());
exports.PcmRecorder = PcmRecorder;



/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var WebsocketMessageAdapter_1 = __webpack_require__(19);
var WebsocketConnection = /** @class */ (function () {
    function WebsocketConnection(uri, queryParameters, headers, messageFormatter, proxyInfo, connectionId) {
        var _this = this;
        this.privIsDisposed = false;
        this.dispose = function () {
            _this.privIsDisposed = true;
            if (_this.privConnectionMessageAdapter) {
                _this.privConnectionMessageAdapter.close();
            }
        };
        this.isDisposed = function () {
            return _this.privIsDisposed;
        };
        this.state = function () {
            return _this.privConnectionMessageAdapter.state;
        };
        this.open = function () {
            return _this.privConnectionMessageAdapter.open();
        };
        this.send = function (message) {
            return _this.privConnectionMessageAdapter.send(message);
        };
        this.read = function () {
            return _this.privConnectionMessageAdapter.read();
        };
        if (!uri) {
            throw new Exports_1.ArgumentNullError("uri");
        }
        if (!messageFormatter) {
            throw new Exports_1.ArgumentNullError("messageFormatter");
        }
        this.privMessageFormatter = messageFormatter;
        var queryParams = "";
        var i = 0;
        if (queryParameters) {
            for (var paramName in queryParameters) {
                if (paramName) {
                    queryParams += ((i === 0) && (uri.indexOf("?") === -1)) ? "?" : "&";
                    var val = encodeURIComponent(queryParameters[paramName]);
                    queryParams += paramName + "=" + val;
                    i++;
                }
            }
        }
        if (headers) {
            for (var headerName in headers) {
                if (headerName) {
                    queryParams += i === 0 ? "?" : "&";
                    var val = encodeURIComponent(headers[headerName]);
                    queryParams += headerName + "=" + val;
                    i++;
                }
            }
        }
        this.privUri = uri + queryParams;
        this.privId = connectionId ? connectionId : Exports_1.createNoDashGuid();
        this.privConnectionMessageAdapter = new WebsocketMessageAdapter_1.WebsocketMessageAdapter(this.privUri, this.id, this.privMessageFormatter, proxyInfo);
    }
    Object.defineProperty(WebsocketConnection.prototype, "id", {
        get: function () {
            return this.privId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebsocketConnection.prototype, "events", {
        get: function () {
            return this.privConnectionMessageAdapter.events;
        },
        enumerable: true,
        configurable: true
    });
    return WebsocketConnection;
}());
exports.WebsocketConnection = WebsocketConnection;



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(102)
var ieee754 = __webpack_require__(103)
var isArray = __webpack_require__(104)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101)))

/***/ }),
/* 101 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 103 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 104 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 106 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 107 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(2);
var ReplayableAudioNode = /** @class */ (function () {
    function ReplayableAudioNode(audioSource, format) {
        var _this = this;
        this.privBuffers = [];
        this.privReplayOffset = 0;
        this.privLastShrinkOffset = 0;
        this.privBufferStartOffset = 0;
        this.privBufferSerial = 0;
        this.privBufferedBytes = 0;
        this.privReplay = false;
        this.privLastChunkAcquiredTime = 0;
        this.id = function () {
            return _this.privAudioNode.id();
        };
        this.privAudioNode = audioSource;
        this.privFormat = format;
    }
    // Reads and returns the next chunk of audio buffer.
    // If replay of existing buffers are needed, read() will first seek and replay
    // existing content, and upoin completion it will read new content from the underlying
    // audio node, saving that content into the replayable buffers.
    ReplayableAudioNode.prototype.read = function () {
        var _this = this;
        // if there is a replay request to honor.
        if (!!this.privReplay && this.privBuffers.length !== 0) {
            // Find the start point in the buffers.
            // Offsets are in 100ns increments.
            // So how many bytes do we need to seek to get the right offset?
            var offsetToSeek = this.privReplayOffset - this.privBufferStartOffset;
            var bytesToSeek = Math.round(offsetToSeek * this.privFormat.avgBytesPerSec * 1e-7);
            if (0 !== (bytesToSeek % 2)) {
                bytesToSeek++;
            }
            var i = 0;
            while (i < this.privBuffers.length && bytesToSeek >= this.privBuffers[i].chunk.buffer.byteLength) {
                bytesToSeek -= this.privBuffers[i++].chunk.buffer.byteLength;
            }
            var retVal = this.privBuffers[i].chunk.buffer.slice(bytesToSeek);
            this.privReplayOffset += (retVal.byteLength / this.privFormat.avgBytesPerSec) * 1e+7;
            // If we've reached the end of the buffers, stop replaying.
            if (i === this.privBuffers.length - 1) {
                this.privReplay = false;
            }
            return Exports_1.PromiseHelper.fromResult({
                buffer: retVal,
                isEnd: false,
                timeReceived: this.privBuffers[i].chunk.timeReceived,
            });
        }
        return this.privAudioNode.read()
            .onSuccessContinueWith(function (result) {
            if (result.buffer) {
                _this.privBuffers.push(new BufferEntry(result, _this.privBufferSerial++, _this.privBufferedBytes));
                _this.privBufferedBytes += result.buffer.byteLength;
            }
            return result;
        });
    };
    ReplayableAudioNode.prototype.detach = function () {
        this.privAudioNode.detach();
        this.privBuffers = undefined;
    };
    ReplayableAudioNode.prototype.replay = function () {
        if (0 !== this.privBuffers.length) {
            this.privReplay = true;
            this.privReplayOffset = this.privLastShrinkOffset;
        }
    };
    // Shrinks the existing audio buffers to start at the new offset, or at the
    // beginning of the buffer closest to the requested offset.
    // A replay request will start from the last shrink point.
    ReplayableAudioNode.prototype.shrinkBuffers = function (offset) {
        this.privLastShrinkOffset = offset;
        // Find the start point in the buffers.
        // Offsets are in 100ns increments.
        // So how many bytes do we need to seek to get the right offset?
        var offsetToSeek = offset - this.privBufferStartOffset;
        var bytesToSeek = Math.round(offsetToSeek * this.privFormat.avgBytesPerSec * 1e-7);
        var i = 0;
        while (i < this.privBuffers.length && bytesToSeek >= this.privBuffers[i].chunk.buffer.byteLength) {
            bytesToSeek -= this.privBuffers[i++].chunk.buffer.byteLength;
        }
        this.privBufferStartOffset = Math.round(offset - ((bytesToSeek / this.privFormat.avgBytesPerSec) * 1e+7));
        this.privBuffers = this.privBuffers.slice(i);
    };
    // Finds the time a buffer of audio was first seen by offset.
    ReplayableAudioNode.prototype.findTimeAtOffset = function (offset) {
        if (offset < this.privBufferStartOffset) {
            return 0;
        }
        for (var _i = 0, _a = this.privBuffers; _i < _a.length; _i++) {
            var value = _a[_i];
            var startOffset = (value.byteOffset / this.privFormat.avgBytesPerSec) * 1e7;
            var endOffset = startOffset + ((value.chunk.buffer.byteLength / this.privFormat.avgBytesPerSec) * 1e7);
            if (offset >= startOffset && offset <= endOffset) {
                return value.chunk.timeReceived;
            }
        }
        return 0;
    };
    return ReplayableAudioNode;
}());
exports.ReplayableAudioNode = ReplayableAudioNode;
// Primary use of this class is to help debugging problems with the replay
// code. If the memory cost of alloc / dealloc gets too much, drop it and just use
// the ArrayBuffer directly.
// tslint:disable-next-line:max-classes-per-file
var BufferEntry = /** @class */ (function () {
    function BufferEntry(chunk, serial, byteOffset) {
        this.chunk = chunk;
        this.serial = serial;
        this.byteOffset = byteOffset;
    }
    return BufferEntry;
}());



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
var Exports_1 = __webpack_require__(0);
var ProxyInfo = /** @class */ (function () {
    function ProxyInfo(proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.privProxyHostName = proxyHostName;
        this.privProxyPort = proxyPort;
        this.privProxyUserName = proxyUserName;
        this.privProxyPassword = proxyPassword;
    }
    ProxyInfo.fromRecognizerConfig = function (config) {
        return new ProxyInfo(config.parameters.getProperty(Exports_1.PropertyId.SpeechServiceConnection_ProxyHostName), parseInt(config.parameters.getProperty(Exports_1.PropertyId.SpeechServiceConnection_ProxyPort), 10), config.parameters.getProperty(Exports_1.PropertyId.SpeechServiceConnection_ProxyUserName), config.parameters.getProperty(Exports_1.PropertyId.SpeechServiceConnection_ProxyPassword));
    };
    Object.defineProperty(ProxyInfo.prototype, "HostName", {
        get: function () {
            return this.privProxyHostName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyInfo.prototype, "Port", {
        get: function () {
            return this.privProxyPort;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyInfo.prototype, "UserName", {
        get: function () {
            return this.privProxyUserName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyInfo.prototype, "Password", {
        get: function () {
            return this.privProxyPassword;
        },
        enumerable: true,
        configurable: true
    });
    return ProxyInfo;
}());
exports.ProxyInfo = ProxyInfo;



/***/ })
/******/ ]);
//# sourceMappingURL=microsoft.cognitiveservices.speech.sdk.bundle.js.map