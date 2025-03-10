'use strict';

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var AntModal = require('antd/lib/modal');
var AntUpload = require('antd/lib/upload');
var react = require('react');
var AntButton = require('antd/lib/button');
var AntSlider = require('antd/lib/slider');
var Cropper = require('react-easy-crop');

const PREFIX = 'img-crop';
const ZOOM_INITIAL = 1;
const ZOOM_STEP = 0.1;
const ROTATION_INITIAL = 0;
const ROTATION_MIN = -180;
const ROTATION_MAX = 180;
const ROTATION_STEP = 1;
const ASPECT_STEP = 0.01;

const EasyCrop = react.forwardRef((props, ref) => {
    const { cropperRef, zoomSlider, rotationSlider, aspectSlider, showReset, resetBtnText, modalImage, aspect: ASPECT_INITIAL, minZoom, maxZoom, minAspect, maxAspect, cropShape, showGrid, cropperProps, } = props;
    const [zoom, setZoom] = react.useState(ZOOM_INITIAL);
    const [rotation, setRotation] = react.useState(ROTATION_INITIAL);
    const [aspect, setAspect] = react.useState(ASPECT_INITIAL);
    const isResetActive = zoom !== ZOOM_INITIAL ||
        rotation !== ROTATION_INITIAL ||
        aspect !== ASPECT_INITIAL;
    const onReset = () => {
        setZoom(ZOOM_INITIAL);
        setRotation(ROTATION_INITIAL);
        setAspect(ASPECT_INITIAL);
    };
    const [crop, onCropChange] = react.useState({ x: 0, y: 0 });
    const cropPixelsRef = react.useRef({ width: 0, height: 0, x: 0, y: 0 });
    const onCropComplete = react.useCallback((_, croppedAreaPixels) => {
        cropPixelsRef.current = croppedAreaPixels;
    }, []);
    react.useImperativeHandle(ref, () => ({
        rotation,
        cropPixelsRef,
        onReset,
    }));
    const wrapperClass = '[display:flex] [align-items:center] [width:60%] [margin-inline:auto]';
    const buttonClass = '[display:flex] [align-items:center] [justify-content:center] [height:32px] [width:32px] [background:transparent] [border:0] [font-family:inherit] [font-size:18px] [cursor:pointer] disabled:[opacity:20%] disabled:[cursor:default]';
    const sliderClass = '[flex:1]';
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Cropper, Object.assign({}, cropperProps, { ref: cropperRef, image: modalImage, crop: crop, 
                //
                zoom: zoom, rotation: rotation, aspect: aspect, minZoom: minZoom, maxZoom: maxZoom, zoomWithScroll: zoomSlider, 
                //
                cropShape: cropShape, showGrid: showGrid, onCropChange: onCropChange, onZoomChange: setZoom, onRotationChange: setRotation, onCropComplete: onCropComplete, classes: {
                    containerClassName: `${PREFIX}-container ![position:relative] [width:100%] [height:40vh] [&~section:first-of-type]:[margin-top:16px] [&~section:last-of-type]:[margin-bottom:16px]`,
                    mediaClassName: `${PREFIX}-media`,
                } })), zoomSlider && (jsxRuntime.jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-zoom ${wrapperClass}`, children: [jsxRuntime.jsx("button", { className: buttonClass, onClick: () => setZoom(+(zoom - ZOOM_STEP).toFixed(1)), disabled: zoom - ZOOM_STEP < minZoom, children: "\uFF0D" }), jsxRuntime.jsx(AntSlider, { className: sliderClass, min: minZoom, max: maxZoom, step: ZOOM_STEP, value: zoom, onChange: setZoom }), jsxRuntime.jsx("button", { className: buttonClass, onClick: () => setZoom(+(zoom + ZOOM_STEP).toFixed(1)), disabled: zoom + ZOOM_STEP > maxZoom, children: "\uFF0B" })] })), rotationSlider && (jsxRuntime.jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-rotation ${wrapperClass}`, children: [jsxRuntime.jsx("button", { className: `${buttonClass} [font-size:16px]`, onClick: () => setRotation(rotation - ROTATION_STEP), disabled: rotation === ROTATION_MIN, children: "\u21BA" }), jsxRuntime.jsx(AntSlider, { className: sliderClass, min: ROTATION_MIN, max: ROTATION_MAX, step: ROTATION_STEP, value: rotation, onChange: setRotation }), jsxRuntime.jsx("button", { className: `${buttonClass} [font-size:16px]`, onClick: () => setRotation(rotation + ROTATION_STEP), disabled: rotation === ROTATION_MAX, children: "\u21BB" })] })), aspectSlider && (jsxRuntime.jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-aspect ${wrapperClass}`, children: [jsxRuntime.jsx("button", { className: buttonClass, onClick: () => setAspect(+(aspect - ASPECT_STEP).toFixed(2)), disabled: aspect - ASPECT_STEP < minAspect, children: "\u2195" }), jsxRuntime.jsx(AntSlider, { className: sliderClass, min: minAspect, max: maxAspect, step: ASPECT_STEP, value: aspect, onChange: setAspect }), jsxRuntime.jsx("button", { className: buttonClass, onClick: () => setAspect(+(aspect + ASPECT_STEP).toFixed(2)), disabled: aspect + ASPECT_STEP > maxAspect, children: "\u2194" })] })), showReset && (zoomSlider || rotationSlider || aspectSlider) && (jsxRuntime.jsx(AntButton, { className: "[bottom:20px] [position:absolute]", style: isResetActive ? {} : { opacity: 0.3, pointerEvents: 'none' }, onClick: onReset, children: resetBtnText }))] }));
});
var EasyCrop$1 = react.memo(EasyCrop);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".\\[align-items\\:center\\]{align-items:center}.\\[background\\:transparent\\]{background:transparent}.\\[border\\:0\\]{border:0}.\\[bottom\\:20px\\]{bottom:20px}.\\[cursor\\:pointer\\]{cursor:pointer}.\\[display\\:flex\\]{display:flex}.\\[flex\\:1\\]{flex:1}.\\[font-family\\:inherit\\]{font-family:inherit}.\\[font-size\\:16px\\]{font-size:16px}.\\[font-size\\:18px\\]{font-size:18px}.\\[height\\:32px\\]{height:32px}.\\[height\\:40vh\\]{height:40vh}.\\[justify-content\\:center\\]{justify-content:center}.\\[margin-inline\\:auto\\]{margin-inline:auto}.\\[position\\:absolute\\]{position:absolute}.\\!\\[position\\:relative\\]{position:relative!important}.\\[width\\:100\\%\\]{width:100%}.\\[width\\:32px\\]{width:32px}.\\[width\\:60\\%\\]{width:60%}.disabled\\:\\[cursor\\:default\\]:disabled{cursor:default}.disabled\\:\\[opacity\\:20\\%\\]:disabled{opacity:20%}.\\[\\&\\~section\\:first-of-type\\]\\:\\[margin-top\\:16px\\]~section:first-of-type{margin-top:16px}.\\[\\&\\~section\\:last-of-type\\]\\:\\[margin-bottom\\:16px\\]~section:last-of-type{margin-bottom:16px}";
styleInject(css_248z,{"insertAt":"top"});

const ImgCrop = react.forwardRef((props, cropperRef) => {
    const { quality = 0.4, fillColor = 'white', zoomSlider = true, rotationSlider = false, aspectSlider = false, showReset = false, resetText, aspect = 1, minZoom = 1, maxZoom = 3, minAspect = 0.5, maxAspect = 2, cropShape = 'rect', showGrid = false, cropperProps, modalClassName, modalTitle, modalWidth, modalOk, modalCancel, onModalOk, onModalCancel, modalProps, beforeCrop, children, } = props;
    const cb = react.useRef({});
    cb.current.onModalOk = onModalOk;
    cb.current.onModalCancel = onModalCancel;
    cb.current.beforeCrop = beforeCrop;
    /**
     * crop
     */
    const easyCropRef = react.useRef(null);
    const getCropCanvas = react.useCallback((target) => {
        var _a;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const context = ((_a = target === null || target === void 0 ? void 0 : target.getRootNode) === null || _a === void 0 ? void 0 : _a.call(target)) || document;
        const imgSource = context.querySelector(`.${PREFIX}-media`);
        const { width: cropWidth, height: cropHeight, x: cropX, y: cropY, } = easyCropRef.current.cropPixelsRef.current;
        if (rotationSlider &&
            easyCropRef.current.rotation !== ROTATION_INITIAL) {
            const { naturalWidth: imgWidth, naturalHeight: imgHeight } = imgSource;
            const angle = easyCropRef.current.rotation * (Math.PI / 180);
            // get container for rotated image
            const sine = Math.abs(Math.sin(angle));
            const cosine = Math.abs(Math.cos(angle));
            const squareWidth = imgWidth * cosine + imgHeight * sine;
            const squareHeight = imgHeight * cosine + imgWidth * sine;
            canvas.width = squareWidth;
            canvas.height = squareHeight;
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, squareWidth, squareHeight);
            // rotate container
            const squareHalfWidth = squareWidth / 2;
            const squareHalfHeight = squareHeight / 2;
            ctx.translate(squareHalfWidth, squareHalfHeight);
            ctx.rotate(angle);
            ctx.translate(-squareHalfWidth, -squareHalfHeight);
            // draw rotated image
            const imgX = (squareWidth - imgWidth) / 2;
            const imgY = (squareHeight - imgHeight) / 2;
            ctx.drawImage(imgSource, 0, 0, imgWidth, imgHeight, imgX, imgY, imgWidth, imgHeight);
            // crop rotated image
            const imgData = ctx.getImageData(0, 0, squareWidth, squareHeight);
            canvas.width = cropWidth;
            canvas.height = cropHeight;
            ctx.putImageData(imgData, -cropX, -cropY);
        }
        else {
            canvas.width = cropWidth;
            canvas.height = cropHeight;
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, cropWidth, cropHeight);
            ctx.drawImage(imgSource, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
        }
        return canvas;
    }, [fillColor, rotationSlider]);
    /**
     * upload
     */
    const [modalImage, setModalImage] = react.useState('');
    const onCancel = react.useRef();
    const onOk = react.useRef();
    const runBeforeUpload = react.useCallback((_a) => tslib.__awaiter(void 0, [_a], void 0, function* ({ beforeUpload, file, resolve, reject, }) {
        const rawFile = file;
        if (typeof beforeUpload !== 'function') {
            resolve(rawFile);
            return;
        }
        try {
            // https://ant.design/components/upload-cn#api
            // https://github.com/ant-design/ant-design/blob/master/components/upload/Upload.tsx#L152-L178
            const result = yield beforeUpload(file, [file]);
            if (result === false) {
                resolve(false);
            }
            else {
                resolve((result !== true && result) || rawFile);
            }
        }
        catch (err) {
            reject(err);
        }
    }), []);
    const getNewBeforeUpload = react.useCallback((beforeUpload) => {
        return ((file, fileList) => {
            return new Promise((resolve, reject) => tslib.__awaiter(void 0, void 0, void 0, function* () {
                let processedFile = file;
                if (typeof cb.current.beforeCrop === 'function') {
                    try {
                        const result = yield cb.current.beforeCrop(file, fileList);
                        if (result === false) {
                            return runBeforeUpload({ beforeUpload, file, resolve, reject }); // not open modal
                        }
                        if (result !== true) {
                            processedFile = result || file; // will open modal
                        }
                    }
                    catch (err) {
                        return runBeforeUpload({ beforeUpload, file, resolve, reject }); // not open modal
                    }
                }
                // read file
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    if (typeof reader.result === 'string') {
                        setModalImage(reader.result); // open modal
                    }
                });
                reader.readAsDataURL(processedFile);
                // on modal cancel
                onCancel.current = () => {
                    var _a, _b;
                    setModalImage('');
                    easyCropRef.current.onReset();
                    let hasResolveCalled = false;
                    (_b = (_a = cb.current).onModalCancel) === null || _b === void 0 ? void 0 : _b.call(_a, (LIST_IGNORE) => {
                        resolve(LIST_IGNORE);
                        hasResolveCalled = true;
                    });
                    if (!hasResolveCalled) {
                        resolve(AntUpload.LIST_IGNORE);
                    }
                };
                // on modal confirm
                onOk.current = (event) => tslib.__awaiter(void 0, void 0, void 0, function* () {
                    setModalImage('');
                    easyCropRef.current.onReset();
                    const canvas = getCropCanvas(event.target);
                    const { type, name, uid } = processedFile;
                    canvas.toBlob((blob) => tslib.__awaiter(void 0, void 0, void 0, function* () {
                        const newFile = new File([blob], name, { type });
                        Object.assign(newFile, { uid });
                        runBeforeUpload({
                            beforeUpload,
                            file: newFile,
                            resolve: (file) => {
                                var _a, _b;
                                file.originalFile = processedFile;
                                resolve(file);
                                (_b = (_a = cb.current).onModalOk) === null || _b === void 0 ? void 0 : _b.call(_a, file);
                            },
                            reject: (err) => {
                                var _a, _b;
                                reject(err);
                                (_b = (_a = cb.current).onModalOk) === null || _b === void 0 ? void 0 : _b.call(_a, err);
                            },
                        });
                    }), type, quality);
                });
            }));
        });
    }, [getCropCanvas, quality, runBeforeUpload]);
    const getNewUpload = react.useCallback((children) => {
        const upload = Array.isArray(children) ? children[0] : children;
        const _a = upload.props, { beforeUpload, accept } = _a, restUploadProps = tslib.__rest(_a, ["beforeUpload", "accept"]);
        return Object.assign(Object.assign({}, upload), { props: Object.assign(Object.assign({}, restUploadProps), { accept: accept || 'image/*', beforeUpload: getNewBeforeUpload(beforeUpload) }) });
    }, [getNewBeforeUpload]);
    /**
     * modal
     */
    const modalBaseProps = react.useMemo(() => {
        const obj = {};
        if (modalWidth !== undefined)
            obj.width = modalWidth;
        if (modalOk !== undefined)
            obj.okText = modalOk;
        if (modalCancel !== undefined)
            obj.cancelText = modalCancel;
        return obj;
    }, [modalCancel, modalOk, modalWidth]);
    const wrapClassName = `${PREFIX}-modal${modalClassName ? ` ${modalClassName}` : ''}`;
    const lang = typeof window === 'undefined' ? '' : window.navigator.language;
    const isCN = lang === 'zh-CN';
    const title = modalTitle || (isCN ? '编辑图片' : 'Edit image');
    const resetBtnText = resetText || (isCN ? '重置' : 'Reset');
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [getNewUpload(children), modalImage && (jsxRuntime.jsx(AntModal, Object.assign({}, modalProps, modalBaseProps, { open: true, title: title, onCancel: onCancel.current, onOk: onOk.current, wrapClassName: wrapClassName, maskClosable: false, destroyOnClose: true, children: jsxRuntime.jsx(EasyCrop$1, { ref: easyCropRef, cropperRef: cropperRef, zoomSlider: zoomSlider, rotationSlider: rotationSlider, aspectSlider: aspectSlider, showReset: showReset, resetBtnText: resetBtnText, modalImage: modalImage, aspect: aspect, minZoom: minZoom, maxZoom: maxZoom, minAspect: minAspect, maxAspect: maxAspect, cropShape: cropShape, showGrid: showGrid, cropperProps: cropperProps }) })))] }));
});

module.exports = ImgCrop;
