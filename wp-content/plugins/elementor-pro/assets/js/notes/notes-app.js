(self["webpackChunkelementor_pro_notes"] = self["webpackChunkelementor_pro_notes"] || []).push([["notes-app"],{

/***/ "../assets/js/app/app.js":
/*!*******************************!*\
  !*** ../assets/js/app/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_marks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/marks */ "../assets/js/app/components/marks.js");
/* harmony import */ var _components_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panel */ "../assets/js/app/components/panel.js");
/* harmony import */ var _query_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-client */ "../assets/js/app/query-client.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ "../../../node_modules/react-query/devtools/index.js");








var store = window.top.$e.store.getReduxStore();
function App() {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__.default)(),
      isDebug = _useNotesConfig.is_debug,
      Wrapper = isDebug ? (react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode) : (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
    client: _query_client__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_marks__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_panel__WEBPACK_IMPORTED_MODULE_2__.default, null), isDebug && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__.ReactQueryDevtools, {
    initialIsOpen: false
  }))));
}

/***/ }),

/***/ "../assets/js/app/components/marks-edit-note-form.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/marks-edit-note-form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksEditNoteForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _marks_note_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-note-textarea */ "../assets/js/app/components/marks-note-textarea.js");
/* harmony import */ var _shared_note_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/note-form */ "../assets/js/app/components/shared/note-form.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");










function MarksEditNoteForm(props) {
  var updateMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_5__.useUpdateMutation)(),
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0 === props.note.content.length),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      isButtonDisabled = _useState2[0],
      setIsButtonDisabled = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var content;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              content = e.target.closest('form').content.value;
              _context.next = 4;
              return updateMutation.mutateAsync({
                id: props.note.id,
                values: {
                  content: content
                }
              });

            case 4:
              props.onClose();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_7__.default, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_textarea__WEBPACK_IMPORTED_MODULE_6__.default, {
    name: "content",
    id: "content",
    disabled: updateMutation.isLoading,
    defaultValue: props.note.content,
    onMetaAndEnterKeyDown: onSubmit,
    onChange: function onChange(e) {
      return setIsButtonDisabled(0 === e.target.value.length);
    },
    isReply: props.note.isReply()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_7__.default.ButtonsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    disabled: updateMutation.isLoading || isButtonDisabled,
    type: "submit"
  }, __('Save', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    disabled: updateMutation.isLoading,
    variant: 'outlined',
    type: "reset",
    onClick: function onClick() {
      return props.onClose();
    }
  }, __('Cancel', 'elementor-pro'))));
}
MarksEditNoteForm.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_8__.default).isRequired,
  onClose: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-element-portal.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/marks-element-portal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksElementPortal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-portal */ "../../../node_modules/@radix-ui/react-portal/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject;






var StyledPortal = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_4__.Portal)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tposition: absolute;\n\tinset-block-start: -20px;\n\tinset-inline-end: -5px;\n"])));
function MarksElementPortal(props) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      current: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getNoteCapableElements)([props.elementId])[0] || null
    };
  }, [props.elementId]); // Don't render marker of a non-existing element.

  if (!ref.current) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPortal, {
    containerRef: ref,
    "data-e-notes-portal": true
  }, props.children);
}
MarksElementPortal.propTypes = {
  elementId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/marks-new-thread-form.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/marks-new-thread-form.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNewThreadForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _marks_note_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marks-note-textarea */ "../assets/js/app/components/marks-note-textarea.js");
/* harmony import */ var _shared_note_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/note-form */ "../assets/js/app/components/shared/note-form.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];










function MarksNewThreadForm() {
  var _useActiveThread = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_6__.default)(),
      activeThread = _useActiveThread.activeThread,
      clearActive = _useActiveThread.clearActive,
      setActive = _useActiveThread.setActive,
      createMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_5__.useCreateMutation)(),
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      isButtonDisabled = _useState2[0],
      setIsButtonDisabled = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var content, createdThread;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              content = e.target.closest('form').content.value;
              _context.next = 4;
              return createMutation.mutateAsync({
                elementId: activeThread.data.elementId,
                parentId: 0,
                content: content
              });

            case 4:
              createdThread = _context.sent;
              setActive({
                type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_6__.THREAD,
                data: {
                  noteId: createdThread.id
                }
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_8__.default, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_textarea__WEBPACK_IMPORTED_MODULE_7__.default, {
    disabled: createMutation.isLoading,
    name: "content",
    onMetaAndEnterKeyDown: onSubmit,
    onChange: function onChange(e) {
      return setIsButtonDisabled(0 === e.target.value.length);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_8__.default.ButtonsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    disabled: createMutation.isLoading || isButtonDisabled,
    type: "submit"
  }, __('Leave a note', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    disabled: createMutation.isLoading,
    variant: 'outlined',
    type: "reset",
    onClick: clearActive
  }, __('Cancel', 'elementor-pro'))));
}

/***/ }),

/***/ "../assets/js/app/components/marks-new-thread.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/marks-new-thread.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNewThread)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _ui_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/marker */ "../assets/js/app/components/ui/marker.js");
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _marks_new_thread_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marks-new-thread-form */ "../assets/js/app/components/marks-new-thread-form.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-scroll-into-view */ "../assets/js/app/hooks/use-scroll-into-view.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");


var _templateObject;












var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tdisplay: flex !important;\n\tflex-direction: column !important;\n\tgap: 28px !important;\n\tpadding: 20px 16px !important;\n\twidth: 360px !important;\n\tborder-radius: 4px !important;\n"])));
function MarksNewThread() {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_6__.default)(),
      direction = _useNotesConfig.direction,
      _useActiveThread = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__.default)(),
      activeThread = _useActiveThread.activeThread,
      clearActive = _useActiveThread.clearActive,
      isActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__.NEW_THREAD === activeThread.type;
  }, [activeThread]),
      ref = (0,_hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_8__.default)(isActive);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__.default, {
    open: isActive,
    onOpenChange: function onOpenChange(isOpen) {
      if (!isOpen) {
        clearActive();
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: 'transparent',
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_marker__WEBPACK_IMPORTED_MODULE_3__.default, {
    variant: "active",
    size: "md"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__.default.Content, {
    align: 'rtl' === direction ? 'end' : 'start',
    alignOffset: 20,
    sideOffset: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_marks_new_thread_form__WEBPACK_IMPORTED_MODULE_5__.default, null))));
}

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-delete-dialog.js":
/*!***********************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-delete-dialog.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/alert-dialog/alert-dialog */ "../assets/js/app/components/ui/alert-dialog/alert-dialog.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _hooks_use_watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-watch */ "../assets/js/app/hooks/use-watch.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





function MarksNoteActionsDeleteDialog(props) {
  var deleteMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_4__.useDeleteMutation)();
  (0,_hooks_use_watch__WEBPACK_IMPORTED_MODULE_3__.default)(function () {
    if (props.onLoadingChange) {
      props.onLoadingChange(deleteMutation.isLoading);
    }
  }, [deleteMutation.isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default, {
    open: props.isOpen,
    onOpenChange: props.onOpenChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.DescriptionContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.Title, null, props.note.isReply() ? __('Delete this reply?', 'elementor-pro') : __('Delete this note?', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.Description, null, props.note.isReply() ? __('Deleted replies can\'t be recovered.', 'elementor-pro') : __('Deleted notes can\'t be recovered.', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.ActionsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.Cancel, null, __('Cancel', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.default.Action, {
    onClick: function onClick() {
      return deleteMutation.mutateAsync({
        id: props.note.id,
        parentId: props.note.parentId,
        force: true
      });
    }
  }, __('Delete', 'elementor-pro')))));
}
MarksNoteActionsDeleteDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_2__.default),
  onLoadingChange: PropTypes.func
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-read.js":
/*!**************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-read.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsRead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dropdown/dropdown */ "../assets/js/app/components/ui/dropdown/dropdown.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



function MarksNoteActionsRead(props) {
  var alreadyRead = props.note.isRead,
      readMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__.useReadMutation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__.default.Item, {
    icon: "eicon-envelope",
    disabled: readMutation.isLoading,
    onSelect: function onSelect() {
      return readMutation.mutateAsync({
        ids: [props.note.id, props.note.parentId],
        isRead: !alreadyRead
      });
    }
  }, alreadyRead ? __('Mark as unread', 'elementor-pro') : __('Mark as read', 'elementor-pro'));
}
MarksNoteActionsRead.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    parentId: PropTypes.number,
    isRead: PropTypes.bool
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-resolve.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-resolve.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsResolve)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var _components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _hooks_use_watch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-watch */ "../assets/js/app/hooks/use-watch.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





function MarksNoteActionsResolve(props) {
  var alreadyResolved = props.note.isResolved,
      resolveMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_3__.useResolveMutation)();
  (0,_hooks_use_watch__WEBPACK_IMPORTED_MODULE_4__.default)(function () {
    if (props.onLoadingChange) {
      props.onLoadingChange(resolveMutation.isLoading);
    }
  }, [resolveMutation.isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_1__.default, {
    name: alreadyResolved ? 'eicon-check-circle-o' : 'eicon-check',
    disabled: resolveMutation.isLoading,
    onClick: function onClick() {
      return resolveMutation.mutateAsync({
        id: props.note.id,
        isResolved: !alreadyResolved
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.default.Content, null, alreadyResolved ? __('Unresolve', 'elementor-pro') : __('Resolve', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.default.Arrow, null)));
}
MarksNoteActionsResolve.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    isResolved: PropTypes.bool
  }).isRequired,
  onLoadingChange: PropTypes.func
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-show-readers.js":
/*!**********************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-show-readers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsShowReaders)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2;







var TooltipContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default.Content)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  max-width: 200px;\n"])));
var Icon = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_ui_icon__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  padding: 4px !important;\n  color: #a4afb7 !important;\n  transition: 0.2s all !important;\n  display: grid !important;\n  place-items: center !important;\n  font-size: 18px !important;\n  border-radius: 100% !important;\n\n  &:hover, &:focus {\n    color: #6d7882;\n\toutline: none;\n\tbackground: #f1f3f5;\n  }\n"])));
function MarksNoteActionsShowReaders(props) {
  if (0 === props.readers.length) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default, {
    delayDuration: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Icon, {
    className: "eicon-preview-medium",
    tabIndex: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TooltipContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, __('Seen by', 'elementor-pro') + ': '), props.readers.map(function (reader) {
    return reader.name;
  }).join(', '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default.Arrow, null)));
}
MarksNoteActionsShowReaders.propTypes = {
  readers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dropdown/dropdown */ "../assets/js/app/components/ui/dropdown/dropdown.js");
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _marks_note_actions_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-note-actions-resolve */ "../assets/js/app/components/marks-note-actions-resolve.js");
/* harmony import */ var _marks_note_actions_read__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marks-note-actions-read */ "../assets/js/app/components/marks-note-actions-read.js");
/* harmony import */ var _marks_note_actions_show_readers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marks-note-actions-show-readers */ "../assets/js/app/components/marks-note-actions-show-readers.js");
/* harmony import */ var _marks_note_actions_delete_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marks-note-actions-delete-dialog */ "../assets/js/app/components/marks-note-actions-delete-dialog.js");
/* harmony import */ var _marks_thread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marks-thread */ "../assets/js/app/components/marks-thread.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");












function MarksNoteActions(props) {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__.default)(),
      direction = _useNotesConfig.direction,
      _useMarksThreadContex = (0,_marks_thread__WEBPACK_IMPORTED_MODULE_10__.useMarksThreadContext)(),
      setIsDisabled = _useMarksThreadContex.setIsDisabled,
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      isDeleteDialogOpen = _useState2[0],
      setIsDeleteDialogOpen = _useState2[1],
      canDeleteNote = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__.default)(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__.CAPABILITY_DELETE, props.note),
      canEditNote = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__.default)(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__.CAPABILITY_EDIT, props.note),
      canResolveNote = props.note.isThread() && canEditNote,
      shouldRenderDropdown = canEditNote || canDeleteNote || props.note.isThread();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      return setIsDisabled(false);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, canResolveNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_marks_note_actions_resolve__WEBPACK_IMPORTED_MODULE_6__.default, {
    note: props.note,
    onLoadingChange: function onLoadingChange(isLoading) {
      return setIsDisabled(isLoading);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_marks_note_actions_show_readers__WEBPACK_IMPORTED_MODULE_8__.default, {
    readers: props.note.readers
  }), shouldRenderDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default, {
    modal: false,
    dir: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_3__.default, {
    name: "eicon-ellipsis-h"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Content, {
    align: "end"
  }, props.note.isThread() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_marks_note_actions_read__WEBPACK_IMPORTED_MODULE_7__.default, {
    note: props.note
  }), canEditNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Item, {
    onSelect: function onSelect() {
      return props.setIsEditMode(true);
    },
    icon: "eicon-edit"
  }, __('Edit', 'elementor-pro')), props.note.isThread() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Item, {
    onSelect: function onSelect() {
      window.top.$e.run('notes/copy-link', {
        id: props.note.id
      });
    },
    icon: "eicon-copy"
  }, __('Copy Link', 'elementor-pro')), canDeleteNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Separator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Item, {
    onSelect: function onSelect() {
      return setIsDeleteDialogOpen(true);
    },
    icon: "eicon-trash",
    variant: "danger"
  }, __('Delete', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.default.Arrow, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_marks_note_actions_delete_dialog__WEBPACK_IMPORTED_MODULE_9__.default, {
    note: props.note,
    isOpen: isDeleteDialogOpen,
    onOpenChange: setIsDeleteDialogOpen,
    onLoadingChange: function onLoadingChange(isLoading) {
      return setIsDisabled(isLoading);
    }
  }));
}
MarksNoteActions.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    parentId: PropTypes.number,
    isRead: PropTypes.bool,
    isResolved: PropTypes.bool,
    isThread: PropTypes.func,
    readers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    }))
  }).isRequired,
  setIsEditMode: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-textarea.js":
/*!**********************************************************!*\
  !*** ../assets/js/app/components/marks-note-textarea.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteTextarea)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "../../../node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/textarea */ "../assets/js/app/components/ui/textarea.js");
/* harmony import */ var _hooks_use_auto_focus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-auto-focus */ "../assets/js/app/hooks/use-auto-focus.js");
/* harmony import */ var _mentions_user_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentions-user-list */ "../assets/js/app/components/mentions-user-list.js");
/* harmony import */ var _ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/typeahead/typeahead */ "../assets/js/app/components/ui/typeahead/typeahead.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _query_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../query-client */ "../assets/js/app/query-client.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject;












var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: relative;\n"])));
function MarksNoteTextarea(props) {
  var ref = (0,_hooks_use_auto_focus__WEBPACK_IMPORTED_MODULE_5__.default)(props.defaultValue);
  var placeholder = props.isReply ? __('Type your reply. Use @ to mention...', 'elementor-pro') : __('Type a note. Use @ to mention...', 'elementor-pro');

  var fragment = function fragment(_ref) {
    var search = _ref.search;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClientProvider, {
      client: _query_client__WEBPACK_IMPORTED_MODULE_9__.default
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mentions_user_list__WEBPACK_IMPORTED_MODULE_6__.default, {
      search: search
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_7__.default, {
    debounce: 250,
    fragment: fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.default, {
    name: props.name,
    placeholder: placeholder,
    onKeyDown: function onKeyDown(e) {
      if (props.onMetaAndEnterKeyDown && (e.metaKey || e.ctrlKey) && 'enter' === e.key.toLowerCase()) {
        props.onMetaAndEnterKeyDown(e);
      }
    },
    disabled: props.disabled,
    ref: ref,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
    rows: 1,
    maxRows: 6,
    autoSize: true
  })));
}
MarksNoteTextarea.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onMetaAndEnterKeyDown: PropTypes.func,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  isReply: PropTypes.bool.isRequired
};
MarksNoteTextarea.defaultProps = {
  isReply: false
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-view-external-indicator.js":
/*!*************************************************************************!*\
  !*** ../assets/js/app/components/marks-note-view-external-indicator.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteViewExternalIndicator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2;





var Text = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  color: #a4afb6 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-family: Roboto, sans-serif !important;\n  font-size: 9px !important;\n  font-weight: normal !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: 1.5 !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n"])));
var Strong = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.strong(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  font-weight: 500;\n"]))); // Responsible for showing an indicator if the note was created in another route or post.

function MarksNoteViewExternalIndicator(props) {
  var _props$note$document;

  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_2__.default)(),
      currentDocument = _useNotesConfig.document,
      currentRoute = _useNotesConfig.route,
      isSameDocument = ((_props$note$document = props.note.document) === null || _props$note$document === void 0 ? void 0 : _props$note$document.id) === currentDocument.id,
      isSameRoute = props.note.routeUrl === currentRoute.url; // If the document is not loaded on the note or the route and the document are the same the current route
  // and current document, this component should not render anything.


  if (!props.note.document || isSameDocument && isSameRoute) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Text, null, __('Noted on:', 'elementor-pro'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Strong, null, isSameDocument ? props.note.routeTitle : props.note.document.typeTitle));
}
MarksNoteViewExternalIndicator.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_3__.default).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-view.js":
/*!******************************************************!*\
  !*** ../assets/js/app/components/marks-note-view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/avatar */ "../assets/js/app/components/ui/avatar.js");
/* harmony import */ var _marks_note_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marks-note-actions */ "../assets/js/app/components/marks-note-actions.js");
/* harmony import */ var _marks_edit_note_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-edit-note-form */ "../assets/js/app/components/marks-edit-note-form.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _shared_note_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/note-content */ "../assets/js/app/components/shared/note-content/index.js");
/* harmony import */ var _marks_note_view_external_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marks-note-view-external-indicator */ "../assets/js/app/components/marks-note-view-external-indicator.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;












