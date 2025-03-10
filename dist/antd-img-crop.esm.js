import { __awaiter, __rest } from 'tslib';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import AntModal from 'antd/es/modal';
import AntUpload from 'antd/es/upload';
import { forwardRef, useState, useRef, useCallback, useImperativeHandle, memo, useMemo } from 'react';
import AntButton from 'antd/es/button';
import AntSlider from 'antd/es/slider';
import Cropper from 'react-easy-crop';

const PREFIX = 'img-crop';
const ZOOM_INITIAL = 1;
const ZOOM_STEP = 0.1;
const ROTATION_INITIAL = 0;
const ROTATION_MIN = -180;
const ROTATION_MAX = 180;
const ROTATION_STEP = 1;
const ASPECT_STEP = 0.01;

const EasyCrop = forwardRef((props, ref) => {
    const { cropperRef, zoomSlider, rotationSlider, aspectSlider, showReset, resetBtnText, modalImage, aspect: ASPECT_INITIAL, minZoom, maxZoom, minAspect, maxAspect, cropShape, showGrid, cropperProps, } = props;
    const [zoom, setZoom] = useState(ZOOM_INITIAL);
    const [rotation, setRotation] = useState(ROTATION_INITIAL);
    const [aspect, setAspect] = useState(ASPECT_INITIAL);
    const isResetActive = zoom !== ZOOM_INITIAL ||
        rotation !== ROTATION_INITIAL ||
        aspect !== ASPECT_INITIAL;
    const onReset = () => {
        setZoom(ZOOM_INITIAL);
        setRotation(ROTATION_INITIAL);
        setAspect(ASPECT_INITIAL);
    };
    const [crop, onCropChange] = useState({ x: 0, y: 0 });
    const cropPixelsRef = useRef({ width: 0, height: 0, x: 0, y: 0 });
    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        cropPixelsRef.current = croppedAreaPixels;
    }, []);
    useImperativeHandle(ref, () => ({
        rotation,
        cropPixelsRef,
        onReset,
    }));
    const wrapperClass = '[display:flex] [align-items:center] [width:60%] [margin-inline:auto]';
    const buttonClass = '[display:flex] [align-items:center] [justify-content:center] [height:32px] [width:32px] [background:transparent] [border:0] [font-family:inherit] [font-size:18px] [cursor:pointer] disabled:[opacity:20%] disabled:[cursor:default]';
    const sliderClass = '[flex:1]';
    return (jsxs(Fragment, { children: [jsx(Cropper, Object.assign({}, cropperProps, { ref: cropperRef, image: modalImage, crop: crop, 
                //
                zoom: zoom, rotation: rotation, aspect: aspect, minZoom: minZoom, maxZoom: maxZoom, zoomWithScroll: zoomSlider, 
                //
                cropShape: cropShape, showGrid: showGrid, onCropChange: onCropChange, onZoomChange: setZoom, onRotationChange: setRotation, onCropComplete: onCropComplete, classes: {
                    containerClassName: `${PREFIX}-container ![position:relative] [width:100%] [height:40vh] [&~section:first-of-type]:[margin-top:16px] [&~section:last-of-type]:[margin-bottom:16px]`,
                    mediaClassName: `${PREFIX}-media`,
                } })), zoomSlider && (jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-zoom ${wrapperClass}`, children: [jsx("button", { className: buttonClass, onClick: () => setZoom(+(zoom - ZOOM_STEP).toFixed(1)), disabled: zoom - ZOOM_STEP < minZoom, children: "\uFF0D" }), jsx(AntSlider, { className: sliderClass, min: minZoom, max: maxZoom, step: ZOOM_STEP, value: zoom, onChange: setZoom }), jsx("button", { className: buttonClass, onClick: () => setZoom(+(zoom + ZOOM_STEP).toFixed(1)), disabled: zoom + ZOOM_STEP > maxZoom, children: "\uFF0B" })] })), rotationSlider && (jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-rotation ${wrapperClass}`, children: [jsx("button", { className: `${buttonClass} [font-size:16px]`, onClick: () => setRotation(rotation - ROTATION_STEP), disabled: rotation === ROTATION_MIN, children: "\u21BA" }), jsx(AntSlider, { className: sliderClass, min: ROTATION_MIN, max: ROTATION_MAX, step: ROTATION_STEP, value: rotation, onChange: setRotation }), jsx("button", { className: `${buttonClass} [font-size:16px]`, onClick: () => setRotation(rotation + ROTATION_STEP), disabled: rotation === ROTATION_MAX, children: "\u21BB" })] })), aspectSlider && (jsxs("section", { className: `${PREFIX}-control ${PREFIX}-control-aspect ${wrapperClass}`, children: [jsx("button", { className: buttonClass, onClick: () => setAspect(+(aspect - ASPECT_STEP).toFixed(2)), disabled: aspect - ASPECT_STEP < minAspect, children: "\u2195" }), jsx(AntSlider, { className: sliderClass, min: minAspect, max: maxAspect, step: ASPECT_STEP, value: aspect, onChange: setAspect }), jsx("button", { className: buttonClass, onClick: () => setAspect(+(aspect + ASPECT_STEP).toFixed(2)), disabled: aspect + ASPECT_STEP > maxAspect, children: "\u2194" })] })), showReset && (zoomSlider || rotationSlider || aspectSlider) && (jsx(AntButton, { className: "[bottom:20px] [position:absolute]", style: isResetActive ? {} : { opacity: 0.3, pointerEvents: 'none' }, onClick: onReset, children: resetBtnText }))] }));
});
var EasyCrop$1 = memo(EasyCrop);

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

