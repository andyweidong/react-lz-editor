"use strict";

module.exports = {
  lang: {
    'en': {
      cancelText: "Cancel",
      OKText: "OK",

      fullScreen: "Full",
      quitFullScreen: "Quit",
      sourceCode: "Source",
      preview: "prev",
      selectedText: "Please make sure you have selected text before add a new link!",
      selectedLink: "Please make sure you have selected a link before remove it!",
      successToDraftBox: "Context have been saved to Draft-Box",
      successPasteCleanText: "Pasted no-style text success, it would not be display if the image url is 'Anti-Leech'.",
      errorUploadingFile: "!!!!!!!!!!!!ERROR UPLOADING!!!!!!!!!!!!",
      directToURL: "Please input a valid url",
      directToURLTip: "Please enter the regular URL(with \"http://\" or \"https://\" preffix.)",
      markdownTip: "Please markdown here",
      wrongImageAddress: 'Wrong image address!',

      undo: "undo (Ctrl-Z/Cmd-Z)",
      redo: "redo (Ctrl-Y/Cmd-Shift-Z)",

      confirmToRemove: "Are you sure to remove the style of the selected text?",
      doRemove: "Yes",
      doNotRemove: "No",

      pasteText: "Paste plain text ",
      insertNoStyleText: "Please insert plain text content here",
      pasteTipMsg: "Please paste the contents here and click OK button",

      H1: "Head level 1",
      H2: "Head level 2",
      H3: "Head level 3",
      H4: "Head level 4",
      refs: "Quotes",
      ul: "Unordered list",
      ol: "Ordered list",
      pre: "Predefined",
      alignLeft: "Left",
      alignCenter: "Center",
      alignRight: "Right",
      alignJustify: "Justify",
      textBold: "Bold",
      textItalic: "Italic",
      textUnderline: "Underline",
      textCode: "Code",

      insertImageModalTitle: "Insert image",
      previewImageModalTitle: "Preview images",
      inPreviewProgress: "In processing and generate preview, 1 minute please...",
      imageMasker: "Insert watermark images",
      originalImage: "Insert original images",
      validatedImage: "validated",
      refreshImage: "refresh",

      insertVideoTip: "Upload video",
      insertVideoModalTitle: "Insert videos",

      insertAudioTip: "Upload audio",
      insertAudioModalTitle: "Insert audios",

      addLink: "add link",
      removeLink: "remove link",

      previewMsg: 'content',
      deleteDraftItem: "remove draft item",
      draftTipMsg: "Draft Box--you can use Ctrl+S or Cmd+S save content to draft box, click to open.",
      draftModalTitle: "Draft item list",
      confirmUseDraft: "Current editor context will be replaced by your selected draft item, continue?",
      draftCautionMsg: "Content auto save to draft box every minute, you could save it manually by Ctrl+S or Cmd+S, it would not saving while content length less than 20 characters.",

      autoSave: "Automatically save to draft",

      inPfopProgress: "Please wait while the picture is being processed",
      pfopError: "An error occurred while pfoping image! Please refer to:",
      btnAddBatch: "Batch add",
      batchAddModalTitle: "Bulk upload pictures",
      chkAutoWaterMask: "Automatic watermarking",

      uploadingTipMsg: "Please upload as requested.",
      limitCountTip: "Just keep $limit$ files, the others has been droped.",
      btnUpload: "Click to upload",
      manuallyUploadTip: "You can manually input an image, 'Enter' to confirm.",
      limitAndTypeTip: "You can uploading $limit$ files.($type$)",

      auto: "[AUTO]",
      height: "height",
      width: "width",
      zoomTipMsg: "Zoomout or zoomin to $targetSize$ according image $accordingSize$ ",
      pleaseUploading: "please uploading",
      watermarkPos: {
        north: "north",
        northWest: "north west",
        northCenter: "north center",
        northEast: "north east",
        center: "center",
        west: "west",
        centerCenter: "absolute center",
        east: "east",
        south: "south",
        southWest: "south west",
        southCenter: "south center",
        southEast: "south east"
      }
    },
    'zh-CN': {
      cancelText: "取消",
      OKText: "确定",

      fullScreen: "全屏",
      quitFullScreen: "退出全屏",
      sourceCode: "源码",
      preview: "预览",
      selectedText: "创建链接前请先选中链接文字！",
      selectedLink: "移除链接前请先选中链接！",
      successToDraftBox: "编辑器内容已更新到保险库中",
      successPasteCleanText: "已经清空样式并成功粘贴，可能部分图片因原网站防盗链功能暂未显示。",
      errorUploadingFile: "！！！！！！！！！！上传文件错误！！！！！！！！！！",
      directToURL: "请输出你要跳转的链接",
      directToURLTip: "请输入符合规范的网址链接（以“http://” 或 “https://”为前导）",
      markdownTip: "请在这里编辑您的markdown内容",
      wrongImageAddress: '图片地址错误！',

      undo: "撤销（Ctrl-Z，Cmd-Z）",
      redo: "重做（Ctrl-Y，Cmd-Shift-Z）",

      confirmToRemove: "确认移除所选择文字的样式？",
      doRemove: "确认移除",
      doNotRemove: "取消操作",

      pasteText: "纯文本粘贴",
      insertNoStyleText: "请插入无样式文本内容",
      pasteTipMsg: "请在这里粘贴内容后点击确定按钮",

      H1: "标题1",
      H2: "标题2",
      H3: "标题3",
      H4: "标题4",
      refs: "引用",
      ul: "无序列表",
      ol: "有序列表",
      pre: "区段",
      alignLeft: "左对齐",
      alignCenter: "居中",
      alignRight: "右对齐",
      alignJustify: "两端对齐",
      textBold: "加粗",
      textItalic: "斜体",
      textUnderline: "下划线",
      textCode: "等宽字体",

      insertImageModalTitle: "插入图片",
      previewImageModalTitle: "图片预览",
      inPreviewProgress: "图片正在处理并生成预览，请稍等片刻...",
      imageMasker: "插入水印图片",
      originalImage: "插入原始图片",
      validatedImage: "确认无误",
      refreshImage: "手动刷新",

      insertVideoTip: "上传视频",
      insertVideoModalTitle: "插入视频",

      insertAudioTip: "上传音频",
      insertAudioModalTitle: "插入音频",

      addLink: "增加链接",
      removeLink: "移除链接",

      previewMsg: '内容预览',
      deleteDraftItem: "删除",
      draftTipMsg: "保险库——编辑器中按Ctrl+S或Cmd+S存入保险库，点击打开保险库以继续",
      draftModalTitle: "编辑器保险库条目列表：",
      confirmUseDraft: "确定后编辑器内容将会被最后一次保存的内容替换，若有更改，替换后将不可恢复，是否继续？",
      draftCautionMsg: "编辑器内容默认一分钟保存一次，可以手动Ctrl+S或Cmd+S保存，内容小于20字时将不会保存在保险库中；列表中不用数据请及时删除维护，否则会影响保险库保存容量！",

      autoSave: "自动保存库",

      inPfopProgress: "图片正在处理请稍等片刻",
      pfopError: "持久保存图片过程中发生错误！请参考：",
      btnAddBatch: "批量添加",
      batchAddModalTitle: "批量上传图片",
      chkAutoWaterMask: "自动加水印",

      invalidUrl: "验证您填写的URL地址无效，请检查！",
      supportMimeMsg: "只能上传指定文件，请重新选择！参考",
      invalidType: "不合法的上传资源类型！",
      invalidFileType: "必须填写fileType（字符串型）：image或video或audio！",

      uploadingTipMsg: "请根据要求上传。",
      limitCountTip: "只能保留最后上传的 $limit$ 个文件，其他超出的已经被顶掉。",
      btnUpload: "点击上传",
      manuallyUploadTip: "您还可以手动输入文件资源地址，输入完毕按回车键确认",
      limitAndTypeTip: "您可以上传 $limit$ 个类型为 $type$ 的文件。",

      auto: "[自动]",
      height: "高度",
      width: "宽度",
      zoomTipMsg: "按照图片$accordingSize$自动缩放到$targetSize$",
      pleaseUploading: "请上传图片",
      watermarkPos: {
        north: "上",
        northWest: "左上",
        northCenter: "中上",
        northEast: "右上",
        center: "中",
        west: "左中",
        centerCenter: "中心",
        east: "右中",
        south: "下",
        southWest: "左下",
        southCenter: "中下",
        southEast: "右下"
      }
    },
    zh: {
      cancelText: "取消",
      OKText: "確定",
      fullScreen: "全屏",
      quitFullScreen: "退出全屏",
      sourceCode: "源碼",
      preview: "預覽",
      selectedText: "創建連結前請先選中連結文字！",
      selectedLink: "移除連結前請先選中連結！",
      successToDraftBox: "編輯器內容已更新到保險庫中",
      successPasteCleanText: "已經清空樣式並成功粘貼，可能部分圖片因原網站防盜鏈功能暫未顯示。",
      errorUploadingFile: "！！！！！！！！！！上傳文件錯誤！！！！！！！！！！",
      directToURL: "請輸出你要跳轉的連結",
      directToURLTip: "請輸入符合規範的網址連結（以“http://”或“https://”為前導）",
      markdownTip: "請在這裡編輯您的markdown內容",
      wrongImageAddress: '圖片地址錯誤！',
      undo: "撤銷（Ctrl-Z，Cmd-Z）",
      redo: "重做（Ctrl-Y，Cmd-Shift-Z）",
      confirmToRemove: "確認移除所選擇文字的樣式？",
      doRemove: "確認移除",
      doNotRemove: "取消操作",
      pasteText: "純文字粘貼",
      insertNoStyleText: "請插入無樣式文字內容",
      pasteTipMsg: "請在這裡粘貼內容後點擊確定按鈕",
      H1: "標題1",
      H2: "標題2",
      H3: "標題3",
      H4: "標題4",
      refs: "引用",
      ul: "無序清單",
      ol: "有序列錶",
      pre: "區段",
      alignLeft: "左對齊",
      alignCenter: "居中",
      alignRight: "右對齊",
      alignJustify: "兩端對齊",
      textBold: "加粗",
      textItalic: "斜體",
      textUnderline: "底線",
      textCode: "等寬字體",
      insertImageModalTitle: "插入圖片",
      previewImageModalTitle: "圖片預覽",
      inPreviewProgress: "圖片正在處理並生成預覽，請稍等片刻…",
      imageMasker: "插入浮水印圖片",
      originalImage: "插入原始圖片",
      validatedImage: "確認無誤",
      refreshImage: "手動重繪",
      insertVideoTip: "上傳視頻",
      insertVideoModalTitle: "插入視頻",
      insertAudioTip: "上傳音訊",
      insertAudioModalTitle: "插入音訊",
      addLink: "新增連結",
      removeLink: "移除連結",
      previewMsg: '內容預覽',
      deleteDraftItem: "删除",
      draftTipMsg: "保險庫——編輯器中按Ctrl+S或Cmd+S存入保險庫，點擊打開保險庫以繼續",
      draftModalTitle: "編輯器保險庫條目清單：",
      confirmUseDraft: "確定後編輯器內容將會被最後一次保存的內容替換，若有更改，替換後將不可恢復，是否繼續？",
      draftCautionMsg: "編輯器內容默認一分鐘保存一次，可以手動Ctrl+S或Cmd+S保存，內容小於20字時將不會保存在保險庫中；清單中不用數據請及時删除維護，否則會影響保險庫保存容量！",
      autoSave: "自動保存庫",
      inPfopProgress: "圖片正在處理請稍等片刻",
      pfopError: "持久保存圖片過程中發生錯誤！請參攷：",
      btnAddBatch: "批量添加",
      batchAddModalTitle: "批量上傳圖片",
      chkAutoWaterMask: "自動加浮水印",
      invalidUrl: "驗證您填寫的URL地址無效，請檢查！",
      supportMimeMsg: "只能上傳指定檔案，請重新選擇！參攷",
      invalidType: "不合法的上傳資源類型！",
      invalidFileType: "必須填寫fileType（字串型）：image或video或audio！",
      uploadingTipMsg: "請根據要求上傳。",
      limitCountTip: "只能保留最後上傳的$limit$個檔案，其他超出的已經被頂掉。",
      btnUpload: "點擊上傳",
      manuallyUploadTip: "您還可以手動輸入檔案資源地址，輸入完畢按回車鍵確認",
      limitAndTypeTip: "您可以上傳$limit$個類型為$type$的檔案。",
      auto: "[自動]",
      height: "高度",
      width: "寬度",
      zoomTipMsg: "按照圖片$accordingSize$自動縮放到$targetSize$",
      pleaseUploading: "請上傳圖片",
      watermarkPos: {
        north: "上",
        northWest: "左上",
        northCenter: "中上",
        northEast: "右上",
        center: "中",
        west: "左中",
        centerCenter: "中心",
        east: "右中",
        south: "下",
        southWest: "左下",
        southCenter: "中下",
        southEast: "右下"
      }
    },
    ru: {
      cancelText: "Отмена",
      OKText: "OK",

      fullScreen: "Перейти в полноэкранный режим",
      quitFullScreen: "Выйти из полноэкранного режима",
      sourceCode: "Исходный код",
      preview: "Предварительный просмотр",
      selectedText: "Для добавления новой ссылки необходимо выделить текст!",
      selectedLink: "Необходимо выбрать ссылку для удаления!",
      successToDraftBox: "Содержимое сохранено в Draft-Box",
      successPasteCleanText: "Вставка теста без стиля выполнена, он не будет отображаться если URL картинки является 'Anti-Leech'.",
      errorUploadingFile: "!!!!!!!!!!!!ОШИБКА ЗАГРУЗКИ!!!!!!!!!!!!",
      directToURL: "Пожалуйста введите URL",
      directToURLTip: "Пожалуйста введите URL(с префиксом \"http://\" или \"https://\".)",
      markdownTip: "Введите Markdown текст",
      wrongImageAddress: 'Неверный адрес картинки!',

      undo: "Отменить (Ctrl-Z/Cmd-Z)",
      redo: "Повторить (Ctrl-Y/Cmd-Shift-Z)",

      confirmToRemove: "Вы действительно хотите удалить стили у выделенного текста?",
      doRemove: "Да",
      doNotRemove: "Нет",

      pasteText: "Вставка неформатированного текста ",
      insertNoStyleText: "Вставьте неформатированный текст",
      pasteTipMsg: "Вставьте содержимое и нажмите OK",

      H1: "Заголовок 1 уровня",
      H2: "Заголовок 2 уровня",
      H3: "Заголовок 3 уровня",
      H4: "Заголовок 4 уровня",
      refs: "Кавычки",
      ul: "Несортированный список",
      ol: "Сортированный список",
      pre: "Предварительно форматированный текст",
      alignLeft: "По левому краю",
      alignCenter: "По центру",
      alignRight: "По правому краю",
      alignJustify: "Выравнивание",
      textBold: "Жирный",
      textItalic: "Курсив",
      textUnderline: "Подчеркнутый",
      textCode: "Код",

      insertImageModalTitle: "Вставка изображение",
      previewImageModalTitle: "Предварительный просмотр изображения",
      inPreviewProgress: "Генерация превью, пожалуйста подождите...",
      imageMasker: "Вставить изображение (уменьшенный размер)",
      originalImage: "Вставить изображение (оригинальный размер)",
      validatedImage: "Проверено",
      refreshImage: "Обновить",

      insertVideoTip: "Загрузить видео",
      insertVideoModalTitle: "Добавление видео",

      insertAudioTip: "Загрузить аудио",
      insertAudioModalTitle: "Добавление аудио",

      addLink: "Добавить ссылку",
      removeLink: "Удалить ссылку",

      previewMsg: 'Содержимое',
      deleteDraftItem: "Удалить черновик",
      draftTipMsg: "Draft-Box - вы можете нажать Ctrl+S или Cmd+S для сохранения содержимого в хранилище черновиков.",
      draftModalTitle: "Список черновиков",
      confirmUseDraft: "Текущее содержимое редактора будет заменено содержимым выбранного черновика, продолжить?",
      draftCautionMsg: "Содержимое автоматически сохраняется в Draft-Box каждую минуту, вы можете выполнить сохранение вручную нажатием Ctrl+S or Cmd+S. Если длина содержимого менее 20 символов, автосохранение выполняться не будет.",

      autoSave: "Автоматическое сохранение черновика",

      inPfopProgress: "Пожалуйста подождите пока изображение будет обработано",
      pfopError: "Произошла ошибка при обработке изображения! Подробности:",
      btnAddBatch: "Пакетная вставка",
      batchAddModalTitle: "Пакетная загрузка изображений",
      chkAutoWaterMask: "Автоматическое изменение размера",

      uploadingTipMsg: "Загрузка...",
      limitCountTip: "Максимальное число файлов: $limit$.",
      btnUpload: "Нажмите для загрузки",
      manuallyUploadTip: "Вы можете вручную выбрать изображение, нажмите 'Enter' для подтверждения.",
      limitAndTypeTip: "Максимальное число загружаемых файлов: $limit$.($type$)",

      auto: "[AUTO]",
      height: "Высота",
      width: "Ширина",
      zoomTipMsg: "Уменьшение или увеличение до $targetSize$ в соответствии с $accordingSize$ ",
      pleaseUploading: "Загрузка",
      watermarkPos: {
        north: "Север",
        northWest: "Север запад",
        northCenter: "Север центр",
        northEast: "Север восток",
        center: "Центр",
        west: "Запад",
        centerCenter: "Абсолютный центр",
        east: "Восток",
        south: "Юг",
        southWest: "Юг запад",
        southCenter: "Юг центр",
        southEast: "Юг восток"
      }
    },
    ja: {
      cancelText: "キャンセル",
      OKText: "OK",

      fullScreen: "最大化",
      quitFullScreen: "最小化",
      sourceCode: "ソースコード",
      preview: "プレビュー",
      selectedText: "新しいリンクを追加する前にテキストを選択してください",
      selectedLink: "リンクを削除する前にリンクを選択してください",
      successToDraftBox: "入力内容が一時保存されました",
      successPasteCleanText: "スタイルのないテキストの貼り付けに成功しました, 画像のURLが不正な場合は表示されません",
      errorUploadingFile: "!!!!!!!!!!!!エラーアップロード!!!!!!!!!!!!",
      directToURL: "URLを入力してください",
      directToURLTip: "一般的な URL形式(\"http://\" or \"https://\")",
      markdownTip: "ここにマークダウンを入力してください",
      wrongImageAddress: 'イメージURLが間違っています',

      undo: "元に戻す (Ctrl-Z/Cmd-Z)",
      redo: "やり直す (Ctrl-Y/Cmd-Shift-Z)",

      confirmToRemove: "選択したテキストからスタイルを削除します, よろしいですか？",
      doRemove: "はい",
      doNotRemove: "いいえ",

      pasteText: "プレーンテキストの貼り付け",
      insertNoStyleText: "プレーンテキストをここに入力してください",
      pasteTipMsg: "プレーンテキストを貼り付けてOKを押してください",

      H1: "見出し1",
      H2: "見出し2",
      H3: "見出し3",
      H4: "見出し4",
      refs: "引用",
      ul: "箇条書き",
      ol: "数順 箇条書き",
      pre: "装飾",
      alignLeft: "左寄せ",
      alignCenter: "中央寄せ",
      alignRight: "右寄せ",
      alignJustify: "両端揃え",
      textBold: "太字",
      textItalic: "イタリック",
      textUnderline: "下線",
      textCode: "テキストコード",

      insertImageModalTitle: "画像挿入",
      previewImageModalTitle: "画像プレビュー",
      inPreviewProgress: "プレビューを作成しています　しばらくお待ちください",
      imageMasker: "透かし画像の挿入",
      originalImage: "元の画像を挿入",
      validatedImage: "検証済",
      refreshImage: "手動で更新する",

      insertVideoTip: "動画アップロード",
      insertVideoModalTitle: "動画挿入",

      insertAudioTip: "音楽アップロード",
      insertAudioModalTitle: "音楽挿入",

      addLink: "リンク追加",
      removeLink: "リンク削除",

      previewMsg: "入力内容",
      deleteDraftItem: "一時保存の削除",
      draftTipMsg: "一時保存 -- Ctrl+S Cmd+S で内容を一時保存,クリックして開く",
      draftModalTitle: "一時保存アイテムリスト",
      confirmUseDraft: "現在の入力内容が一時保存データで上書きされます よろしいですか?",
      draftCautionMsg: "入力内容は毎分自動で一時保存されます, Ctrl+S or Cmd+S で手動保存できます, コンテンツの長さが20文字未満の間は保存されません。",

      autoSave: "入力内容を自動で一時保存しました",

      inPfopProgress: "画像の処理中です, しばらくお待ちください",
      pfopError: "画像の作成中にエラーが発生しました! 参照:",
      btnAddBatch: "一括追加",
      batchAddModalTitle: "画像の一括アップロード",
      chkAutoWaterMask: "自動透かし",

      uploadingTipMsg: "リクエストに応じてアップロードしてください",
      limitCountTip: "最大ファイル数： $limit$",
      btnUpload: "アップロード",
      manuallyUploadTip: "画像を手動で選択して[Enter]を押して確定します.",
      limitAndTypeTip: "アップロードされるファイルの最大数： $limit$ ($Type$)",

      auto: "[AUTO]",
      height: "高さ",
      width: "幅",
      zoomTipMsg: "$accordingSize$ に応じて $targetSize$ に自動で拡大縮小します",
      pleaseUploading: "アップロードしてください",
      watermarkPos: {
        north: "上",
        northWest: "左上",
        northCenter: "中上",
        northEast: "右上",
        center: "中",
        west: "左中",
        centerCenter: "中央",
        east: "右中",
        south: "下",
        southWest: "左下",
        southCenter: "中下",
        southEast: "右下"
      }
    }
  }
};