var sizesMap = {
  sm: {
    text: 9
  },
  md: {
    text: 12
  }
};
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  --color-gray-500: #a4afb6;\n  --color-gray-600: #6d7882;\n\n  display: flex !important;\n  align-items: start !important;\n  gap: 12px !important;\n\n  &, & *:not( [class*=\"eicon\"] ) {\n    font-family: Roboto, sans-serif !important;\n  }\n"])));
var Body = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 12px !important;\n  flex-grow: 1 !important;\n  line-height: 1 !important;\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex !important;\n  gap: 10px !important;\n  padding-top: 4px !important;\n  line-height: 1 !important;\n"])));
var HeaderMeta = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 5px !important;\n  flex-grow: 1 !important;\n  line-height: 1 !important;\n"])));
var HeaderActions = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject5 || (_templateObject5 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex !important;\n  gap: 5px !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  line-height: 1 !important;\n"])));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.span(_templateObject6 || (_templateObject6 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  color: var(", ") !important;\n  margin: 0 !important;\n  padding: 0 !important;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), function (_ref) {
  var muted = _ref.muted;
  return muted ? '--color-gray-500' : '--color-gray-600';
}, function (_ref2) {
  var size = _ref2.size;
  return size && (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject7 || (_templateObject7 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tfont-size: ", "px !important;\n  "])), sizesMap[size].text);
}, function (_ref3) {
  var weight = _ref3.weight;
  return weight && (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject8 || (_templateObject8 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tfont-weight: ", " !important;\n  "])), weight);
}, function (_ref4) {
  var lineHeight = _ref4.lineHeight;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject9 || (_templateObject9 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tline-height: ", " !important;\n  "])), lineHeight || 1);
});
function MarksNoteView(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      isEditMode = _useState2[0],
      setIsEditMode = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.default, {
    size: 'md',
    src: props.note.author.avatarUrls['48']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(HeaderMeta, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Text, {
    size: 'md',
    weight: 500
  }, props.note.author.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Text, {
    size: 'sm',
    lineHeight: 1.5,
    muted: true
  }, props.note.getFormattedLastActivityAt())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(HeaderActions, null, !isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_actions__WEBPACK_IMPORTED_MODULE_5__.default, {
    note: props.note,
    setIsEditMode: setIsEditMode
  }))), !isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_content__WEBPACK_IMPORTED_MODULE_8__.default, null, props.note.content), isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_edit_note_form__WEBPACK_IMPORTED_MODULE_6__.default, {
    note: props.note,
    onClose: function onClose() {
      return setIsEditMode(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_view_external_indicator__WEBPACK_IMPORTED_MODULE_9__.default, {
    note: props.note
  })));
}
MarksNoteView.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_7__.default).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-reply-form.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/marks-reply-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksReplyForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _marks_note_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-note-textarea */ "../assets/js/app/components/marks-note-textarea.js");
/* harmony import */ var _shared_note_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/note-form */ "../assets/js/app/components/shared/note-form.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");









function MarksReplyForm(props) {
  var createMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_5__.useCreateMutation)(),
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      shouldShowButtons = _useState2[0],
      setShouldShowButtons = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var form, content;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              form = e.target.closest('form'), content = form.content.value;
              _context.next = 4;
              return createMutation.mutateAsync({
                elementId: props.thread.elementId,
                parentId: props.thread.id,
                content: content
              });

            case 4:
              form.reset();
              setShouldShowButtons(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_7__.default, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_textarea__WEBPACK_IMPORTED_MODULE_6__.default, {
    disabled: createMutation.isLoading,
    name: "content",
    onMetaAndEnterKeyDown: onSubmit,
    onChange: function onChange(e) {
      return setShouldShowButtons(e.target.value.length > 0);
    },
    isReply: true
  }), shouldShowButtons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_7__.default.ButtonsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    disabled: createMutation.isLoading,
    type: "submit"
  }, __('Reply', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    disabled: createMutation.isLoading,
    variant: 'outlined',
    type: "reset"
  }, __('Cancel', 'elementor-pro'))));
}
MarksReplyForm.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number,
    elementId: PropTypes.string
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-thread-view.js":
/*!********************************************************!*\
  !*** ../assets/js/app/components/marks-thread-view.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksThreadView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../../../node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _marks_note_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marks-note-view */ "../assets/js/app/components/marks-note-view.js");
/* harmony import */ var _hooks_use_note__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-note */ "../assets/js/app/hooks/use-note.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _marks_reply_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marks-reply-form */ "../assets/js/app/components/marks-reply-form.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject, _templateObject2;











var Loader = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_ui_icon__WEBPACK_IMPORTED_MODULE_9__.default).attrs({
  className: 'eicon-loading eicon-animation-spin'
})(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  align-self: center !important;\n  color: #a4afb6 !important;\n"])));
var Error = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.p(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 12px !important;\n  font-weight: normal !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  color: #6d7882 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n"])));
function MarksThreadView(props) {
  var _useNote = (0,_hooks_use_note__WEBPACK_IMPORTED_MODULE_6__.default)(props.threadId),
      isLoading = _useNote.isLoading,
      isPlaceholderData = _useNote.isPlaceholderData,
      thread = _useNote.data,
      isSuccess = _useNote.isSuccess,
      isError = _useNote.isError,
      hasReplies = 0 !== thread.repliesCount; // Set read status.


  useSetReadStatus({
    thread: thread,
    shouldTrigger: isSuccess && !isPlaceholderData
  });

  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Loader, null);
  }

  if (isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Error, null, __('Something went wrong.', 'elementor-pro'));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_view__WEBPACK_IMPORTED_MODULE_5__.default, {
    note: thread,
    key: thread.id
  }), // Show a loader until the replies are loaded.
  hasReplies && isPlaceholderData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Loader, null), thread.replies.map(function (reply) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_note_view__WEBPACK_IMPORTED_MODULE_5__.default, {
      key: reply.id,
      note: reply
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_reply_form__WEBPACK_IMPORTED_MODULE_8__.default, {
    thread: thread
  }));
} // Hook to set Thread (& replies) read status.

function useSetReadStatus(_ref) {
  var thread = _ref.thread,
      shouldTrigger = _ref.shouldTrigger;
  // Flag to run the hook action once and prevent unnecessary calculations / requests.
  var didRunOnce = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false),
      readMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_7__.useReadMutation)(); // Set thread as read.

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (didRunOnce.current || !shouldTrigger) {
      return;
    }

    var ids = [thread].concat((0,_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(thread.replies || [])).filter(function (note) {
      return !note.isRead;
    }).map(function (note) {
      return note.id;
    });

    if (0 !== ids.length) {
      readMutation.mutate({
        ids: ids,
        isRead: true
      });
    }

    didRunOnce.current = true;
  }, [thread, shouldTrigger]);
}

MarksThreadView.propTypes = {
  threadId: PropTypes.number.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-thread.js":
/*!***************************************************!*\
  !*** ../assets/js/app/components/marks-thread.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "useMarksThreadContext": () => (/* binding */ useMarksThreadContext),
/* harmony export */   "default": () => (/* binding */ MarksThread)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _ui_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/marker */ "../assets/js/app/components/ui/marker.js");
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _marks_thread_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-thread-view */ "../assets/js/app/components/marks-thread-view.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-new-thread-events */ "../assets/js/app/hooks/use-new-thread-events.js");
/* harmony import */ var _hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-scroll-into-view */ "../assets/js/app/hooks/use-scroll-into-view.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject, _templateObject2;














var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_12__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 28px !important;\n  padding: 20px 16px !important;\n  width: 360px !important;\n  border-radius: 4px !important;\n  transition: 0.3s all !important;\n\n  ", "\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\topacity: 0.5;\n\tpointer-events: none;\n  "])));
});
var Context = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
function useMarksThreadContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);
}
function MarksThread(props) {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_8__.default)(),
      direction = _useNotesConfig.direction,
      onOpenChange = useOnOpenChange(props.note.id),
      isCurrentActive = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__.useIsThreadActive)(props.note.id),
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      isDisabled = _useState2[0],
      setIsDisabled = _useState2[1],
      ref = (0,_hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_10__.default)(isCurrentActive);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_5__.default, {
    open: isCurrentActive,
    onOpenChange: onOpenChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_5__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_3__.default, {
    variant: 'transparent',
    className: _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_9__.DISABLE_NEW_THREAD
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_marker__WEBPACK_IMPORTED_MODULE_4__.default, {
    ref: ref,
    className: _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_9__.DISABLE_NEW_THREAD,
    variant: isCurrentActive || props.note.isUnreadThread() ? 'solid' : 'ghost',
    size: 'md',
    muted: props.note.isResolved
  }, props.note.id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_5__.default.Content, {
    align: 'rtl' === direction ? 'end' : 'start',
    alignOffset: 20,
    sideOffset: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Container, {
    disabled: isDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Context.Provider, {
    value: {
      isDisabled: isDisabled,
      setIsDisabled: setIsDisabled
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_thread_view__WEBPACK_IMPORTED_MODULE_6__.default, {
    threadId: props.note.id
  })))));
} // Hook to handle current active note when Popover is opened / closed.

function useOnOpenChange(noteId) {
  var _useActiveThread = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__.default)(),
      setActive = _useActiveThread.setActive,
      clearActive = _useActiveThread.clearActive;

  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (isOpen) {
    if (!isOpen) {
      clearActive();
      return;
    }

    setActive({
      type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_7__.THREAD,
      data: {
        noteId: noteId
      }
    });
  }, [noteId]);
}

MarksThread.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_11__.default).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks.js":
/*!********************************************!*\
  !*** ../assets/js/app/components/marks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marks)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _marks_thread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marks-thread */ "../assets/js/app/components/marks-thread.js");
/* harmony import */ var _marks_new_thread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-new-thread */ "../assets/js/app/components/marks-new-thread.js");
/* harmony import */ var _marks_element_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marks-element-portal */ "../assets/js/app/components/marks-element-portal.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_notes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-notes */ "../assets/js/app/hooks/use-notes.js");
/* harmony import */ var _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-new-thread-events */ "../assets/js/app/hooks/use-new-thread-events.js");












function Marks() {
  var _useNotes = (0,_hooks_use_notes__WEBPACK_IMPORTED_MODULE_9__.default)(),
      data = _useNotes.data,
      _useActiveThread = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__.default)(),
      activeThread = _useActiveThread.activeThread,
      notesByElement = useNotesByElement(data, activeThread);

  (0,_hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_10__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(notesByElement).map(function (_ref) {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
        elementId = _ref2[0],
        items = _ref2[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_element_portal__WEBPACK_IMPORTED_MODULE_7__.default, {
      key: elementId,
      elementId: elementId
    }, items.map(function (_ref3) {
      var type = _ref3.type,
          note = _ref3.data;

      switch (type) {
        case _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__.THREAD:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_thread__WEBPACK_IMPORTED_MODULE_5__.default, {
            key: note.id,
            note: note
          });

        case _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__.NEW_THREAD:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_marks_new_thread__WEBPACK_IMPORTED_MODULE_6__.default, {
            key: -1
          });

        default:
          return null;
      }
    }));
  }));
}
/**
 * Hook to get a reduced Notes object, keyed by element, and with "new thread" handling.
 *
 * @param {Object[]} notes - Notes data.
 * @param {Object} active - Current active note state.
 *
 * @return {Object} - Reduced object.
 */

function useNotesByElement(notes, active) {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (!notes) {
      return {};
    } // Reduce the notes, keyed by Elementor element ID.


    var reduced = notes.reduce(function (carry, note) {
      if (!carry[note.elementId]) {
        carry[note.elementId] = [];
      }

      carry[note.elementId].push({
        type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__.THREAD,
        data: note
      });
      return carry;
    }, {}); // Push a "new thread" item into the reduced notes at the current active element ID.

    if (active && _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__.NEW_THREAD === active.type) {
      var elementId = active.data.elementId;
      reduced[elementId] = [].concat((0,_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(reduced[elementId] || []), [{
        type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_8__.NEW_THREAD,
        data: {}
      }]);
    }

    return reduced;
  }, [notes, active]);
}

/***/ }),

/***/ "../assets/js/app/components/mentions-user-list.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/mentions-user-list.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MentionsUserList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "../../../node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_use_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-users */ "../assets/js/app/hooks/use-users.js");
/* harmony import */ var _ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/typeahead/typeahead */ "../assets/js/app/components/ui/typeahead/typeahead.js");
/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/avatar */ "../assets/js/app/components/ui/avatar.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_user_can__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;












var defaultParams = {
  limit: 5,
  order_by: 'user_registered',
  order: 'desc'
};
var List = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.default)(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_7__.default.List)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tposition: absolute !important;\n\ttop: 100% !important;\n"])));
var UserContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.default)(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_7__.default.ListItem)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tdisplay: flex !important;\n\tflex-direction: row !important;\n\talign-items: center !important;\n\tgap: 10px !important;\n"])));
var UserDetails = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_11__.default)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tdisplay: flex !important;\n\tflex-direction: column !important;\n\tjustify-content: space-between !important;\n\n\t&::before,\n\t&::after {\n\t\tdisplay: none !important;\n\t}\n"])));
var UserName = styled_components__WEBPACK_IMPORTED_MODULE_12__.default.span(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tall: revert;\n\n\tpadding: 0 !important;\n\tmargin: 0 !important;\n\tfont-size: 12px !important;\n\tfont-weight: bold !important;\n\tcolor: inherit !important;\n"])));
var UserSlug = styled_components__WEBPACK_IMPORTED_MODULE_12__.default.span(_templateObject5 || (_templateObject5 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tfont-size: 11px !important;\n\tcolor: #a4afb6 !important;\n"])));
var Link = styled_components__WEBPACK_IMPORTED_MODULE_12__.default.a.attrs(function () {
  return {
    target: '_blank',
    rel: 'noreferrer'
  };
})(_templateObject6 || (_templateObject6 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tall: revert;\n\n\tcolor: #58d0f5 !important;\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 1em !important;\n\tfont-weight: normal !important;\n\ttext-transform: none !important;\n\tfont-style: normal !important;\n\ttext-decoration: underline !important;\n\tline-height: normal !important;\n\tletter-spacing: normal !important;\n\tword-spacing: normal !important;\n\n\t&:hover,\n\t&:focus {\n\t\tcolor: #6d7882 !important;\n\t\ttext-decoration: underline; // Repeat in order to override theme styles.\n\t}\n"])));
function MentionsUserList(props) {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_9__.default)(),
      urls = _useNotesConfig.urls,
      canCreateUsers = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_10__.default)(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_10__.CAPABILITY_CREATE_USERS);

  var _useUsers = (0,_hooks_use_users__WEBPACK_IMPORTED_MODULE_6__.default)({
    params: (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, defaultParams), {}, {
      search: props.search
    })
  }),
      _useUsers$data = _useUsers.data,
      data = _useUsers$data === void 0 ? [] : _useUsers$data,
      isSuccess = _useUsers.isSuccess;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(List, null, data.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(UserContainer, {
      key: user.id,
      value: user.slug // TODO: For future use, in order to disable the item when the user doesn't have permissions.
      // disabled={ ! user.capabilities.notes.read }

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
      size: 'md',
      src: user.avatarUrls['48']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(UserDetails, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(UserName, null, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(UserSlug, null, user.slug)));
  }), isSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_7__.default.ListFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("strong", null, __("Can't find someone?", 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, canCreateUsers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, __('Add them from the', 'elementor-pro'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Link, {
    href: urls.admin_url_create_user
  }, __('WP Dashboard', 'elementor-pro'))) : __('Ask the site admin to add them', 'elementor-pro'))));
}
MentionsUserList.propTypes = {
  search: PropTypes.string
};

/***/ }),

/***/ "../assets/js/app/components/panel-body-current-route.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/panel-body-current-route.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelBodyCurrentRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panel_note_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-note-item */ "../assets/js/app/components/panel-note-item.js");
/* harmony import */ var _panel_page_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-page-title */ "../assets/js/app/components/panel-page-title.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");







function PanelBodyCurrentRoute(props) {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_5__.default)(),
      route = _useNotesConfig.route,
      _useActiveThread = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_4__.default)(),
      isThreadActive = _useActiveThread.isThreadActive,
      setActive = _useActiveThread.setActive;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_page_title__WEBPACK_IMPORTED_MODULE_3__.default, {
    count: props.notes.length
  }, route.title), props.notes.map(function (note) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_note_item__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: note.id,
      note: note,
      isActive: isThreadActive(note.id),
      onClick: function onClick() {
        return setActive({
          type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_4__.THREAD,
          data: {
            noteId: note.id
          }
        });
      }
    });
  }));
}
PanelBodyCurrentRoute.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_6__.default)).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel-body-summary.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/panel-body-summary.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelBodySummary)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _panel_page_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-page-title */ "../assets/js/app/components/panel-page-title.js");
/* harmony import */ var _models_note_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/note-summary */ "../assets/js/app/models/note-summary.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject;








var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.a(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tposition: absolute !important;\n\tfont-size: 14px !important;\n\tinset-inline-end: 14px !important;\n\ttop: 50% !important;\n\tmargin-top: -.5em !important;\n\tcolor: #a4afb7 !important;\n"])));
function PanelBodySummary(props) {
  return props.notesSummary.map(function (noteSummary) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_panel_page_title__WEBPACK_IMPORTED_MODULE_3__.default, {
      count: noteSummary.notesCount,
      key: noteSummary.url
    }, noteSummary.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_6__.default.Trigger, {
      asChild: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledLink, {
      href: "".concat(noteSummary.fullURL, "#e:run:notes/open"),
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: "eicon-editor-external-link"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_6__.default.Content, null, __('Open in a new tab', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_6__.default.Arrow, null))));
  });
}
PanelBodySummary.propTypes = {
  notesSummary: PropTypes.arrayOf(PropTypes.instanceOf(_models_note_summary__WEBPACK_IMPORTED_MODULE_4__.default)).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel-close-button.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/panel-close-button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelCloseButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];



function PanelCloseButton() {
  var handleClick = function handleClick() {
    return window.top.$e.run('notes/close');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "eicon-editor-close",
    onClick: handleClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.default.Content, null, __('Close notes mode', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.default.Arrow, null)));
}

/***/ }),

/***/ "../assets/js/app/components/panel-empty.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/panel-empty.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelEmpty)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _templateObject, _templateObject2, _templateObject3, _templateObject4;





var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tdisplay: flex !important;\n\talign-items: center !important;\n\tjustify-content: center !important;\n\theight: 100% !important;\n\twidth: 100% !important;\n\ttext-align: center !important;\n\tpadding: 13px 13px 43px 13px !important;\n"])));
var IconContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tfont-size: 30px !important;\n\tcolor: #a4afb6 !important;\n\tmargin: 0 0 15px 0 !important;\n"])));
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h4(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 16px !important;\n\tfont-weight: 700 !important;\n\ttext-transform: none !important;\n\tfont-style: normal !important;\n\ttext-decoration: none !important;\n\tline-height: normal !important;\n\tletter-spacing: normal !important;\n\tword-spacing: normal !important;\n\tcolor: #6d7882 !important;\n\tmargin: 0 0 10px 0 !important;\n\n\t&::before, &::after {\n\t\tdisplay: none;\n\t}\n"])));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 12px !important;\n\tfont-weight: normal !important;\n\ttext-transform: none !important;\n\tfont-style: normal !important;\n\ttext-decoration: none !important;\n\tline-height: normal !important;\n\tletter-spacing: normal !important;\n\tword-spacing: normal !important;\n\tmargin: 0 !important;\n\tcolor: #6d7882 !important;\n"])));
function PanelEmpty() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(IconContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "eicon-commenting-o"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Heading, null, __('Share your thoughts with a Note', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Text, null, __('Select an element on the page to leave a comment, ask a question, etc.', 'elementor-pro'))));
}