const ImgCrop = forwardRef((props, cropperRef) => {
    const { quality = 0.4, fillColor = 'white', zoomSlider = true, rotationSlider = false, aspectSlider = false, showReset = false, resetText, aspect = 1, minZoom = 1, maxZoom = 3, minAspect = 0.5, maxAspect = 2, cropShape = 'rect', showGrid = false, cropperProps, modalClassName, modalTitle, modalWidth, modalOk, modalCancel, onModalOk, onModalCancel, modalProps, beforeCrop, children, } = props;
    const cb = useRef({});
    cb.current.onModalOk = onModalOk;
    cb.current.onModalCancel = onModalCancel;
    cb.current.beforeCrop = beforeCrop;
    /**
     * crop
     */
    const easyCropRef = useRef(null);
    const getCropCanvas = useCallback((target) => {
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
    const [modalImage, setModalImage] = useState('');
    const onCancel = useRef();
    const onOk = useRef();
    const runBeforeUpload = useCallback((_a) => __awaiter(void 0, [_a], void 0, function* ({ beforeUpload, file, resolve, reject, }) {
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
    const getNewBeforeUpload = useCallback((beforeUpload) => {
        return ((file, fileList) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
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
                onOk.current = (event) => __awaiter(void 0, void 0, void 0, function* () {
                    setModalImage('');
                    easyCropRef.current.onReset();
                    const canvas = getCropCanvas(event.target);
                    const { type, name, uid } = processedFile;
                    canvas.toBlob((blob) => __awaiter(void 0, void 0, void 0, function* () {
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
    const getNewUpload = useCallback((children) => {
        const upload = Array.isArray(children) ? children[0] : children;
        const _a = upload.props, { beforeUpload, accept } = _a, restUploadProps = __rest(_a, ["beforeUpload", "accept"]);
        return Object.assign(Object.assign({}, upload), { props: Object.assign(Object.assign({}, restUploadProps), { accept: accept || 'image/*', beforeUpload: getNewBeforeUpload(beforeUpload) }) });
    }, [getNewBeforeUpload]);
    /**
     * modal
     */
    const modalBaseProps = useMemo(() => {
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
    return (jsxs(Fragment, { children: [getNewUpload(children), modalImage && (jsx(AntModal, Object.assign({}, modalProps, modalBaseProps, { open: true, title: title, onCancel: onCancel.current, onOk: onOk.current, wrapClassName: wrapClassName, maskClosable: false, destroyOnClose: true, children: jsx(EasyCrop$1, { ref: easyCropRef, cropperRef: cropperRef, zoomSlider: zoomSlider, rotationSlider: rotationSlider, aspectSlider: aspectSlider, showReset: showReset, resetBtnText: resetBtnText, modalImage: modalImage, aspect: aspect, minZoom: minZoom, maxZoom: maxZoom, minAspect: minAspect, maxAspect: maxAspect, cropShape: cropShape, showGrid: showGrid, cropperProps: cropperProps }) })))] }));
});

export { ImgCrop as default };