/***/ }),

/***/ "../assets/js/app/components/panel-error.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/panel-error.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _templateObject, _templateObject2;




var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n  width: 100% !important;\n  text-align: center !important;\n  padding: 13px 13px 43px 13px !important;\n"])));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.p(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 12px !important;\n  font-weight: ", " !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  margin: 0 !important;\n  color: #6d7882 !important;\n"])), function (_ref) {
  var weight = _ref.weight;
  return weight || 400;
});
function PanelError() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Text, {
    weight: 700
  }, __('Something went wrong.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Text, null, __('Please refresh the page and try again.', 'elementor-pro'))));
}

/***/ }),

/***/ "../assets/js/app/components/panel-fetch-icon.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/panel-fetch-icon.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelFetchIcon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _hooks_use_watch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-watch */ "../assets/js/app/hooks/use-watch.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/animation */ "../assets/js/app/styles/animation.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject;








var StyledIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  animation-duration: 1.3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n\n  &[data-state=\"loading\"] {\n\tanimation-name: ", ";\n  }\n\n  &[data-state=\"none\"] {\n\tanimation-name: none;\n  }\n"])), _styles_animation__WEBPACK_IMPORTED_MODULE_6__.spin);
function PanelFetchIcon(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.isFetching),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0,_hooks_use_watch__WEBPACK_IMPORTED_MODULE_5__.default)(function () {
    if (props.isFetching) {
      setLoading(true);
    }
  }, [props.isFetching]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledIconButton, {
    name: "eicon-sync",
    "data-state": loading ? 'loading' : 'none',
    onClick: function onClick() {
      return props.refetch();
    },
    onAnimationIteration: function onAnimationIteration() {
      // Make sure to finish spin only when the animation ends.
      if (!props.isFetching) {
        setLoading(false);
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default.Content, null, __('Refresh', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__.default.Arrow, null)));
}
PanelFetchIcon.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel-note-item.js":
/*!******************************************************!*\
  !*** ../assets/js/app/components/panel-note-item.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelNoteItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../../../node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/marker */ "../assets/js/app/components/ui/marker.js");
/* harmony import */ var _hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-scroll-into-view */ "../assets/js/app/hooks/use-scroll-into-view.js");
/* harmony import */ var _shared_note_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/note-content */ "../assets/js/app/components/shared/note-content/index.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _ui_button_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/button-base */ "../assets/js/app/components/ui/button-base.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;











var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_ui_button_base__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t--spacing: 12px;\n\t--background: #fafbfb;\n\t--color: #6d7882;\n\t--padding: var( --spacing );\n\t--font-family: Roboto, sans-serif;\n\t--font-size: 12px;\n\t--font-weight: 500;\n\t--width: 100%;\n\t--display: flex;\n\n\tgap: var( --spacing );\n\tmargin: 1px 0 0 0 !important;\n\tborder: none;\n\ttext-align: inherit;\n\tborder-radius: 0;\n\ttransition: 0.2s all;\n\tline-height: 1.5;\n\tcursor: pointer;\n\twhite-space: normal;\n\n\t&:hover,\n\t&:focus {\n\t\t--background: #f1f1f1;\n\t\t--color: #6d7882;\n\t}\n\n\t", "\n"])), function (_ref) {
  var isActive = _ref.isActive;
  return isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t\t\t--background: #e8f4fb;\n\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\t--background: #e0f2fc;\n\t\t\t}\n\t\t"])));
});
var IconCol = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tflex-shrink: 0;\n\n\t&::before,\n\t&::after {\n\t\tdisplay: none !important;\n\t}\n"])));
var ContentCol = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tflex-grow: 1;\n\n\t&::before,\n\t&::after {\n\t\tdisplay: none !important;\n\t}\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.p(_templateObject5 || (_templateObject5 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tmargin: 0 0 5px 0 !important;\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 10px !important;\n\tfont-weight: 500 !important;\n\ttext-transform: none !important;\n\tfont-style: normal !important;\n\ttext-decoration: none !important;\n\tline-height: normal !important;\n\tletter-spacing: normal !important;\n\tword-spacing: normal !important;\n"])));
var Date = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.span(_templateObject6 || (_templateObject6 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tcolor: #a4afb6;\n"])));
var RepliesCount = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.p(_templateObject7 || (_templateObject7 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tmargin: 5px 0 0 0 !important;\n\tcolor: #a4afb6 !important;\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 10px !important;\n\tfont-weight: normal !important;\n\ttext-transform: none !important;\n\tfont-style: normal !important;\n\ttext-decoration: none !important;\n\tline-height: normal !important;\n\tletter-spacing: normal !important;\n\tword-spacing: normal !important;\n"])));
function PanelNoteItem(props) {
  var ref = (0,_hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_6__.default)(props.isActive, {
    block: 'nearest',
    inline: 'nearest'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, {
    isActive: props.isActive,
    onClick: props.onClick,
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(IconCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_marker__WEBPACK_IMPORTED_MODULE_5__.default, {
    elevation: 0,
    variant: props.isActive || props.note.isUnreadThread() ? 'solid' : 'ghost',
    size: 'sm',
    muted: props.note.isResolved
  }, props.note.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ContentCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Title, null, props.note.author.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Date, null, props.note.getFormattedLastActivityAt())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_shared_note_content__WEBPACK_IMPORTED_MODULE_7__.default, {
    disableInteractions: true
  }, props.note.content), props.note.repliesCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(RepliesCount, null, __('%s replies', 'elementor-pro').replace('%s', props.note.repliesCount))));
}
PanelNoteItem.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_4__.default).isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

/***/ }),

/***/ "../assets/js/app/components/panel-page-title.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/panel-page-title.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelPageTitle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2;



var StyledPanelPageTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h4(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  padding: 10px 12px !important;\n  background: #fff !important;\n  font-family: Roboto, sans-serif !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  color: #6d7882 !important;\n  margin: 1px 0 0 0 !important;\n  line-height: 1.2 !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  position: relative !important;\n\n  &::before, &::after {\n    display: none !important;\n  }\n"])));
var StyledCount = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.span(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  color: #a4afb6;\n  font-size: 11px;\n"])));
function PanelPageTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPanelPageTitle, null, props.children, ' ', props.count && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledCount, null, "(", props.count, ")"));
}
PanelPageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  count: PropTypes.number
};

/***/ }),

/***/ "../assets/js/app/components/panel-popover.js":
/*!****************************************************!*\
  !*** ../assets/js/app/components/panel-popover.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelPopover)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/checkbox/checkbox */ "../assets/js/app/components/ui/checkbox/checkbox.js");
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var _ui_label_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/label/label */ "../assets/js/app/components/ui/label/label.js");
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/radio/radio */ "../assets/js/app/components/ui/radio/radio.js");
/* harmony import */ var _ui_sperator_separator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/sperator/separator */ "../assets/js/app/components/ui/sperator/separator.js");
/* harmony import */ var _hooks_use_notes_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-notes-filters */ "../assets/js/app/hooks/use-notes-filters.js");
/* harmony import */ var _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/use-notes-or-notes-summary */ "../assets/js/app/hooks/use-notes-or-notes-summary.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject;












var PopoverContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.default)(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_6__.default.Content)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  padding: 16px 16px 10px !important;\n"])));
function PanelPopover(props) {
  var _useNotesFilters = (0,_hooks_use_notes_filters__WEBPACK_IMPORTED_MODULE_9__.default)(),
      _useNotesFilters2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useNotesFilters, 2),
      filters = _useNotesFilters2[0],
      setFilters = _useNotesFilters2[1];

  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_11__.default)(),
      direction = _useNotesConfig.direction;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_6__.default.Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    name: "eicon-ellipsis-h",
    size: "sm"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PopoverContent, {
    align: 'rtl' === direction ? 'end' : 'start',
    sideOffset: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
    value: props.view,
    onValueChange: props.setView,
    dir: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__.default, {
    value: _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_10__.VIEW_NOTES
  }), __('Current page', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__.default, {
    value: _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_10__.VIEW_NOTES_SUMMARY
  }), __('All site', 'elementor-pro')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_sperator_separator__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
    value: filters.only_relevant ? '1' : '0',
    onValueChange: function onValueChange(value) {
      return setFilters({
        only_relevant: '1' === value ? true : null
      });
    },
    dir: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__.default, {
    value: "0"
  }), __('All notes', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_7__.default, {
    value: "1"
  }), __('Only yours', 'elementor-pro')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_sperator_separator__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_5__.default, {
    htmlFor: "notes-filter-show-resolved"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "notes-filter-show-resolved",
    checked: null === filters.is_resolved,
    onCheckedChange: function onCheckedChange(value) {
      return setFilters({
        is_resolved: value ? null : false
      });
    }
  }), __('Show resolved', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_5__.default, {
    htmlFor: "notes-filter-only-unread"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "notes-filter-only-unread",
    checked: filters.only_unread,
    onCheckedChange: function onCheckedChange(value) {
      return setFilters({
        only_unread: value ? true : null
      });
    }
  }), __('Show unread only', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_6__.default.Arrow, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_6__.default.CloseButton, null)));
}
PanelPopover.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel.js":
/*!********************************************!*\
  !*** ../assets/js/app/components/panel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_body_current_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-body-current-route */ "../assets/js/app/components/panel-body-current-route.js");
/* harmony import */ var _panel_body_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-body-summary */ "../assets/js/app/components/panel-body-summary.js");
/* harmony import */ var _panel_close_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-close-button */ "../assets/js/app/components/panel-close-button.js");
/* harmony import */ var _panel_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-empty */ "../assets/js/app/components/panel-empty.js");
/* harmony import */ var _panel_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-error */ "../assets/js/app/components/panel-error.js");
/* harmony import */ var _panel_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-popover */ "../assets/js/app/components/panel-popover.js");
/* harmony import */ var _ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/panel/panel */ "../assets/js/app/components/ui/panel/panel.js");
/* harmony import */ var _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-notes-or-notes-summary */ "../assets/js/app/hooks/use-notes-or-notes-summary.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _panel_fetch_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel-fetch-icon */ "../assets/js/app/components/panel-fetch-icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];











function Panel() {
  var _useNotesConfig = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_9__.default)(),
      direction = _useNotesConfig.direction,
      _useNotesOrNotesSumma = (0,_hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_8__.default)(),
      view = _useNotesOrNotesSumma.view,
      setView = _useNotesOrNotesSumma.setView,
      data = _useNotesOrNotesSumma.data,
      refetch = _useNotesOrNotesSumma.refetch,
      isSuccess = _useNotesOrNotesSumma.isSuccess,
      isLoading = _useNotesOrNotesSumma.isLoading,
      isFetching = _useNotesOrNotesSumma.isFetching,
      isError = _useNotesOrNotesSumma.isError,
      isNotesView = _useNotesOrNotesSumma.isNotesView,
      isNotesSummaryView = _useNotesOrNotesSumma.isNotesSummaryView;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default, {
    isFloating: true,
    defaultPosition: {
      x: 'rtl' === direction ? -50 : 50,
      y: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.HeaderSideCol, {
    align: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_popover__WEBPACK_IMPORTED_MODULE_6__.default, {
    view: view,
    setView: setView
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.HeaderTitle, null, __('Notes Panel', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.HeaderSideCol, {
    align: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_fetch_icon__WEBPACK_IMPORTED_MODULE_10__.default, {
    isFetching: isFetching,
    refetch: refetch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_close_button__WEBPACK_IMPORTED_MODULE_3__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.Loading, {
    show: isLoading
  }), isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_error__WEBPACK_IMPORTED_MODULE_5__.default, null), isSuccess && 0 === data.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_empty__WEBPACK_IMPORTED_MODULE_4__.default, null), isNotesView && isSuccess && data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_body_current_route__WEBPACK_IMPORTED_MODULE_1__.default, {
    notes: data
  }), isNotesSummaryView && isSuccess && data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_body_summary__WEBPACK_IMPORTED_MODULE_2__.default, {
    notesSummary: data
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_7__.default.FooterResize, null));
}

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/index.js":
/*!****************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _note_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-content */ "../assets/js/app/components/shared/note-content/note-content.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_note_content__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-email.js":
/*!*****************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-email.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_content_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-content-link */ "../assets/js/app/components/shared/note-content/note-content-link.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


function NoteContentEmail(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_note_content_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "mailto:".concat(props.token.value)
  }, props.children);
}
NoteContentEmail.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    value: PropTypes.string
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-link.js":
/*!****************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-link.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var NoteContentLink = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.a(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  --color-editor-info: #58d0f5;\n  --color-editor-info-dark: #10bcf2;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 1em !important;\n  font-weight: normal !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  cursor: pointer;\n\n\n  &,\n  &:visited {\n    color: var( --color-editor-info ) !important;\n  }\n\n  &:hover,\n  &:focus {\n    color: var( --color-editor-info-dark ) !important;\n  }\n"])));
NoteContentLink.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteContentLink);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-mention.js":
/*!*******************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-mention.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var NoteContentMention = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  color: #58d0f5;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteContentMention);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-paragraph.js":
/*!*********************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-paragraph.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var NoteContentParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  --color-gray-600: #6d7882;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: 1.5 !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  color: var(--color-gray-600);\n  margin: 0 0 5px 0 !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteContentParagraph);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-token-renderer.js":
/*!**************************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-token-renderer.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentTokenRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _note_content_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-content-paragraph */ "../assets/js/app/components/shared/note-content/note-content-paragraph.js");
/* harmony import */ var _note_content_mention__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-content-mention */ "../assets/js/app/components/shared/note-content/note-content-mention.js");
/* harmony import */ var _note_content_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-content-url */ "../assets/js/app/components/shared/note-content/note-content-url.js");
/* harmony import */ var _note_content_email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-content-email */ "../assets/js/app/components/shared/note-content/note-content-email.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");








var componentMap = {
  Paragraph: _note_content_paragraph__WEBPACK_IMPORTED_MODULE_3__.default,
  Mention: _note_content_mention__WEBPACK_IMPORTED_MODULE_4__.default,
  Url: _note_content_url__WEBPACK_IMPORTED_MODULE_5__.default,
  Email: _note_content_email__WEBPACK_IMPORTED_MODULE_6__.default,
  default: function _default(_ref) {
    var children = _ref.children;
    return children;
  }
};
function NoteContentTokenRenderer(props) {
  var Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return componentMap[props.token.type] || componentMap.default;
  }, [props.token.type]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
    token: props.token
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(props.token.value) ? props.token.value.map(function (childToken, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NoteContentTokenRenderer, {
      token: childToken,
      key: index
    });
  }) : props.token.value);
} // Put the token shape outside to allow recursive.

var tokenShape = {};
tokenShape.value = PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.shape(tokenShape))]);
NoteContentTokenRenderer.propTypes = {
  token: PropTypes.shape(tokenShape)
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-url.js":
/*!***************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-url.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentUrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_content_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-content-link */ "../assets/js/app/components/shared/note-content/note-content-link.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


function NoteContentUrl(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_note_content_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: props.token.value
  }, props.children);
}
NoteContentUrl.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    value: PropTypes.string
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content.js":
/*!***********************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _note_content_token_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-content-token-renderer */ "../assets/js/app/components/shared/note-content/note-content-token-renderer.js");
/* harmony import */ var _services_rich_text_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/rich-text-parser */ "../assets/js/services/rich-text-parser/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2;







var richTextParser = (0,_services_rich_text_parser__WEBPACK_IMPORTED_MODULE_3__.default)();
var Wrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  white-space: normal;\n  word-break: break-word;\n  word-wrap: break-word;\n\n  ", ";\n"])), function (_ref) {
  var disableInteractions = _ref.disableInteractions;
  return disableInteractions && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tpointer-events: none;\n  "])));
});
function NoteContent(props) {
  var contentToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return richTextParser.parse(props.children);
  }, [props.children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Wrapper, {
    disableInteractions: props.disableInteractions
  }, contentToken && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_note_content_token_renderer__WEBPACK_IMPORTED_MODULE_2__.default, {
    token: contentToken
  }));
}
NoteContent.propTypes = {
  children: PropTypes.string.isRequired,
  disableInteractions: PropTypes.bool
};
NoteContent.defaultProps = {
  disableInteractions: false
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-form.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/shared/note-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/div-base */ "../assets/js/app/components/ui/div-base.js");


var _templateObject, _templateObject2;



var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.form(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 16px !important;\n"])));
Form.ButtonsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_ui_div_base__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex !important;\n  flex-direction: row-reverse !important;\n  justify-content: end !important;\n  gap: 8px !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-action.js":
/*!**************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-action.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



var _templateObject;




var AlertDialogAction = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_button_base__WEBPACK_IMPORTED_MODULE_2__.default).attrs(function () {
  return {
    as: _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Action
  };
})(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\n  --font-size: 16px;\n  --color: #b01b1b;\n  --padding: 13px;\n\n  margin: 0;\n  flex-grow: 1;\n  transition: 0.2s all;\n  border: none;\n  border-radius: 0;\n\n  &:focus, &:hover {\n\t--background: #f1f3f5;\n\t--color: #b01b1b;\n  }\n"])));
AlertDialogAction.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Action.propTypes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogAction);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js":
/*!*************************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");


var _templateObject;



var AlertDialogActionsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_div_base__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  align-items: center;\n  border-top: 1px solid #d5dadf;\n\n  & > button:not(:first-child) {\n\t/**\n\t * will create a divider between the buttons,\n\t * not matter how much buttons exists in the container.\n\t */\n\tborder-inline-start: 1px solid #d5dadf;\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogActionsContainer);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js":
/*!**************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



var _templateObject;




var AlertDialogCancel = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_button_base__WEBPACK_IMPORTED_MODULE_2__.default).attrs(function () {
  return {
    as: _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Cancel
  };
})(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  --color: #6d7882;\n  --padding: 13px;\n  --font-size: 16px;\n  --border: none;\n\n  margin: 0;\n  flex-grow: 1;\n  transition: 0.2s all;\n  border-radius: 0;\n\n  &:focus, &:hover {\n    --background: #f1f3f5;\n\t--color: #6d7882;\n  }\n"])));
AlertDialogCancel.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Cancel.propTypes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogCancel);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-content.js":
/*!***************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-content.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertDialogContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "../assets/js/app/utils.js");



var _templateObject, _templateObject2, _templateObject3, _templateObject4;





var overlayShow = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  0% {\n\topacity: 0;\n  }\n  100% {\n\topacity: 1;\n  }\n"])));
var contentShow = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  0% {\n\topacity: 0;\n\ttransform: translate(-50%, -48%) scale(.96);\n  }\n  100% {\n\topacity: 1;\n\ttransform: translate(-50%, -50%) scale(1);\n  }\n"])));
var StyledContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_5__.Content)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 1em !important;\n  font-weight: normal !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  background-color: #fff !important;\n  box-shadow: 2px 8px 23px rgba(0, 0, 0, 0.2) !important;\n  border-radius: 3px !important;\n  width: 375px !important;\n  text-align: center !important;\n  position: fixed !important;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n  max-height: 85vh !important;\n  animation-duration: 150ms !important;\n  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;\n  animation-name: ", " !important;\n  z-index: ", " !important;\n\n  &:focus {\n\toutline: none !important;\n  }\n"])), contentShow, _utils__WEBPACK_IMPORTED_MODULE_3__.MAX_Z_INDEX);
var StyledOverlay = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_5__.Overlay)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  position: fixed !important;\n  inset: 0 !important;\n  animation-duration: 150ms !important;\n  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;\n  animation-name: ", " !important;\n  z-index: ", " !important;\n"])), overlayShow, _utils__WEBPACK_IMPORTED_MODULE_3__.MAX_Z_INDEX);
function AlertDialogContent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_5__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledContent, props));
}
AlertDialogContent.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_5__.Content.propTypes);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js":
/*!*****************************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");


var _templateObject;



var AlertDialogDescriptionContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_div_base__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  padding: 30px !important;\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 12px !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogDescriptionContainer);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description.js":
/*!*******************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-description.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject;



var AlertDialogDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Description)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 13px !important;\n  font-weight: 500 !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  margin: 0 !important;\n  color: #495157 !important;\n"])));
AlertDialogDescription.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Description.propTypes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogDescription);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-title.js":
/*!*************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-title.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject;



var AlertDialogTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Title)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 17px !important;\n  font-weight: 500 !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  margin: 0 !important;\n  color: #495157 !important;\n\n  &::before, &::after {\n    display: none;\n  }\n"])));
AlertDialogTitle.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Title.propTypes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogTitle);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog.js":
/*!*******************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var _alert_dialog_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-dialog-content */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-content.js");
/* harmony import */ var _alert_dialog_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-dialog-title */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-title.js");
/* harmony import */ var _alert_dialog_description_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-dialog-description-container */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js");
/* harmony import */ var _alert_dialog_actions_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-dialog-actions-container */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js");
/* harmony import */ var _alert_dialog_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-dialog-description */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description.js");
/* harmony import */ var _alert_dialog_cancel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-dialog-cancel */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js");
/* harmony import */ var _alert_dialog_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-dialog-action */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-action.js");








var AlertDialog = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__.Root;
AlertDialog.Trigger = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__.Trigger;
AlertDialog.Content = _alert_dialog_content__WEBPACK_IMPORTED_MODULE_0__.default;
AlertDialog.Description = _alert_dialog_description__WEBPACK_IMPORTED_MODULE_4__.default;
AlertDialog.DescriptionContainer = _alert_dialog_description_container__WEBPACK_IMPORTED_MODULE_2__.default;
AlertDialog.ActionsContainer = _alert_dialog_actions_container__WEBPACK_IMPORTED_MODULE_3__.default;
AlertDialog.Title = _alert_dialog_title__WEBPACK_IMPORTED_MODULE_1__.default;
AlertDialog.Cancel = _alert_dialog_cancel__WEBPACK_IMPORTED_MODULE_5__.default;
AlertDialog.Action = _alert_dialog_action__WEBPACK_IMPORTED_MODULE_6__.default;
AlertDialog.propTypes = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__.Root.propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialog);

/***/ }),

/***/ "../assets/js/app/components/ui/avatar.js":
/*!************************************************!*\
  !*** ../assets/js/app/components/ui/avatar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject;


var sizesMap = {
  sm: {
    width: 16
  },
  md: {
    width: 32
  },
  lg: {
    width: 64
  }
};
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\taspect-ratio: 1 / 1;\n\tborder-radius: 100%;\n\theight: auto;\n\twidth: ", "px;\n"])), function (_ref) {
  var size = _ref.size;
  return sizesMap[size].width;
});
Avatar.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  src: PropTypes.string.isRequired
};
Avatar.defaultProps = {
  size: 'md'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ "../assets/js/app/components/ui/button-base.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/button-base.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


/**
 * Simple button component to handle themes overrides.
 */

var ButtonBase = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\t--color: #000;\n\t--padding: 0;\n\t--background: transparent;\n\t--font-weight: 500;\n\t--font-size: 16px;\n\t--font-family: Roboto, sans-serif;\n\t--text-transform: none;\n\t--letter-spacing: 0;\n\t--font-style: normal;\n\t--text-decoration: none;\n\t--line-height: normal;\n\t--word-spacing: normal;\n\t--text-shadow: none;\n\t--box-shadow: none;\n\t--border: none;\n\t--border-radius: 0;\n\n\t// Override themes selectors.\n\t&,\n\t&&,\n\t&[type=\"button\"],\n\t&[type=\"submit\"],\n\t&[type=\"reset\"],\n\t&:hover,\n\t&:focus,\n\t&:active,\n\t&:not( :hover ):not( :active ):not( .has-background ),\n\t&:not( :hover ):not( :active ):not( .has-text-color ) {\n\t\tfont-family: var( --font-family ) !important;\n\t\tfont-size: var( --font-size ) !important;\n\t\tfont-weight: var( --font-weight ) !important;\n\t\ttext-transform: var( --text-transform ) !important;\n\t\tletter-spacing: var( --letter-spacing ) !important;\n\t\tfont-style: normal !important;\n\t\ttext-decoration: none !important;\n\t\tline-height: normal !important;\n\t\tword-spacing: normal !important;\n\t\tcolor: var( --color ) !important;\n\t\tbackground: var( --background ) !important;\n\t\tborder: var( --border ) !important;\n\t\ttext-shadow: var( --text-shadow ) !important;\n\t\tbox-shadow: var( --box-shadow ) !important;\n\t\tborder-radius: var( --border-radius ) !important;\n\t\tpadding: var( --padding ) !important;\n\t\toutline: none !important;\n\t\twidth: var( --width, auto ) !important;\n\t\theight: var( --height, auto ) !important;\n\t\tdisplay: var( --display, inline-block ) !important;\n\t\tmin-height: revert !important;\n\t}\n\n\t&:before,\n\t&:after {\n\t\tdisplay: none !important;\n\t}\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonBase);

/***/ }),

/***/ "../assets/js/app/components/ui/button.js":
/*!************************************************!*\
  !*** ../assets/js/app/components/ui/button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-base */ "../assets/js/app/components/ui/button-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2, _templateObject3;



var colorsMap = {
  contained: {
    background: '--color-editor-info',
    border: '--color-editor-info',
    text: '--color-white',
    backgroundHover: '--color-editor-info-dark'
  },
  outlined: {
    background: '--color-ghost',
    border: '--color-gray-400',
    text: '--color-gray-600',
    backgroundHover: '--color-darken'
  },
  transparent: {
    background: '--color-ghost',
    border: '--color-ghost',
    text: '--color-default'
  }
};
var sizesMap = {
  md: {
    padding: '--padding-md',
    fontSize: '--font-size-md'
  }
};
var Button = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_button_base__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t--color-editor-info: #58d0f5;\n\t--color-editor-info-dark: #10bcf2;\n\t--color-default: inherit;\n\t--color-ghost: transparent;\n\t--color-white: #fff;\n\t--color-gray-400: #c2cbd2;\n\t--color-gray-600: #6d7882;\n\t--color-darken: rgba( 0, 0, 0, .05 );\n\n\t--font-size-md: 14px;\n\t--padding-md: 9px 8px;\n\n\t--padding: var( ", " );\n\t--color: var( ", " );\n\t--background: var( ", " );\n\t--border-color: var( ", " );\n\t--border: 1px solid var( --border-color );\n\t--cursor: pointer;\n\t--font-weight: 500;\n\t--font-family: Roboto, sans-serif;\n\t--font-size: var( ", " );\n\t--border-radius: 3px;\n\n\tfont-style: normal;\n\ttext-align: center;\n\tline-height: 1;\n\tcursor: var( --cursor ) !important;\n\ttransition: .3s all;\n\n\t", "\n\n\t", "\n\n\t&:hover, &:focus {\n\t\t--background: var(\n\t\t\t", "\n\t\t);\n\t}\n"])), function (_ref) {
  var size = _ref.size;
  return sizesMap[size].padding;
}, function (_ref2) {
  var variant = _ref2.variant;
  return colorsMap[variant].text;
}, function (_ref3) {
  var variant = _ref3.variant;
  return colorsMap[variant].background;
}, function (_ref4) {
  var variant = _ref4.variant;
  return colorsMap[variant].border;
}, function (_ref5) {
  var size = _ref5.size;
  return sizesMap[size].fontSize;
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t\t\topacity: .5;\n\t\t\tpointer-events: none;\n\t\t\t--cursor: not-allowed;\n\t\t"])));
}, function (_ref7) {
  var variant = _ref7.variant;
  return 'transparent' === variant && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t\t\t--padding: 0;\n\t\t"])));
}, function (_ref8) {
  var variant = _ref8.variant;
  return colorsMap[variant].backgroundHover || colorsMap[variant].background;
});
Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'transparent']).isRequired,
  size: PropTypes.oneOf(['md']).isRequired,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  variant: 'contained',
  size: 'md'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "../assets/js/app/components/ui/checkbox/checkbox.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/ui/checkbox/checkbox.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "../../../node_modules/@radix-ui/react-checkbox/dist/index.module.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");



var _templateObject, _templateObject2;






var StyledCheckbox = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_button_base__WEBPACK_IMPORTED_MODULE_3__.default).attrs(function () {
  return {
    as: _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.Root
  };
})(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  --border-color: #a4afb6;\n  --background: #fff;\n  --border: 1px solid var( --border-color );\n  --border-radius: 3px;\n  --width: 13px;\n  --height: 13px;\n  --display: inline-flex;\n\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: 0;\n  outline: none;\n  transition: 0.2s all;\n  overflow: hidden;\n\n  &[data-state=\"checked\"] {\n    --border-color: #39b54a;\n  }\n\n  &:hover, &:focus {\n\toutline: none;\n\t--background: #eee;\n\n\t& > * {\n\t  --background: rgba(57, 181, 74, 0.8);\n\t}\n  }\n"])));
var StyledIndicator = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.Indicator)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  all: revert;\n\n  position: absolute !important;\n  inset: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  background: #39b54a !important;\n  color: #fff !important;\n  outline: none !important;\n  font-size: 8px !important;\n"])));
function Checkbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledCheckbox, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledIndicator, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "eicon-check"
  })));
}
Checkbox.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.Root.propTypes);

/***/ }),

/***/ "../assets/js/app/components/ui/div-base.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/ui/div-base.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


/**
 * Simple div to handle themes overrides.
 */

var DivBase = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\tbox-sizing: border-box;\n\n\t&:before,\n\t&:after {\n\t\tdisplay: none !important;\n\t}\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivBase);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-arrow.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-arrow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var DropdownArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Arrow)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  fill: #fff;\n  margin: 0 10px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownArrow);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-content.js":
/*!*******************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-content.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");


var _templateObject;




var DropdownContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Content)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  background: #fff !important;\n  border-radius: 3px !important;\n  min-width: 120px !important;\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;\n  animation-duration: 400ms !important;\n  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;\n  padding: 4px !important;\n\n  &[data-state=\"open\"] {\n\t&[data-side=\"top\"] {\n\t  animation-name: ", ";\n\t}\n\n\t&[data-side=\"right\"] {\n\t  animation-name: ", ";\n\t}\n\n\t&[data-side=\"bottom\"] {\n\t  animation-name: ", ";\n\t}\n\n\t&[data-side=\"left\"] {\n\t  animation-name: ", ";\n\t}\n  }\n"])), _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideUpAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideRightAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideDownAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideLeftAndFade);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownContent);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-item.js":
/*!****************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-item.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _excluded = ["children", "icon"];

var _templateObject, _templateObject2;





var variants = {
  default: {
    hoverTextColor: '#6d7882',
    hoverIconColor: '#a4afb6'
  },
  danger: {
    hoverTextColor: '#b01b1b',
    hoverIconColor: '#d9534f'
  }
};
var Icon = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_icon__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  color: #a4afb6 !important;\n  transition: 0.2s all;\n"])));
var StyledDropdownItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.Item)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: 1.2 !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  cursor: pointer !important;\n  border-radius: 4px !important;\n  padding: 7px 12px !important;\n  color: #6d7882 !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  transition: 0.2s all !important;\n\n  &[data-disabled] {\n\topacity: 0.5 !important;\n\tpointer-events: none !important;\n  }\n\n  &:focus {\n\tbackground: #f1f3f5 !important;\n\toutline: none !important;\n\n\tcolor: ", " !important;\n\n\t", " {\n\t  color: ", " !important;\n\t}\n  }\n"])), function (_ref) {
  var variant = _ref.variant;
  return variants[variant].hoverTextColor;
}, Icon, function (_ref2) {
  var variant = _ref2.variant;
  return variants[variant].hoverIconColor;
});
function DropdownItem(_ref3) {
  var children = _ref3.children,
      icon = _ref3.icon,
      props = (0,_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(StyledDropdownItem, props, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Icon, {
    className: icon
  }), children);
}
DropdownItem.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, DropdownItem.propTypes), {}, {
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'danger'])
});
DropdownItem.defaultProps = {
  variant: 'default'
};

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-separator.js":
/*!*********************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-separator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");


var _templateObject;



var DropdownSeparator = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Separator)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  height: 1px !important;\n  background: #f1f3f5 !important;\n  margin: 7px 10px !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownSeparator);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var _dropdown_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-content */ "../assets/js/app/components/ui/dropdown/dropdown-content.js");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-item */ "../assets/js/app/components/ui/dropdown/dropdown-item.js");
/* harmony import */ var _dropdown_arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-arrow */ "../assets/js/app/components/ui/dropdown/dropdown-arrow.js");
/* harmony import */ var _dropdown_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-separator */ "../assets/js/app/components/ui/dropdown/dropdown-separator.js");





var Dropdown = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.Root;
Dropdown.Trigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.Trigger;
Dropdown.Content = _dropdown_content__WEBPACK_IMPORTED_MODULE_0__.default;
Dropdown.Item = _dropdown_item__WEBPACK_IMPORTED_MODULE_1__.default;
Dropdown.Arrow = _dropdown_arrow__WEBPACK_IMPORTED_MODULE_2__.default;
Dropdown.Separator = _dropdown_separator__WEBPACK_IMPORTED_MODULE_3__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "../assets/js/app/components/ui/icon-button/icon-button.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/icon-button/icon-button.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _excluded = ["name"];

var _templateObject, _templateObject2;






var fontSizeMapping = {
  sm: '15px',
  md: '18px'
};
var StyledIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_button_base__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  --color: #a4afb7;\n  --background: transparent;\n  --padding: 4px;\n  --font-size: ", ";\n  --border: none;\n  --border-radius: 100%;\n  --display: grid;\n\n  transition: 0.2s all;\n  place-items: center;\n  border-radius: 100%;\n  cursor: pointer;\n\n  &:hover, &:focus {\n\t--background: transparent;\n\t--color: #6d7882;\n\toutline: none;\n  }\n\n  &:focus {\n\t--background: #f1f3f5;\n  }\n\n  ", "\n"])), function (_ref) {
  var size = _ref.size;
  return fontSizeMapping[size];
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n\topacity: .5;\n\tpointer-events: none;\n\tcursor: not-allowed;\n  "])));
});
var IconButton = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function (_ref3, ref) {
  var name = _ref3.name,
      props = (0,_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(StyledIconButton, (0,_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: name
  }));
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
IconButton.defaultProps = {
  size: 'md'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButton);

/***/ }),

/***/ "../assets/js/app/components/ui/icon.js":
/*!**********************************************!*\
  !*** ../assets/js/app/components/ui/icon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


/**
 * Simple i tag to handle themes overrides.
 */

var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.i(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "../assets/js/app/components/ui/label/label.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/label/label.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-label */ "../../../node_modules/@radix-ui/react-label/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.Label)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  font-size: 12px !important;\n  color: #a4afb6 !important;\n  font-weight: 500 !important;\n  font-family: Roboto, sans-serif !important;\n  user-select: none !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  line-height: 2 !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ "../assets/js/app/components/ui/marker.js":
/*!************************************************!*\
  !*** ../assets/js/app/components/ui/marker.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;


var sizesMap = {
  xs: 20,
  sm: 25,
  md: 40,
  lg: 80,
  xl: 160
};
var colorsMap = {
  active: {
    background: '--color-editor-info',
    text: '--color-white'
  },
  solid: {
    background: '--color-editor-info',
    text: '--color-white'
  },
  ghost: {
    background: '--color-ghost',
    text: '--color-gray'
  }
};
var bounce = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale( .8 );\n\t\ttransform-origin: 50% 100%;\n\t}\n\n\t50% {\n\t\topacity: 1;\n\t\ttransform: scale( 1.2 );\n\t\ttransform-origin: 50% 100%;\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale( 1 );\n\t\ttransform-origin: 50% 100%;\n\t}\n"])));
var Marker = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span.withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return 'children' === prop;
  }
})(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\t--color-editor-info: #58d0f5;\n\t--color-ghost: #fff;\n\t--color-white: #fff;\n\t--color-gray: #a4afb6;\n\t--color-shadow: rgba( 0, 0, 0, 0.2 );\n\t--size: ", ";\n\t--position: relative;\n\n\tdisplay: grid;\n\tplace-items: center;\n\tposition: relative;\n\theight: calc( var( --size ) * 1px );\n\twidth: calc( var( --size ) * 1px );\n\tpadding-top: .2em;\n\tfont-family: Roboto;\n\tfont-size: calc( var( --size ) * .3px );\n\tfont-weight: 500;\n\tcolor: var( ", " );\n\tisolation: isolate;\n\tanimation: .3s ", " both;\n\ttransition: .3s all;\n\n\t", "\n\n\t&::before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tinset: 0;\n\t\tbackground-color: var( ", " );\n\t\tborder: calc( var( --size ) / 20 * 1px ) solid var( --color-gray );\n\t\tborder-radius: 100% 100% 25% 100%;\n\t\ttransform: rotate( 45deg );\n\n\t\t", ";\n\n\t\t", "\n\t}\n"])), function (_ref) {
  var size = _ref.size;
  return sizesMap[size];
}, function (_ref2) {
  var variant = _ref2.variant;
  return colorsMap[variant].text;
}, bounce, function (_ref3) {
  var muted = _ref3.muted;
  return muted && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t\t\t--color-shadow: transparent;\n\n\t\t\topacity: .5 !important;\n\t\t"])));
}, function (_ref4) {
  var variant = _ref4.variant;
  return colorsMap[variant].background;
}, function (_ref5) {
  var elevation = _ref5.elevation;
  return elevation && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t\t\t\tbox-shadow: 1px 1px ", " var( --color-shadow );\n\t\t\t"])), elevation);
}, function (_ref6) {
  var variant = _ref6.variant;
  return 'active' === variant && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5 || (_templateObject5 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t\t\t\tmask-image: radial-gradient( transparent 30%, #000 35% );\n\t\t\t"])));
});
Marker.propTypes = {
  variant: PropTypes.oneOf(['active', 'solid', 'ghost']).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
  muted: PropTypes.bool,
  elevation: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
Marker.defaultProps = {
  variant: 'solid',
  size: 'md',
  muted: false,
  elevation: 8
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marker);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-body.js":
/*!**********************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-body.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");


var _templateObject;



var PanelBody = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_div_base__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  overflow-y: auto;\n  flex-grow: 1;\n  position: relative;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelBody);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-footer-resize.js":
/*!*******************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-footer-resize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelFooterResize)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject;





var StyledPanelFooterResize = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_div_base__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: grid !important;\n  place-items: center !important;\n  background: #fff !important;\n  color: #a4afb7 !important;\n  font-size: 18px !important;\n"])));
function PanelFooterResize() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPanelFooterResize, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "eicon-ellipsis-h"
  }));
}
PanelFooterResize.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-header-side-col.js":
/*!*********************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-header-side-col.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject;



var PanelHeaderSideCol = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_div_base__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex !important;\n  justify-self: ", " !important;\n"])), function (_ref) {
  var align = _ref.align;
  return align;
});
PanelHeaderSideCol.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  align: PropTypes.oneOf(['start', 'end']).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderSideCol);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-header-title.js":
/*!******************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-header-title.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var PanelHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h3(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 13px !important;\n\tfont-weight: 500 !important;\n\ttext-transform: none !important;\n\tfont-style: normal !important;\n\ttext-decoration: none !important;\n\tline-height: 24px !important;\n\tletter-spacing: normal !important;\n\tword-spacing: normal !important;\n  \tcolor: #6d7882 !important;\n  \ttext-align: center !important;\n  \tflex-grow: 1 !important;\n  \tmargin: 0 !important;\n\n\t&::before, &::after {\n\t\tdisplay: none !important;\n\t}\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderTitle);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-header.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-header.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelHeader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "../assets/js/app/components/ui/panel/panel.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2;





var StyledPanelHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_div_base__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: grid !important;\n  grid-template-columns: 1fr 2fr 1fr !important;\n  grid-column-gap: 10px !important;\n  align-items: center !important;\n  background: #ffffff !important;\n  padding: 8px !important;\n  flex-shrink: 0 !important;\n\n  ", "\n"])), function (_ref) {
  var isFloating = _ref.isFloating;
  return isFloating && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  \tcursor: move;\n  "])));
});
function PanelHeader(props) {
  var _usePanelContext = (0,_panel__WEBPACK_IMPORTED_MODULE_2__.usePanelContext)(),
      _usePanelContext$floa = _usePanelContext.floating,
      active = _usePanelContext$floa.active,
      handleClassName = _usePanelContext$floa.handleClassName;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPanelHeader, {
    className: handleClassName,
    isFloating: active
  }, props.children);
}
PanelHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-loading.js":
/*!*************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-loading.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelLoading)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


var _templateObject, _templateObject2;





var StyledPanelLoading = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_div_base__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  position: absolute !important;\n  inset: 0 !important;\n  background: #e6e9ec !important;\n  transition: 0.3s all !important;\n  font-size: 30px !important;\n  display: grid !important;\n  place-items: center !important;\n  color: #a4afb6 !important;\n\n  ", "\n"])), function (_ref) {
  var show = _ref.show;
  return !show && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\topacity: 0 !important;\n\tpointer-events: none !important;\n  "])));
});
function PanelLoading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPanelLoading, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "eicon-loading eicon-animation-spin"
  }));
}
PanelLoading.propTypes = {
  show: PropTypes.bool
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Panel),
/* harmony export */   "usePanelContext": () => (/* binding */ usePanelContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _panel_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-header */ "../assets/js/app/components/ui/panel/panel-header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _panel_header_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-header-title */ "../assets/js/app/components/ui/panel/panel-header-title.js");
/* harmony import */ var _panel_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-body */ "../assets/js/app/components/ui/panel/panel-body.js");
/* harmony import */ var _panel_footer_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-footer-resize */ "../assets/js/app/components/ui/panel/panel-footer-resize.js");
/* harmony import */ var _panel_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-loading */ "../assets/js/app/components/ui/panel/panel-loading.js");
/* harmony import */ var _panel_header_side_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel-header-side-col */ "../assets/js/app/components/ui/panel/panel-header-side-col.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-draggable */ "../../../node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _templateObject, _templateObject2;













var StyledPanel = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.default)(_div_base__WEBPACK_IMPORTED_MODULE_11__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex !important;\n  flex-direction: column !important;\n  background: #e6e9ec !important;\n  width: 240px !important;\n  height: 440px !important;\n  overflow: hidden !important;\n  border-radius: 3px !important;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;\n\n  ", "\n\n  *:focus {\n    outline: none;\n  }\n"])), function (_ref) {
  var isFloating = _ref.isFloating;
  return isFloating && (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\tposition: fixed !important;\n\ttop: 0 !important;\n\tinset-inline-start: 0 !important;\n\tz-index: ", " !important;\n  "])), _utils__WEBPACK_IMPORTED_MODULE_10__.MAX_Z_INDEX);
});
var PanelContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
function Panel(props) {
  var panelRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      floating: {
        active: !!props.isFloating,
        handleClassName: 'floating-handle'
      }
    };
  }, [props.isFloating]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PanelContext.Provider, {
    value: value
  }, props.isFloating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react_draggable__WEBPACK_IMPORTED_MODULE_9___default()), {
    handle: ".".concat(value.floating.handleClassName),
    defaultPosition: props.defaultPosition,
    nodeRef: panelRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledPanel, (0,_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    ref: panelRef
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledPanel, props));
}
Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  defaultPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  isFloating: PropTypes.bool
};
Panel.Header = _panel_header__WEBPACK_IMPORTED_MODULE_3__.default;
Panel.HeaderTitle = _panel_header_title__WEBPACK_IMPORTED_MODULE_4__.default;
Panel.HeaderSideCol = _panel_header_side_col__WEBPACK_IMPORTED_MODULE_8__.default;
Panel.Body = _panel_body__WEBPACK_IMPORTED_MODULE_5__.default;
Panel.FooterResize = _panel_footer_resize__WEBPACK_IMPORTED_MODULE_6__.default;
Panel.Loading = _panel_loading__WEBPACK_IMPORTED_MODULE_7__.default;
function usePanelContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PanelContext);

  if (!contextValue) {
    throw new Error('`usePanelContext` must be used inside Panel\'s components.');
  }

  return contextValue;
}

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover-arrow.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover-arrow.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var PopoverArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Arrow)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  fill: #fff;\n  margin: 0 10px;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverArrow);

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover-close-button.js":
/*!**********************************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover-close-button.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoverCloseButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _icon_button_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");




var _templateObject;





var StyledCloseButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  --position-spacing: 4px;\n\n  position: absolute;\n  top: var(--position-spacing);\n  inset-inline-end: var(--position-spacing);\n"])));
function PopoverCloseButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_6__.Close, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(StyledCloseButton, (0,_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, props, {
    name: "eicon-editor-close",
    size: "sm"
  })));
}
PopoverCloseButton.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_6__.Close.propTypes);

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover-content.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover-content.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");


var _templateObject;




var PopoverContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Content)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 1em !important;\n  font-weight: normal !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  background: #fff !important;\n  border-radius: 3px !important;\n  min-width: 120px !important;\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;\n  animation-duration: 400ms !important;\n  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;\n\n  &[data-state=\"open\"] {\n\t&[data-side=\"top\"] {\n\t  animation-name: ", ";\n\t}\n\n\t&[data-side=\"right\"] {\n\t  animation-name: ", ";\n\t}\n\n\t&[data-side=\"bottom\"] {\n\t  animation-name: ", ";\n\t}\n\n\t&[data-side=\"left\"] {\n\t  animation-name: ", ";\n\t}\n\n    *:focus {\n      outline: none;\n    }\n  }\n"])), _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideUpAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideRightAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideDownAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideLeftAndFade);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContent);

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popover_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-arrow */ "../assets/js/app/components/ui/popover/popover-arrow.js");
/* harmony import */ var _popover_close_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-close-button */ "../assets/js/app/components/ui/popover/popover-close-button.js");
/* harmony import */ var _popover_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-content */ "../assets/js/app/components/ui/popover/popover-content.js");
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");




var Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Root;
Popover.Trigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Trigger;
Popover.Content = _popover_content__WEBPACK_IMPORTED_MODULE_2__.default;
Popover.Arrow = _popover_arrow__WEBPACK_IMPORTED_MODULE_0__.default;
Popover.CloseButton = _popover_close_button__WEBPACK_IMPORTED_MODULE_1__.default;
Popover.propTypes = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Root.propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popover);

/***/ }),

/***/ "../assets/js/app/components/ui/radio/radio.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/radio/radio.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-radio-group */ "../../../node_modules/@radix-ui/react-radio-group/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



var _templateObject, _templateObject2;





var StyledItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_button_base__WEBPACK_IMPORTED_MODULE_3__.default).attrs(function () {
  return {
    as: _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_5__.Item
  };
})(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  --border-color: #a4afb6;\n  --background: #fff;\n  --border: 1px solid var( --border-color );\n  --border-radius: 100%;\n  --width: 13px;\n  --height: 13px;\n  --display: inline-flex;\n\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: 0;\n  outline: none;\n  transition: 0.2s all;\n  overflow: hidden;\n\n  &[data-state=\"checked\"] {\n    --border-color: #39b54a;\n  }\n\n  &:hover, &:focus {\n\toutline: none;\n\t--background: #eee;\n\n\t& > * {\n\t  --background: rgba(57, 181, 74, 0.8);\n\t}\n  }\n"])));
var StyledIndicator = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_5__.Indicator)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  all: revert;\n\n  position: absolute !important;\n  top: 0 !important;\n  right: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  background: #39b54a !important;\n  color: #fff !important;\n  outline: none !important;\n  font-size: 8px !important;\n  margin: 2px !important;\n  border-radius: 100% !important;\n  width: 7px !important;\n  height: 7px !important;\n"])));
function Radio(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledItem, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledIndicator, null));
}
Radio.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_5__.Item.propTypes);
Radio.Group = _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_5__.RadioGroup;

/***/ }),

/***/ "../assets/js/app/components/ui/sperator/separator.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/ui/sperator/separator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-separator */ "../../../node_modules/@radix-ui/react-separator/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject;




var StyledSeparator = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_4__.Root)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  background: #f1f3f5;\n\n  &[data-orientation=horizontal] {\n\theight: 1px;\n\twidth: 100%;\n\tmargin: 10px 0;\n  }\n\n  &[data-orientation=vertical] {\n\theight: 100%;\n\twidth: 1px;\n\tmargin: 0 10px;\n  }\n"])));
function Separator() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StyledSeparator, null);
}
Separator.propTypes = (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_4__.Root.propTypes);

/***/ }),

/***/ "../assets/js/app/components/ui/textarea.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/ui/textarea.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _excluded = ["maxRows", "autoSize"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;





var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_div_base__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  --font: 500 12px Roboto, sans-serif;\n  --line-height: 1.5;\n  --padding-block: 0.7em;\n\n  font-size: 16px !important;\n  border-radius: 4px !important;\n  border: 1px solid #c2cbd2 !important;\n  transition: .3s border-color, .3s opacity !important;\n  padding: var(--padding-block) 12px !important;\n  overflow: auto !important;\n  width: 100% !important;\n  box-sizing: border-box !important;\n\n  ", ";\n\n  textarea {\n    all: revert;\n\n\tborder: none !important;\n    font: var( --font ) !important;\n\tline-height: var(--line-height) !important;\n\tpadding: 0 !important;\n\tmargin: 0 !important;\n\tcolor: #6d7882 !important;\n\tdisplay: block !important;\n\theight: 100% !important;\n  }\n\n  &:focus-within {\n\tborder-color: #a4afb6 !important;\n\n\t// Accessibility-friendly, since the Container itself has a border on focus.\n\ttextarea:focus {\n\t  outline: none !important;\n\t  border: none !important;\n\t}\n  }\n\n  ", "\n\n  ", ""])), function (_ref) {
  var maxRows = _ref.maxRows;
  return maxRows && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n\t--max-rows: ", ";\n\n\tmax-height: calc((1em * var(--line-height) * var(--max-rows)) + (var(--padding-block) * 2)) !important;\n  "])), maxRows);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n\topacity: .5 !important;\n\tpointer-events: none !important;\n  "])));
}, function (_ref3) {
  var autoSize = _ref3.autoSize;
  return autoSize && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n\tdisplay: inline-grid !important;\n\tvertical-align: top !important;\n\talign-items: center !important;\n\n\ttextarea {\n\t  grid-area: 2 / 1 !important;\n\t  resize: none !important;\n\t  background: none !important;\n\t  appearance: none !important;\n\t  box-shadow: none !important;\n\n\t  &::placeholder {\n\t    all: revert;\n\t  }\n\t}\n\n\t&::after {\n\t  content: attr(data-value) ' ' !important;\n\t  display: block !important;\n\t  font: var( --font ) !important;\n\t  white-space: pre-wrap !important;\n\t  grid-area: 2 / 1 !important;\n\t  visibility: hidden !important;\n\t  line-height: var(--line-height) !important;\n\t}"])));
});
var Textarea = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function (_ref4, ref) {
  var maxRows = _ref4.maxRows,
      autoSize = _ref4.autoSize,
      props = (0,_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, _excluded);

  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Container, {
    maxRows: maxRows,
    "data-value": props.value || props.defaultValue,
    autoSize: autoSize,
    ref: containerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("textarea", (0,_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    ref: ref,
    onInput: function onInput(e) {
      if (props.onInput) {
        props.onInput(e);
      }

      containerRef.current.dataset.value = e.target.value;
    }
  })));
});
Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  disabled: PropTypes.bool,
  autoSize: PropTypes.bool,
  maxRows: PropTypes.number,
  onInput: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);

/***/ }),

/***/ "../assets/js/app/components/ui/tooltip/tooltip-arrow.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/ui/tooltip/tooltip-arrow.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "../../../node_modules/@radix-ui/react-tooltip/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var TooltipArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Arrow)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  fill: #26292c;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipArrow);

/***/ }),

/***/ "../assets/js/app/components/ui/tooltip/tooltip-content.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/tooltip/tooltip-content.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "../../../node_modules/@radix-ui/react-tooltip/dist/index.module.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");


var _templateObject;




var TooltipContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Content)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  all: revert;\n\n  font-family: Roboto, sans-serif !important;\n  font-size: 12px !important;\n  font-weight: normal !important;\n  text-transform: none !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  line-height: normal !important;\n  letter-spacing: normal !important;\n  word-spacing: normal !important;\n  background: #26292c !important;\n  color: #fff !important;\n  border-radius: 3px !important;\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;\n  padding: 5px 12px !important;\n  animation-duration: 400ms !important;\n  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;\n  will-change: transform, opacity !important;\n\n  &[data-state=\"delayed-open\"] {\n\t&[data-side=\"top\"] {\n\t  animation-name: ", "\n\t}\n\n\t&[data-side=\"right\"] {\n\t  animation-name: ", "\n\t}\n\n\t&[data-side=\"bottom\"] {\n\t  animation-name: ", "\n\t}\n\n\t&[data-side=\"left\"] {\n\t  animation-name: ", "\n\t}\n  }\n"])), _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideUpAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideRightAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideDownAndFade, _styles_animation__WEBPACK_IMPORTED_MODULE_1__.slideLeftAndFade);
TooltipContent.propTypes = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Content.propTypes;
TooltipContent.defaultProps = {
  side: 'top'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipContent);

/***/ }),

/***/ "../assets/js/app/components/ui/tooltip/tooltip.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/ui/tooltip/tooltip.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "../../../node_modules/@radix-ui/react-tooltip/dist/index.module.js");
/* harmony import */ var _tooltip_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-arrow */ "../assets/js/app/components/ui/tooltip/tooltip-arrow.js");
/* harmony import */ var _tooltip_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-content */ "../assets/js/app/components/ui/tooltip/tooltip-content.js");



var Tooltip = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Root;
Tooltip.Trigger = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Trigger;
Tooltip.Arrow = _tooltip_arrow__WEBPACK_IMPORTED_MODULE_0__.default;
Tooltip.Content = _tooltip_content__WEBPACK_IMPORTED_MODULE_1__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead-list-footer.js":
/*!*************************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead-list-footer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _typeahead_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeahead-list-item */ "../assets/js/app/components/ui/typeahead/typeahead-list-item.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var TypeaheadListFooter = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_typeahead_list_item__WEBPACK_IMPORTED_MODULE_1__.default).attrs(function () {
  return {
    role: 'contentinfo'
  };
})(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tfont-family: Roboto, sans-serif !important;\n\tbackground: #f1f3f5 !important;\n\ttext-align: center !important;\n\tfont-size: 12px !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeaheadListFooter);

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead-list-item.js":
/*!***********************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead-list-item.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypeaheadListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



var _excluded = ["children", "value", "disabled"];

var _templateObject;



var StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.li(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n\tall: revert;\n\n\tfont-family: Roboto, sans-serif !important;\n\tfont-size: 12px !important;\n\tcolor: #6d7882 !important;\n\tbackground: #ffffff !important;\n\tpadding: 8px !important;\n\tcursor: pointer !important;\n\n\t&:first-child {\n\t\tborder-top-right-radius: inherit;\n\t\tborder-top-left-radius: inherit;\n\t}\n\n\t&:last-child {\n\t\tborder-bottom-right-radius: inherit;\n\t\tborder-bottom-left-radius: inherit;\n\t}\n\n\t&[role=\"option\"]:hover,\n\t&[aria-selected=\"true\"] {\n\t\tbackground: #58d0f5 !important;\n\n\t\t&,\n\t\t& * {\n\t\t\tcolor: #ffffff !important;\n\t\t}\n\t}\n\n\t&[aria-disabled=\"true\"] {\n\t\tcursor: not-allowed !important;\n\t\topacity: .5 !important;\n\t}\n"])));
function TypeaheadListItem(_ref) {
  var children = _ref.children,
      value = _ref.value,
      disabled = _ref.disabled,
      rest = (0,_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(StyledItem, (0,_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    role: disabled ? 'listitem' : 'option',
    "data-value": value
  }, disabled ? {
    'aria-disabled': true
  } : {}, rest), children);
}
TypeaheadListItem.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};
TypeaheadListItem.defaultProps = {
  value: ''
};

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead-list.js":
/*!******************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead-list.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var TypeaheadList = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.ul(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tall: revert;\n\n\tpadding: 0 !important;\n\tmargin: 0 !important;\n\tlist-style: none !important;\n\twidth: 220px !important;\n\tz-index: 1 !important; // Just needs any 'z-index' value in order to appear above other things.\n\tbackground: #ffffff !important;\n\tborder-radius: 3px !important;\n\tbox-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeaheadList);

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead.js":
/*!*************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_debounced_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/use-debounced-callback */ "../assets/js/app/hooks/use-debounced-callback.js");
/* harmony import */ var _typeahead_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-list */ "../assets/js/app/components/ui/typeahead/typeahead-list.js");
/* harmony import */ var _typeahead_list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead-list-item */ "../assets/js/app/components/ui/typeahead/typeahead-list-item.js");
/* harmony import */ var _typeahead_list_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeahead-list-footer */ "../assets/js/app/components/ui/typeahead/typeahead-list-footer.js");
/* harmony import */ var _github_text_expander_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @github/text-expander-element */ "../../../node_modules/@github/text-expander-element/dist/index.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");









var Typeahead = function Typeahead(props) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
      fragment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  /**
   * Debounced fragment renderer.
   *
   * @param {Function} resolve - Promise resolve function.
   * @param {string} text - Text to pass to the rendered fragment as a filter prop.
   *
   * @return {void}
   */

  var debouncedResultsRender = (0,_hooks_use_debounced_callback__WEBPACK_IMPORTED_MODULE_2__.default)(function (_ref) {
    var resolve = _ref.resolve,
        text = _ref.text;

    if (!fragment.current) {
      fragment.current = document.createElement('div');
    }

    var result = props.fragment({
      search: text
    });
    ReactDOM.render(result, fragment.current);
    resolve({
      matched: true,
      fragment: fragment.current
    });
  }, props.debounce);
  /**
   * Handle mention change.
   *
   * @param {CustomEvent} e
   *
   * @return {void}
   */

  var onChange = function onChange(e) {
    var _e$detail = e.detail,
        provide = _e$detail.provide,
        text = _e$detail.text;
    provide(new (_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default())(function (resolve) {
      return debouncedResultsRender({
        resolve: resolve,
        text: text
      });
    }));
  };
  /**
   * Handle mention select.
   *
   * @param {CustomEvent} e
   *
   * @return {void}
   */


  var onValue = function onValue(e) {
    var item = e.detail.item;
    e.detail.value = "".concat(props.handle).concat(item.dataset.value);
  }; // Init & cleanup events.


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current.addEventListener('text-expander-change', onChange);
    ref.current.addEventListener('text-expander-value', onValue);
    return function () {
      if (ref.current) {
        ref.current.removeEventListener('text-expander-change', onChange);
        ref.current.removeEventListener('text-expander-value', onValue);
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text-expander", {
    keys: props.handle,
    ref: ref,
    multiword: props.multiword ? props.handle : null
  }, props.children);
};

Typeahead.List = _typeahead_list__WEBPACK_IMPORTED_MODULE_3__.default;
Typeahead.ListItem = _typeahead_list_item__WEBPACK_IMPORTED_MODULE_4__.default;
Typeahead.ListFooter = _typeahead_list_footer__WEBPACK_IMPORTED_MODULE_5__.default;
Typeahead.propTypes = {
  fragment: PropTypes.func.isRequired,
  debounce: PropTypes.number.isRequired,
  handle: PropTypes.string.isRequired,
  multiword: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
Typeahead.defaultProps = {
  debounce: 0,
  handle: '@',
  multiword: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typeahead);

/***/ }),

/***/ "../assets/js/app/hooks/use-active-thread.js":
/*!***************************************************!*\
  !*** ../assets/js/app/hooks/use-active-thread.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THREAD": () => (/* binding */ THREAD),
/* harmony export */   "NEW_THREAD": () => (/* binding */ NEW_THREAD),
/* harmony export */   "default": () => (/* binding */ useActiveThread),
/* harmony export */   "useIsThreadActive": () => (/* binding */ useIsThreadActive)
/* harmony export */ });
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../../../node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var THREAD = 'thread';
var NEW_THREAD = 'new-thread';
function useActiveThread() {
  var activeThread = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.notes.active;
  });
  /**
   * Set the current active thread.
   *
   * @return void
   */

  var setActive = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (_ref) {
    var type = _ref.type,
        data = _ref.data;
    var allowedTypes = [THREAD, NEW_THREAD];

    if (!allowedTypes.includes(type)) {
      throw new Error('`setActive()` type must be one of: ' + allowedTypes.join(', '));
    }

    return window.top.$e.run('notes/set-active', {
      type: type,
      data: data
    });
  }, []);
  /**
   * Clear the current active thread state.
   *
   * @return void
   */

  var clearActive = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    return window.top.$e.run('notes/clear-active');
  }, []);
  /**
   * Determine of a thread is currently active.
   *
   * @return {boolean}
   */

  var isThreadActive = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (noteId) {
    return activeThread && THREAD === activeThread.type && activeThread.data.noteId === noteId;
  }, [activeThread]);
  return {
    activeThread: activeThread,
    setActive: setActive,
    clearActive: clearActive,
    isThreadActive: isThreadActive
  };
}
/**
 * Memoized flag to determine if a Thread is currently active.
 *
 * @param {number} id - Thread ID.
 *
 * @return {boolean}
 */

var useIsThreadActive = function useIsThreadActive(id) {
  var _useActiveThread = useActiveThread(),
      isThreadActive = _useActiveThread.isThreadActive;

  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return isThreadActive(id);
  }, [isThreadActive, id]);
};

/***/ }),

/***/ "../assets/js/app/hooks/use-auto-focus.js":
/*!************************************************!*\
  !*** ../assets/js/app/hooks/use-auto-focus.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAutoFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * When using the native autofocus and the input is filled with value the cursor
 * will be positioned at the start of the input value, this hook make sure the cursor will be at the end.
 *
 * @param {string|undefined} value the value of the input
 * @return {React.MutableRefObject<undefined>}
 */

function useAutoFocus(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ref.current) {
      var lastCharPosition = value ? value.length : 0;
      ref.current.focus();
      ref.current.setSelectionRange(lastCharPosition, lastCharPosition);
    }
  }, []);
  return ref;
}

/***/ }),

/***/ "../assets/js/app/hooks/use-debounced-callback.js":
/*!********************************************************!*\
  !*** ../assets/js/app/hooks/use-debounced-callback.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDebouncedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebouncedCallback(callback, wait) {
  var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout.current);
      callback.apply(void 0, args);
    };

    clearTimeout(timeout.current);
    timeout.current = setTimeout(later, wait);
  }, [callback, wait]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-new-thread-events.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/hooks/use-new-thread-events.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DISABLE_NEW_THREAD": () => (/* binding */ DISABLE_NEW_THREAD),
/* harmony export */   "default": () => (/* binding */ useNewThreadEvents)
/* harmony export */ });
/* harmony import */ var _use_user_can__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _use_active_thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");



 // ClassName used to disable new thread events on click.

var DISABLE_NEW_THREAD = 'e-notes--disable-new-thread';
/**
 * Bind click events to notable elements.
 *
 * @return {void}
 */

function useNewThreadEvents() {
  var userCanCreateThread = (0,_use_user_can__WEBPACK_IMPORTED_MODULE_0__.default)(_use_user_can__WEBPACK_IMPORTED_MODULE_0__.CAPABILITY_CREATE),
      _useActiveThread = (0,_use_active_thread__WEBPACK_IMPORTED_MODULE_1__.default)(),
      setActive = _useActiveThread.setActive;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!userCanCreateThread) {
      return;
    }

    var elements = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getNoteCapableElements)(); // Change the active element on Elementor element click, to open a new-thread popover.

    var onClick = function onClick(e) {
      // Don't open new thread popover when clicking on an elements that disables it.
      // (e.g. marker that opens a note).
      if (e.target.classList.contains(DISABLE_NEW_THREAD)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      setActive({
        type: _use_active_thread__WEBPACK_IMPORTED_MODULE_1__.NEW_THREAD,
        data: {
          elementId: e.currentTarget.dataset.id
        }
      });
    }; // Bind events.


    elements.forEach(function (element) {
      element.addEventListener('click', onClick);
    }); // Cleanup.

    return function () {
      elements.forEach(function (element) {
        element.removeEventListener('click', onClick);
      });
    };
  }, []);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-note.js":
/*!******************************************!*\
  !*** ../assets/js/app/hooks/use-note.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNote)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "../../../node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find-index.js */ "../../../node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







 // Hook to fetch note data by ID.

function useNote(noteId) {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)(),
      onSuccess = useOnSuccess(queryClient),
      placeholderData = usePlaceholderDataCallback(queryClient, noteId);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)(['note', noteId], /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(_ref) {
      var _ref$queryKey, id, signal, _yield$window$top$$e$, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$queryKey = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref.queryKey, 2), id = _ref$queryKey[1], signal = _ref.signal;
              _context.next = 3;
              return window.top.$e.data.get('notes/index', {
                id: id
              }, {
                refresh: true,
                signal: signal
              });

            case 3:
              _yield$window$top$$e$ = _context.sent;
              data = _yield$window$top$$e$.data;
              return _context.abrupt("return", _models_note__WEBPACK_IMPORTED_MODULE_5__.default.createFromResponse(data.data));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), {
    onSuccess: onSuccess,
    placeholderData: placeholderData // Use Note placeholder data from the "main" query.

  });
} // Get placeholder data for note.

function usePlaceholderDataCallback(queryClient, noteId) {
  return (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function () {
    var _queryClient$getQuery;

    return (_queryClient$getQuery = queryClient.getQueryData('notes', {
      active: true,
      exact: false
    })) === null || _queryClient$getQuery === void 0 ? void 0 : _queryClient$getQuery.find(function (note) {
      return note.id === noteId;
    });
  }, [queryClient, noteId]);
} // Hook to replace the Thread data in the "main" query, each time a Thread is fetched.


function useOnSuccess(queryClient) {
  return (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (fetchedNote) {
    if (fetchedNote.isReply()) {
      return;
    }

    queryClient.setQueriesData({
      queryKey: 'notes',
      exact: false,
      active: true
    }, function (notes) {
      if (!notes) {
        return notes;
      }

      var id = notes.findIndex(function (note) {
        return note.id === fetchedNote.id;
      }); // Replace the corresponding Thread.

      if (id !== -1) {
        notes[id] = fetchedNote;
      }

      return notes;
    });
  }, [queryClient]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-config.js":
/*!**************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-config.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotesConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns notes configuration
 *
 * @return {Object} config
 */

function useNotesConfig() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return window.top.$e.components.get('notes').config;
  }, []);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-filters.js":
/*!***************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-filters.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotesFilters)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Use & set Notes filters from the global state.
 */

function useNotesFilters() {
  var filters = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.notes.filters;
  }),
      setFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (newFilters) {
    var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return window.top.$e.run('notes/filter', {
      filters: newFilters,
      overwrite: overwrite
    });
  }, []);
  return [filters, setFilters];
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-mutations.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-mutations.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateMutation": () => (/* binding */ useCreateMutation),
/* harmony export */   "useUpdateMutation": () => (/* binding */ useUpdateMutation),
/* harmony export */   "useDeleteMutation": () => (/* binding */ useDeleteMutation),
/* harmony export */   "useResolveMutation": () => (/* binding */ useResolveMutation),
/* harmony export */   "useReadMutation": () => (/* binding */ useReadMutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "../../../node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "../../../node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "../../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "../../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../../../node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../../../node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../../../node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _use_notes_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");



var _excluded = ["id"];














function useCreateMutation() {
  var invalidateSingle = useInvalidateSingle(),
      invalidateList = useInvalidateList(),
      invalidateSummary = useInvalidateSummary(),
      config = (0,_use_notes_config__WEBPACK_IMPORTED_MODULE_13__.default)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useMutation)( /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee(_ref) {
      var postId, elementId, content, _ref$routeUrl, routeUrl, _ref$routeTitle, routeTitle, _ref$status, status, parentId, _ref$isPublic, isPublic, _yield$window$top$$e$, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              postId = _ref.postId, elementId = _ref.elementId, content = _ref.content, _ref$routeUrl = _ref.routeUrl, routeUrl = _ref$routeUrl === void 0 ? config.route.url : _ref$routeUrl, _ref$routeTitle = _ref.routeTitle, routeTitle = _ref$routeTitle === void 0 ? config.route.title : _ref$routeTitle, _ref$status = _ref.status, status = _ref$status === void 0 ? 'publish' : _ref$status, parentId = _ref.parentId, _ref$isPublic = _ref.isPublic, isPublic = _ref$isPublic === void 0 ? null : _ref$isPublic;

              if (!postId) {
                postId = (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getDocumentIdByElement)(elementId);
              }

              _context.next = 4;
              return window.top.$e.data.create('notes/index', (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
                post_id: postId,
                element_id: elementId,
                content: content,
                route_url: routeUrl,
                route_title: routeTitle,
                status: status,
                parent_id: parentId,
                mentioned_usernames: (0,_utils__WEBPACK_IMPORTED_MODULE_14__.extractMentions)(content)
              }, null !== isPublic ? {
                is_public: isPublic
              } : {}));

            case 4:
              _yield$window$top$$e$ = _context.sent;
              data = _yield$window$top$$e$.data;
              return _context.abrupt("return", _models_note__WEBPACK_IMPORTED_MODULE_12__.default.createFromResponse(data.data));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), {
    onSuccess: function onSuccess(note) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default().all([note.isThread() ? invalidateList() : invalidateSingle({
        id: note.parentId
      }), invalidateSummary()]);
    }
  });
}
function useUpdateMutation() {
  var invalidateSingle = useInvalidateSingle();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useMutation)( /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee2(_ref3) {
      var id, content, _yield$window$top$$e$2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _ref3.id, content = _ref3.values.content;
              _context2.next = 3;
              return window.top.$e.data.update('notes/index', {
                content: content,
                mentioned_usernames: (0,_utils__WEBPACK_IMPORTED_MODULE_14__.extractMentions)(content)
              }, {
                id: id
              });

            case 3:
              _yield$window$top$$e$2 = _context2.sent;
              data = _yield$window$top$$e$2.data;
              return _context2.abrupt("return", _models_note__WEBPACK_IMPORTED_MODULE_12__.default.createFromResponse(data.data));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }(), {
    onSuccess: function onSuccess(note) {
      return invalidateSingle({
        id: note.isThread() ? note.id : note.parentId
      });
    }
  });
}
function useDeleteMutation() {
  var invalidateList = useInvalidateList(),
      invalidateSingle = useInvalidateSingle(),
      invalidateSummary = useInvalidateSummary();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useMutation)( /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee3(_ref5) {
      var id, parentId, _ref5$force, force;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref5.id, parentId = _ref5.parentId, _ref5$force = _ref5.force, force = _ref5$force === void 0 ? false : _ref5$force;
              _context3.next = 3;
              return window.top.$e.data.delete('notes/index', {
                id: id
              }, {
                force: force
              });

            case 3:
              return _context3.abrupt("return", {
                id: id,
                parentId: parentId
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }(), {
    onSuccess: function onSuccess(_ref7) {
      var parentId = _ref7.parentId;
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default().all([parentId ? invalidateSingle({
        id: parentId
      }) : invalidateList(), invalidateSummary()]);
    }
  });
}
function useResolveMutation() {
  var invalidateList = useInvalidateList(),
      invalidateSingle = useInvalidateSingle();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useMutation)( /*#__PURE__*/function () {
    var _ref9 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee4(_ref8) {
      var id, isResolved, _yield$window$top$$e$3, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref8.id, isResolved = _ref8.isResolved;
              _context4.next = 3;
              return window.top.$e.data.update('notes/index', {
                is_resolved: isResolved
              }, {
                id: id
              });

            case 3:
              _yield$window$top$$e$3 = _context4.sent;
              data = _yield$window$top$$e$3.data;
              return _context4.abrupt("return", _models_note__WEBPACK_IMPORTED_MODULE_12__.default.createFromResponse(data.data));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }(), {
    onSuccess: function onSuccess(note) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default().all([invalidateSingle({
        id: note.id
      }), invalidateList({
        // Not relevant to invalidate queries that does not filter by resolved.
        predicate: function predicate(_ref10) {
          var _queryKey$;

          var queryKey = _ref10.queryKey;
          return (_queryKey$ = queryKey[1]) === null || _queryKey$ === void 0 ? void 0 : _queryKey$.hasOwnProperty('is_resolved');
        }
      })]);
    }
  });
}
function useReadMutation() {
  var invalidateSingle = useInvalidateSingle();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useMutation)( /*#__PURE__*/function () {
    var _ref12 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee5(_ref11) {
      var ids, isRead;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ids = _ref11.ids, isRead = _ref11.isRead;
              ids = ids.filter(function (id) {
                return !!id && id > 0;
              });
              _context5.next = 4;
              return window.top.$e.data[isRead ? 'create' : 'delete']('notes/read-status', {
                ids: ids
              });

            case 4:
              return _context5.abrupt("return", ids);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref12.apply(this, arguments);
    };
  }(), {
    onSuccess: function onSuccess(ids) {
      return invalidateSingle({
        // Invalidate singles queries if one of the ids that was mutate.
        predicate: function predicate(_ref13) {
          var queryKey = _ref13.queryKey;
          return ids.includes(queryKey[1]);
        }
      });
    }
  });
}

function useInvalidateSingle() {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useQueryClient)();
  return (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(function (_ref14) {
    var id = _ref14.id,
        options = (0,_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref14, _excluded);

    var queryKey = ['note'];

    if (id) {
      queryKey.push(id);
    }

    return queryClient.invalidateQueries((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
      queryKey: queryKey
    }, options));
  }, [queryClient]);
}

function useInvalidateList() {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useQueryClient)();
  return (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var queryKey = ['notes'];
    return queryClient.invalidateQueries((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
      queryKey: queryKey
    }, options));
  }, [queryClient]);
}

function useInvalidateSummary() {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useQueryClient)();
  return (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var queryKey = ['notes/summary'];
    return queryClient.invalidateQueries((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
      queryKey: queryKey
    }, options));
  }, [queryClient]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-or-notes-summary.js":
/*!************************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-or-notes-summary.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIEW_NOTES": () => (/* binding */ VIEW_NOTES),
/* harmony export */   "VIEW_NOTES_SUMMARY": () => (/* binding */ VIEW_NOTES_SUMMARY),
/* harmony export */   "default": () => (/* binding */ useNotesOrNotesSummary)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-notes */ "../assets/js/app/hooks/use-notes.js");
/* harmony import */ var _use_notes_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-notes-summary */ "../assets/js/app/hooks/use-notes-summary.js");





var VIEW_NOTES = 'notes';
var VIEW_NOTES_SUMMARY = 'notes-summary';
function useNotesOrNotesSummary() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(VIEW_NOTES),
      _useState2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      view = _useState2[0],
      setView = _useState2[1],
      isNotesView = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return VIEW_NOTES === view;
  }, [view]),
      isNotesSummaryView = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return VIEW_NOTES_SUMMARY === view;
  }, [view]);

  var notesQuery = (0,_use_notes__WEBPACK_IMPORTED_MODULE_3__.default)({
    enabled: isNotesView
  }),
      notesSummaryQuery = (0,_use_notes_summary__WEBPACK_IMPORTED_MODULE_4__.default)({
    enabled: isNotesSummaryView
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, VIEW_NOTES === view ? notesQuery : notesSummaryQuery), {}, {
      setView: setView,
      view: view,
      isNotesView: isNotesView,
      isNotesSummaryView: isNotesSummaryView
    });
  }, [notesQuery, notesSummaryQuery]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-summary.js":
/*!***************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-summary.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotesSummary)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _models_note_summary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/note-summary */ "../assets/js/app/models/note-summary.js");
/* harmony import */ var _use_notes_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-notes-filters */ "../assets/js/app/hooks/use-notes-filters.js");










var defaultOptions = {
  enabled: true,
  params: {}
};
function useNotesSummary() {
  var rawOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useNotesFilters = (0,_use_notes_filters__WEBPACK_IMPORTED_MODULE_9__.default)(),
      _useNotesFilters2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useNotesFilters, 1),
      filters = _useNotesFilters2[0];

  var options = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, defaultOptions), rawOptions);
  }, [rawOptions]);
  var queryParams = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_7__.normalizeQueryParams)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, filters), options.params || {}));
  }, [options.params, filters]);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)(['notes/summary', queryParams], /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(_ref) {
      var _ref$queryKey, params, signal, _yield$window$top$$e$, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$queryKey = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref.queryKey, 2), params = _ref$queryKey[1], signal = _ref.signal;
              _context.next = 3;
              return window.top.$e.data.get('notes/summary', (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
                parent_id: 0
              }, params), {
                refresh: true,
                signal: signal
              });

            case 3:
              _yield$window$top$$e$ = _context.sent;
              data = _yield$window$top$$e$.data;
              return _context.abrupt("return", data.data.map(function (rawNote) {
                return _models_note_summary__WEBPACK_IMPORTED_MODULE_8__.default.createFromResponse(rawNote);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), {
    keepPreviousData: true,
    enabled: options.enabled
  });
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes.js":
/*!*******************************************!*\
  !*** ../assets/js/app/hooks/use-notes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _use_notes_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _use_notes_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-notes-filters */ "../assets/js/app/hooks/use-notes-filters.js");











var defaultOptions = {
  enabled: true,
  params: {}
};
function useNotes() {
  var rawOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useNotesConfig = (0,_use_notes_config__WEBPACK_IMPORTED_MODULE_9__.default)(),
      route = _useNotesConfig.route,
      document = _useNotesConfig.document;

  var _useNotesFilters = (0,_use_notes_filters__WEBPACK_IMPORTED_MODULE_10__.default)(),
      _useNotesFilters2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useNotesFilters, 1),
      filters = _useNotesFilters2[0];

  var options = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, defaultOptions), rawOptions);
  }, [rawOptions]);
  var queryParams = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    var routeFilter = document.is_elementor_library ? {
      post_id: document.id
    } : {
      route_url: encodeURIComponent(route.url)
    };
    return (0,_utils__WEBPACK_IMPORTED_MODULE_8__.normalizeQueryParams)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
      parent_id: 0,
      order_by: 'last_activity_at',
      order: 'desc'
    }, routeFilter), filters), options.params || {}));
  }, [document, route, filters, options.params]);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)(['notes', queryParams], /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(_ref) {
      var _ref$queryKey, params, signal, _yield$window$top$$e$, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$queryKey = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref.queryKey, 2), params = _ref$queryKey[1], signal = _ref.signal;
              _context.next = 3;
              return window.top.$e.data.get('notes/index', params, {
                refresh: true,
                signal: signal
              });

            case 3:
              _yield$window$top$$e$ = _context.sent;
              data = _yield$window$top$$e$.data;
              return _context.abrupt("return", data.data.map(function (rawNote) {
                return _models_note__WEBPACK_IMPORTED_MODULE_5__.default.createFromResponse(rawNote);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), {
    keepPreviousData: true,
    enabled: options.enabled
  });
}

/***/ }),

/***/ "../assets/js/app/hooks/use-scroll-into-view.js":
/*!******************************************************!*\
  !*** ../assets/js/app/hooks/use-scroll-into-view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScrollIntoView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _excluded = ["onlyIfNeeded"];
 // Hook to scroll into the `ref` view when a condition is truthy.

function useScrollIntoView(condition) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$onlyIfNeeded = _ref.onlyIfNeeded,
      onlyIfNeeded = _ref$onlyIfNeeded === void 0 ? true : _ref$onlyIfNeeded,
      scrollOptions = (0,_babel_runtime_corejs2_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var shouldScroll = !!condition;

    if (onlyIfNeeded) {
      shouldScroll = shouldScroll && !isFullyInViewport(ref.current);
    }

    if (shouldScroll) {
      /**
       * Defer to wait for React state stack to be empty, and all of the components have finished rendering,
       * since it causes a bug in Chromium based browsers.
       *
       * @see https://stackoverflow.com/questions/68263352/smooth-scroll-bug-in-react-useeffect-hook-only-on-chrome-chromium
       * @see https://stackoverflow.com/questions/59782858/scrollintoview-behavior-smooth-is-broken-in-react
       */
      setTimeout(function () {
        ref.current.scrollIntoView((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        }, scrollOptions));
      });
    }
  }, [condition]);
  return ref;
}
/**
 * Check if an element is fully in viewport.
 *
 * @param {HTMLElement} element
 *
 * @return {boolean}
 */

function isFullyInViewport(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      left = _element$getBoundingC.left,
      bottom = _element$getBoundingC.bottom,
      right = _element$getBoundingC.right;

  var _element$parentElemen = element.parentElement.getBoundingClientRect(),
      parentTop = _element$parentElemen.top,
      parentRight = _element$parentElemen.right,
      parentBottom = _element$parentElemen.bottom,
      parentLeft = _element$parentElemen.left;

  var isInBodyView = top >= 0 && left >= 0 && top <= window.innerHeight && left <= window.innerWidth;
  var isInParentView = top >= parentTop && right <= parentRight && bottom <= parentBottom && left >= parentLeft;
  return isInBodyView && isInParentView;
}

/***/ }),

/***/ "../assets/js/app/hooks/use-user-can.js":
/*!**********************************************!*\
  !*** ../assets/js/app/hooks/use-user-can.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAPABILITY_CREATE": () => (/* binding */ CAPABILITY_CREATE),
/* harmony export */   "CAPABILITY_EDIT": () => (/* binding */ CAPABILITY_EDIT),
/* harmony export */   "CAPABILITY_DELETE": () => (/* binding */ CAPABILITY_DELETE),
/* harmony export */   "CAPABILITY_CREATE_USERS": () => (/* binding */ CAPABILITY_CREATE_USERS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_notes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");


var CAPABILITY_CREATE = 'create';
var CAPABILITY_EDIT = 'edit';
var CAPABILITY_DELETE = 'delete';
var CAPABILITY_CREATE_USERS = 'create_users';

var useUserCan = function useUserCan(capability) {
  var note = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var notesConfig = (0,_use_notes_config__WEBPACK_IMPORTED_MODULE_1__.default)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    // Note capabilities.
    if (note) {
      return !!note.userCan[capability];
    } // Global capabilities.


    return !!notesConfig.current_user_can[capability];
  }, [capability, note, notesConfig]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserCan);

/***/ }),

/***/ "../assets/js/app/hooks/use-users.js":
/*!*******************************************!*\
  !*** ../assets/js/app/hooks/use-users.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUsers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/user */ "../assets/js/app/models/user.js");









var defaultOptions = {
  enabled: true,
  params: {}
};
function useUsers() {
  var rawOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({}, defaultOptions), rawOptions);
  }, [rawOptions]);
  var queryParams = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.normalizeQueryParams)(options.params || {});
  }, [options.params]);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)(['users', queryParams], /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(_ref) {
      var _ref$queryKey, params, signal, _yield$window$top$$e$, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$queryKey = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref.queryKey, 2), params = _ref$queryKey[1], signal = _ref.signal;
              _context.next = 3;
              return window.top.$e.data.get('notes/users', params, {
                refresh: true,
                signal: signal
              });

            case 3:
              _yield$window$top$$e$ = _context.sent;
              data = _yield$window$top$$e$.data;
              return _context.abrupt("return", data.data.map(function (user) {
                return _models_user__WEBPACK_IMPORTED_MODULE_8__.default.createFromResponse(user);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), {
    keepPreviousData: true,
    enabled: options.enabled
  });
}

/***/ }),

/***/ "../assets/js/app/hooks/use-watch.js":
/*!*******************************************!*\
  !*** ../assets/js/app/hooks/use-watch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWatch)
/* harmony export */ });
var _React = React,
    useEffect = _React.useEffect,
    useRef = _React.useRef;
/**
 * A util to trigger a callback only when the value changed except the first render.
 *
 * @param {Function} callback
 * @param {Array} deps
 */

function useWatch(callback, deps) {
  var isFirstRender = useRef(true);
  useEffect(function () {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    callback();
  }, deps);
}

/***/ }),

/***/ "../assets/js/app/models/base-model.js":
/*!*********************************************!*\
  !*** ../assets/js/app/models/base-model.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseModel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);





var BaseModel = /*#__PURE__*/function () {
  function BaseModel() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, BaseModel);
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(BaseModel, [{
    key: "init",
    value:
    /**
     * Using init and not the default constructor because there is a problem to fill the instance
     * dynamically in the constructor.
     *
     * @param {Object} data all the properties
     * @return {BaseModel} Instance of base model
     */
    function init() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(data).forEach(function (_ref) {
        var _ref2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        _this[key] = value;
      });

      return this;
    }
  }]);

  return BaseModel;
}();



/***/ }),

/***/ "../assets/js/app/models/document.js":
/*!*******************************************!*\
  !*** ../assets/js/app/models/document.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");








var Document = /*#__PURE__*/function (_BaseModel) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Document, _BaseModel);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__.default)(Document);

  function Document() {
    var _this;

    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Document);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "id", void 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "type", void 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "typeTitle", void 0);

    return _this;
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Document, null, [{
    key: "createFromResponse",
    value:
    /**
     * Create a document from server response
     *
     * @param {Object} data
     */
    function createFromResponse(data) {
      return new Document().init({
        id: data.id,
        type: data.type,
        typeTitle: data.type_title
      });
    }
  }]);

  return Document;
}(_base_model__WEBPACK_IMPORTED_MODULE_6__.default);



/***/ }),

/***/ "../assets/js/app/models/note-summary.js":
/*!***********************************************!*\
  !*** ../assets/js/app/models/note-summary.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteSummary)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");








var NoteSummary = /*#__PURE__*/function (_BaseModel) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(NoteSummary, _BaseModel);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__.default)(NoteSummary);

  function NoteSummary() {
    var _this;

    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NoteSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "url", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "fullURL", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "title", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "notesCount", 0);

    return _this;
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NoteSummary, null, [{
    key: "createFromResponse",
    value:
    /**
     * Create a note from server response
     *
     * @param {Object} data
     */
    function createFromResponse(data) {
      return new NoteSummary().init({
        url: data.url,
        fullURL: data.full_url,
        title: data.title,
        notesCount: data.notes_count
      });
    }
  }]);

  return NoteSummary;
}(_base_model__WEBPACK_IMPORTED_MODULE_6__.default);



/***/ }),

/***/ "../assets/js/app/models/note.js":
/*!***************************************!*\
  !*** ../assets/js/app/models/note.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../../../node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user */ "../assets/js/app/models/user.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./document */ "../assets/js/app/models/document.js");












var Note = /*#__PURE__*/function (_BaseModel) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Note, _BaseModel);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__.default)(Note);

  function Note() {
    var _this;

    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Note);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "id", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "parentId", 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "elementId", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "content", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "repliesCount", 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "unreadRepliesCount", 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "replies", []);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "author", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "readers", []);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "isRead", false);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "isResolved", false);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "routeUrl", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "routeTitle", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "userCan", {});

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "createdAt", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "updatedAt", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "lastActivityAt", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "_formattedLastActivityAt", '');

    return _this;
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Note, [{
    key: "getFormattedLastActivityAt",
    value:
    /**
     * TODO: Change to WP site settings format.
     *
     * @return {string} Last activity date formatted.
     */
    function getFormattedLastActivityAt() {
      if (!this._formattedLastActivityAt) {
        this._formattedLastActivityAt = this.lastActivityAt.toLocaleString();
      }

      return this._formattedLastActivityAt;
    }
    /**
     * Get the note deep link.
     *
     * @return {string}
     */

  }, {
    key: "getURL",
    value: function getURL() {
      var id = this.isReply() ? this.parentId : this.id;
      return this.constructor.getURL(id);
    }
    /**
     * Get a note deep link by ID.
     *
     * @param {number} id
     *
     * @return {string}
     */

  }, {
    key: "isUnreadThread",
    value:
    /**
     * Check if the current note or one of its replies are unread.
     *
     * @return {boolean}
     */
    function isUnreadThread() {
      return this.isThread() && (!this.isRead || this.unreadRepliesCount > 0);
    }
    /**
     * Determine if the Note is a Thread.
     *
     * @return {boolean} - Is thread.
     */

  }, {
    key: "isThread",
    value: function isThread() {
      return 0 === this.parentId;
    }
    /**
     * Determine if the Note is a Reply.
     *
     * @return {boolean} - Is reply.
     */

  }, {
    key: "isReply",
    value: function isReply() {
      return !this.isThread();
    }
  }], [{
    key: "createFromResponse",
    value:
    /**
     * Create a note from server response
     *
     * @param {Object} data
     */
    function createFromResponse(data) {
      return new Note().init({
        id: data.id,
        parentId: data.parent_id,
        elementId: data.element_id,
        content: data.content,
        repliesCount: data.replies_count,
        unreadRepliesCount: data.unread_replies_count,
        replies: data.replies.map(function (reply) {
          return Note.createFromResponse(reply);
        }),
        author: data.author ? _user__WEBPACK_IMPORTED_MODULE_9__.default.createFromResponse(data.author) : null,
        document: data.document ? _document__WEBPACK_IMPORTED_MODULE_10__.default.createFromResponse(data.document) : null,
        readers: data.readers ? data.readers.map(function (reader) {
          return _user__WEBPACK_IMPORTED_MODULE_9__.default.createFromResponse(reader);
        }) : [],
        isRead: data.is_read,
        isResolved: data.is_resolved,
        routeUrl: data.route_url,
        routeTitle: data.route_title,
        userCan: data.user_can,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
        lastActivityAt: new Date(data.last_activity_at)
      });
    }
  }, {
    key: "getURL",
    value: function getURL(id) {
      var route = window.top.$e.components.get('notes').config.route;
      return route.note_url_pattern.replace('{{NOTE_ID}}', id);
    }
  }]);

  return Note;
}(_base_model__WEBPACK_IMPORTED_MODULE_8__.default);



/***/ }),

/***/ "../assets/js/app/models/user.js":
/*!***************************************!*\
  !*** ../assets/js/app/models/user.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "../../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");









var User = /*#__PURE__*/function (_BaseModel) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(User, _BaseModel);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__.default)(User);

  function User() {
    var _this;

    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "id", null);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "name", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "slug", '');

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "avatarUrls", {
      24: null,
      48: null,
      96: null
    });

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "capabilities", {});

    return _this;
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(User, null, [{
    key: "createFromResponse",
    value:
    /**
     * Create a user from server response
     *
     * @param {Object} data
     */
    function createFromResponse(data) {
      var _data$capabilities, _data$capabilities$no;

      return new User().init({
        id: data.id,
        name: data.name,
        slug: data.slug,
        avatarUrls: data.avatar_urls,
        capabilities: {
          notes: {
            read: (_data$capabilities = data.capabilities) === null || _data$capabilities === void 0 ? void 0 : (_data$capabilities$no = _data$capabilities.notes) === null || _data$capabilities$no === void 0 ? void 0 : _data$capabilities$no.can_read
          }
        }
      });
    }
  }]);

  return User;
}(_base_model__WEBPACK_IMPORTED_MODULE_7__.default);



/***/ }),

/***/ "../assets/js/app/query-client.js":
/*!****************************************!*\
  !*** ../assets/js/app/query-client.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 20,
      // 20 seconds
      refetchOnWindowFocus: true
    },
    mutations: {
      retry: 2
    }
  }
}));

/***/ }),

/***/ "../assets/js/app/styles/animation.js":
/*!********************************************!*\
  !*** ../assets/js/app/styles/animation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideUpAndFade": () => (/* binding */ slideUpAndFade),
/* harmony export */   "slideRightAndFade": () => (/* binding */ slideRightAndFade),
/* harmony export */   "slideDownAndFade": () => (/* binding */ slideDownAndFade),
/* harmony export */   "slideLeftAndFade": () => (/* binding */ slideLeftAndFade),
/* harmony export */   "spin": () => (/* binding */ spin)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;


var slideUpAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  0% {\n\topacity: 0;\n\ttransform: translateY(3px);\n  }\n  100% {\n\topacity: 1;\n\ttransform: translateY(0);\n  }\n"])));
var slideRightAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  0% {\n\topacity: 0;\n\ttransform: translateX(-3px);\n  }\n  100% {\n\topacity: 1;\n\ttransform: translateX(0);\n  }\n"])));
var slideDownAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  0% {\n\topacity: 0;\n\ttransform: translateY(-3px);\n  }\n  100% {\n\topacity: 1;\n\ttransform: translateY(0);\n  }\n"])));
var slideLeftAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  0% {\n\topacity: 0;\n\ttransform: translateX(3px);\n  }\n  100% {\n\topacity: 1;\n\ttransform: translateX(0);\n  }\n"])));
var spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject5 || (_templateObject5 = (0,_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  0% {\n\ttransform: rotate(0deg);\n  }\n  100% {\n\ttransform: rotate(360deg);\n  }\n"])));

/***/ }),

/***/ "../assets/js/app/utils.js":
/*!*********************************!*\
  !*** ../assets/js/app/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_Z_INDEX": () => (/* binding */ MAX_Z_INDEX),
/* harmony export */   "getNoteCapableElements": () => (/* binding */ getNoteCapableElements),
/* harmony export */   "getDocumentIdByElement": () => (/* binding */ getDocumentIdByElement),
/* harmony export */   "extractMentions": () => (/* binding */ extractMentions),
/* harmony export */   "normalizeQueryParams": () => (/* binding */ normalizeQueryParams)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../../../node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "../../../node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_rich_text_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/rich-text-parser */ "../assets/js/services/rich-text-parser/index.js");
/* harmony import */ var _services_rich_text_parser_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/rich-text-parser/tokens */ "../assets/js/services/rich-text-parser/tokens/index.js");











/**
 * Max value for the css property z-index
 *
 * @type {number}
 */

var MAX_Z_INDEX = 2147483647;
/**
 * Get an array of elements that allowed to create a note on them.
 *
 * @param {string[]|null} ids - List of IDs to filter. Empty array will return anything.
 *
 * @return {NodeList} - List of elements.
 */

function getNoteCapableElements() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var selectorPattern = '.elementor-element[data-id=%s]';
  var selector = ''; // Filter elements by given IDs.

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default()(ids)) {
    // Filter nullish IDs.
    ids = ids.filter(function (id) {
      return !!id;
    });
    selector = ids.map(function (id) {
      return selectorPattern.replace('%s', "\"".concat(id, "\""));
    }).join(',');
  } else {
    // Select any element.
    selector = selectorPattern.replace('=%s', '');
  }

  return document.querySelectorAll(selector);
}
/**
 * Get the document ID for an element.
 * Used mainly for handling Header / Footer notes when create a note in a page and not directly on them.
 *
 * @param {string} elementId - Elementor element ID.
 * @param {string|number} defaultId - Default ID to return.
 *
 * @return {string|number}
 */

function getDocumentIdByElement(elementId) {
  var _getNoteCapableElemen;

  var defaultId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.top.$e.components.get('notes').config.document.id;
  var element = (_getNoteCapableElemen = getNoteCapableElements([elementId])) === null || _getNoteCapableElemen === void 0 ? void 0 : _getNoteCapableElemen[0];

  if (!element) {
    return defaultId;
  }

  var document = element.closest('[data-elementor-id]');

  if (!document) {
    return defaultId;
  }

  return document.dataset.elementorId;
}
/**
 * Extract mentions from string.
 *
 * @param {string} content - Text to extract from.
 *
 * @return {string[]}
 */

function extractMentions(content) {
  var usernames = (0,_services_rich_text_parser__WEBPACK_IMPORTED_MODULE_9__.default)({
    tokenClasses: [_services_rich_text_parser_tokens__WEBPACK_IMPORTED_MODULE_10__.Mention],
    fallbackTokenClass: false,
    parsePipeFunctions: []
  }).parse(content).map(function (token) {
    return token.username.value;
  }); // Return only unique values.

  return (0,_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(new (_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7___default())(usernames));
}
/**
 * Normalize query params object.
 *
 * @param {Object} params - Query params definition.
 *
 * @return {Object} - Normalized query params.
 */

function normalizeQueryParams(params) {
  return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default()(params).reduce(function (queryParams, _ref) {
    var _ref2 = (0,_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, 2),
        param = _ref2[0],
        value = _ref2[1];

    // Remove nullish params.
    if (null === value) {
      return queryParams;
    } // Convert booleans to 1/0.


    if ('boolean' === typeof value) {
      value = value ? 1 : 0;
    }

    return (0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_corejs2_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, queryParams), {}, (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, param, value));
  }, {});
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/index.js":
/*!*******************************************************!*\
  !*** ../assets/js/services/rich-text-parser/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createRichTextParser)
/* harmony export */ });
/* harmony import */ var _rich_text_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich-text-parser */ "../assets/js/services/rich-text-parser/rich-text-parser.js");
/* harmony import */ var _parse_pipe_functions___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-pipe-functions/ */ "../assets/js/services/rich-text-parser/parse-pipe-functions/index.js");
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/ */ "../assets/js/services/rich-text-parser/tokens/index.js");



/**
 * Create a RichTextParser instance, set default tokens, and parse pipe functions.
 *
 * @param {Object} options
 * @param {Object[]} options.tokenClasses - Token classes to tokenize into.
 * @param {Object|false} options.fallbackTokenClass
 * @param {Function[]} options.parsePipeFunctions - Parsing pipe functions to trigger after basic parsing.
 * @return {RichTextParser}
 */

function createRichTextParser() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      tokenClasses = _ref.tokenClasses,
      fallbackTokenClass = _ref.fallbackTokenClass,
      parsePipeFunctions = _ref.parsePipeFunctions;

  var tokenClassesDefaults = [_tokens___WEBPACK_IMPORTED_MODULE_2__.Email, _tokens___WEBPACK_IMPORTED_MODULE_2__.LineBreak, _tokens___WEBPACK_IMPORTED_MODULE_2__.Mention, _tokens___WEBPACK_IMPORTED_MODULE_2__.Url];
  var fallbackTokenClassDefault = _tokens___WEBPACK_IMPORTED_MODULE_2__.Text; // The order here is important!

  var parsePipeFunctionsDefaults = [_parse_pipe_functions___WEBPACK_IMPORTED_MODULE_1__.wrapTokensIntoParagraph, _parse_pipe_functions___WEBPACK_IMPORTED_MODULE_1__.wrapTokensIntoContent];
  return new _rich_text_parser__WEBPACK_IMPORTED_MODULE_0__.default({
    tokenClasses: tokenClasses !== null && tokenClasses !== void 0 ? tokenClasses : tokenClassesDefaults,
    fallbackTokenClass: fallbackTokenClass !== null && fallbackTokenClass !== void 0 ? fallbackTokenClass : fallbackTokenClassDefault,
    parsePipeFunctions: parsePipeFunctions !== null && parsePipeFunctions !== void 0 ? parsePipeFunctions : parsePipeFunctionsDefaults
  });
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/parse-pipe-functions/index.js":
/*!****************************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/parse-pipe-functions/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapTokensIntoParagraph": () => (/* reexport safe */ _wrap_tokens_into_paragraph__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "wrapTokensIntoContent": () => (/* reexport safe */ _wrap_tokens_into_content__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _wrap_tokens_into_paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-tokens-into-paragraph */ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js");
/* harmony import */ var _wrap_tokens_into_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrap-tokens-into-content */ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js");



/***/ }),

/***/ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js":
/*!***********************************************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapTokensIntoContent)
/* harmony export */ });
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/ */ "../assets/js/services/rich-text-parser/tokens/index.js");

/**
 * Wrap tokens tree with one Content token.
 *
 * @param {Object[]} tokens
 *
 * @return {Content}
 */

function wrapTokensIntoContent(tokens) {
  return _tokens___WEBPACK_IMPORTED_MODULE_0__.Content.create(tokens);
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js":
/*!*************************************************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapTokensIntoParagraph)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "../../../node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/ */ "../assets/js/services/rich-text-parser/tokens/index.js");


/**
 * Convert LineBreak tokens into Paragraphs.
 * input: [ Text, Text, Email, LineBreak, Text, Text ]
 * output: [
 * 		Paragraph: [ Text, Text, Email ],
 * 		Paragraph: [ Text, Text ]
 * ]
 *
 * @param {Object[]} tokens
 *
 * @return {Object[]}
 */

function wrapTokensIntoParagraph(tokens) {
  tokens.push(_tokens___WEBPACK_IMPORTED_MODULE_1__.LineBreak.create());
  return tokens.reduce(function (carry, token) {
    var currentToken = token;

    if (token.is(_tokens___WEBPACK_IMPORTED_MODULE_1__.LineBreak)) {
      var lastParagraphIndex = findLastIndex(carry, function (t) {
        return t.is(_tokens___WEBPACK_IMPORTED_MODULE_1__.Paragraph);
      });
      currentToken = _tokens___WEBPACK_IMPORTED_MODULE_1__.Paragraph.create(carry.slice(lastParagraphIndex + 1, carry.length));
      carry = carry.slice(0, lastParagraphIndex + 1);
    }

    carry.push(currentToken);
    return carry;
  }, []);
}
/**
 * Find an index of based on the callback but it runs from last to first item.
 *
 * @param {Array} array
 * @param {Function} callback
 * @return {number}
 */

function findLastIndex(array, callback) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (callback(array[i], i)) {
      return i;
    }
  }

  return -1;
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/rich-text-parser.js":
/*!******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/rich-text-parser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RichTextParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "../../../node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../../../node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "../../../node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "../../../node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "../assets/js/services/rich-text-parser/utils.js");











var RichTextParser = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {Array} options.tokenClasses
   * @param {Object} options.fallbackTokenClass
   * @param {Function[]} options.parsePipeFunctions
   */
  function RichTextParser() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        tokenClasses = _ref.tokenClasses,
        fallbackTokenClass = _ref.fallbackTokenClass,
        parsePipeFunctions = _ref.parsePipeFunctions;

    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, RichTextParser);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "tokenClasses", void 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "fallbackTokenClass", void 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(this, "parsePipeFunctions", void 0);

    this.tokenClasses = tokenClasses;
    this.fallbackTokenClass = fallbackTokenClass;
    this.parsePipeFunctions = parsePipeFunctions;
  }
  /**
   * Takes a string and parse it into a meaningful object, based on the configuration that was provided to this class.
   * input: 'This is text and email: test@elementor.com'
   * output: {
   *     type: 'Content',
   *     value: [
   *         {
   *             type: 'Paragraph',
   *             value: [
   *                 { type: 'Text', value: 'This is text and email: ' },
   *                 { type: 'Email', value: 'test@elementor.com' },
   *             ]
   *         }
   *     ]
   * }
   *
   * @param {string} value
   *
   * @return {Object|Array}
   */


  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(RichTextParser, [{
    key: "parse",
    value: function parse(value) {
      var _this$parsePipeFuncti;

      var lexemes = this.extractLexemes(value),
          tokens = this.tokenize(lexemes);
      return _utils__WEBPACK_IMPORTED_MODULE_9__.pipe.apply(void 0, (0,_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)((_this$parsePipeFuncti = this.parsePipeFunctions) !== null && _this$parsePipeFuncti !== void 0 ? _this$parsePipeFuncti : []))(tokens);
    }
    /**
     * Split the value into lexemes (an array of strings without the meaning)
     *
     * @param {string} value
     *
     * @return {string[]}
     */

  }, {
    key: "extractLexemes",
    value: function extractLexemes(value) {
      return value.trim().split(this.getLexerRegex()).reduce(function (lexemes, currentLexeme) {
        if (currentLexeme) {
          lexemes.push(currentLexeme);
        }

        return lexemes;
      }, []);
    }
    /**
     * Get all the array of lexemes and transform them into tokens (An object that represent what the part of string is).
     *
     * @param {string[]} lexemes
     *
     * @return {Object[]}
     */

  }, {
    key: "tokenize",
    value: function tokenize(lexemes) {
      var _this = this;

      return lexemes.map(function (lexeme) {
        var TokenClass = _this.tokenClasses.find(function (tc) {
          return tc.isToken(lexeme);
        });

        if (!TokenClass) {
          return _this.fallbackTokenClass ? _this.fallbackTokenClass.create(lexeme) : null;
        }

        return TokenClass.create(lexeme);
      }).filter(function (lexeme) {
        return !!lexeme;
      });
    }
    /**
     * Generate a regex from each token class that was provided.
     *
     * @return {RegExp}
     */

  }, {
    key: "getLexerRegex",
    value: function getLexerRegex() {
      var patterns = this.tokenClasses.map(function (tokenClass) {
        var _tokenClass$getPatter;

        return (_tokenClass$getPatter = tokenClass.getPattern()) === null || _tokenClass$getPatter === void 0 ? void 0 : _tokenClass$getPatter.source;
      }).filter(function (pattern) {
        return !!pattern;
      });
      return new RegExp("(".concat(patterns.join('|'), ")"), 'gm');
    }
  }]);

  return RichTextParser;
}();



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/base-token.js":
/*!*******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/base-token.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "../../../node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "../../../node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__);






var BaseToken = /*#__PURE__*/function () {
  /**
   * @param {string | Array | null} value
   */
  function BaseToken(value) {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, BaseToken);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "type", void 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "value", void 0);

    this.value = value;
    this.type = this.constructor.type;
  }
  /**
   * Regex pattern for the lexer.
   *
   * @return {RegExp}
   */


  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(BaseToken, [{
    key: "is",
    value:
    /**
     * Check if the current token is instance of the provided token class
     *
     * @param {Object} tokenClass
     *
     * @return {boolean}
     */
    function is(tokenClass) {
      return this.type === tokenClass.type;
    }
  }], [{
    key: "getPattern",
    value: function getPattern() {
      return null;
    }
    /**
     * Checks if a lexeme belongs to the current token.
     *
     * @param {string} lexeme
     *
     * @return {boolean}
     */

  }, {
    key: "isToken",
    value: function isToken(lexeme) {
      return !!lexeme.match(new RegExp(this.getPattern()));
    }
    /**
     * Creates a new Token instance.
     *
     * @param {string | Array | null } value
     *
     * @return {this}
     */

  }, {
    key: "create",
    value: function create() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new this(value);
    }
  }]);

  return BaseToken;
}();

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(BaseToken, "type", '');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/content.js":
/*!****************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/content.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");






var Content = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(Content, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(Content);

  function Content() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Content);

    return _super.apply(this, arguments);
  }

  return Content;
}(_base_token__WEBPACK_IMPORTED_MODULE_4__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(Content, "type", 'Content');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/email.js":
/*!**************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/email.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Email)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");







var Email = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Email, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Email);

  function Email() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Email);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Email, null, [{
    key: "getPattern",
    value: function getPattern() {
      return /[\w\-.]+@(?:[\w-]+\.)+[\w-]{2,4}/;
    }
  }]);

  return Email;
}(_base_token__WEBPACK_IMPORTED_MODULE_5__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(Email, "type", 'Email');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/handle.js":
/*!***************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/handle.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");






var Handle = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(Handle, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(Handle);

  function Handle() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Handle);

    return _super.apply(this, arguments);
  }

  return Handle;
}(_base_token__WEBPACK_IMPORTED_MODULE_4__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(Handle, "type", 'Handle');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/index.js":
/*!**************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Email": () => (/* reexport safe */ _email__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "LineBreak": () => (/* reexport safe */ _line_break__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Paragraph": () => (/* reexport safe */ _paragraph__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Text": () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Content": () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Mention": () => (/* reexport safe */ _mention__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Handle": () => (/* reexport safe */ _handle__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Username": () => (/* reexport safe */ _username__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "Url": () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_8__.default)
/* harmony export */ });
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email */ "../assets/js/services/rich-text-parser/tokens/email.js");
/* harmony import */ var _line_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-break */ "../assets/js/services/rich-text-parser/tokens/line-break.js");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph */ "../assets/js/services/rich-text-parser/tokens/paragraph.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "../assets/js/services/rich-text-parser/tokens/text.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "../assets/js/services/rich-text-parser/tokens/content.js");
/* harmony import */ var _mention__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mention */ "../assets/js/services/rich-text-parser/tokens/mention.js");
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handle */ "../assets/js/services/rich-text-parser/tokens/handle.js");
/* harmony import */ var _username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./username */ "../assets/js/services/rich-text-parser/tokens/username.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./url */ "../assets/js/services/rich-text-parser/tokens/url.js");










/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/line-break.js":
/*!*******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/line-break.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineBreak)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");







var LineBreak = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(LineBreak, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(LineBreak);

  function LineBreak(value) {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LineBreak);

    return _super.call(this, value || '\n');
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LineBreak, null, [{
    key: "getPattern",
    value: function getPattern() {
      return /(?:\r?\n)/;
    }
  }]);

  return LineBreak;
}(_base_token__WEBPACK_IMPORTED_MODULE_5__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(LineBreak, "type", 'LineBreak');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/mention.js":
/*!****************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/mention.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mention)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../../../node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "../../../node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "../assets/js/services/rich-text-parser/tokens/index.js");











var Mention = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Mention, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__.default)(Mention);

  function Mention(value) {
    var _this;

    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Mention);

    _this = _super.call(this, value);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "handle", void 0);

    (0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "username", void 0);

    _this.handle = _index__WEBPACK_IMPORTED_MODULE_9__.Handle.create(_this.constructor.handleChar);
    _this.username = _index__WEBPACK_IMPORTED_MODULE_9__.Username.create(value.replace(_this.constructor.handleChar, ''));
    return _this;
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Mention, null, [{
    key: "getPattern",
    value: function getPattern() {
      return new RegExp("\\B".concat(this.handleChar, "[\\w\\-]+"));
    }
  }]);

  return Mention;
}(_base_token__WEBPACK_IMPORTED_MODULE_8__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)(Mention, "type", 'Mention');

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)(Mention, "handleChar", '@');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/paragraph.js":
/*!******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/paragraph.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");






var Paragraph = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(Paragraph, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(Paragraph);

  function Paragraph() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Paragraph);

    return _super.apply(this, arguments);
  }

  return Paragraph;
}(_base_token__WEBPACK_IMPORTED_MODULE_4__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(Paragraph, "type", 'Paragraph');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/text.js":
/*!*************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/text.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");






var Text = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(Text, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(Text);

  function Text() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Text);

    return _super.apply(this, arguments);
  }

  return Text;
}(_base_token__WEBPACK_IMPORTED_MODULE_4__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(Text, "type", 'Text');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/url.js":
/*!************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/url.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Url)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");







var Url = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Url, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(Url);

  function Url() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Url);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Url, null, [{
    key: "getPattern",
    value:
    /**
     * @see https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
     *
     * @return {RegExp}
     */
    function getPattern() {
      return /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&\/=]*)/;
    }
  }]);

  return Url;
}(_base_token__WEBPACK_IMPORTED_MODULE_5__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(Url, "type", 'Url');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/username.js":
/*!*****************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/username.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Username)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");






var Username = /*#__PURE__*/function (_BaseToken) {
  (0,_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(Username, _BaseToken);

  var _super = (0,_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(Username);

  function Username() {
    (0,_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Username);

    return _super.apply(this, arguments);
  }

  return Username;
}(_base_token__WEBPACK_IMPORTED_MODULE_4__.default);

(0,_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(Username, "type", 'Username');



/***/ }),

/***/ "../assets/js/services/rich-text-parser/utils.js":
/*!*******************************************************!*\
  !*** ../assets/js/services/rich-text-parser/utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
/**
 * A util function to transform data through transform functions
 *
 * @param {Function[]} functions
 * @return {Function}
 */
function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return functions.reduce(function (currentValue, currentFunction) {
      return currentFunction.apply(void 0, [currentValue].concat(args));
    }, value);
  };
}

/***/ })

}]);
//# sourceMappingURL=notes-app.js.map