# 双语切换功能说明 / Bilingual Language Switching Guide

## 功能概述 / Overview

这个个人网站现在支持中英文双语切换功能。用户可以通过右上角的语言切换按钮在中文和英文之间自由切换。

This personal website now supports bilingual language switching between Chinese and English. Users can freely switch between Chinese and English using the language switcher button in the top right corner.

## 功能特点 / Features

### 1. 语言切换按钮 / Language Switcher
- 位置：导航栏右上角
- 样式：两个按钮，显示"EN"和"中文"
- 当前语言会高亮显示
- 支持移动端响应式设计

- Location: Top right corner of the navigation bar
- Style: Two buttons showing "EN" and "中文"
- Current language is highlighted
- Responsive design for mobile devices

### 2. 自动保存偏好 / Auto-save Preferences
- 用户的语言选择会自动保存到本地存储
- 下次访问网站时会自动应用上次选择的语言
- 无需重复设置

- User's language choice is automatically saved to local storage
- The selected language is automatically applied on next visit
- No need to set repeatedly

### 3. 完整翻译覆盖 / Complete Translation Coverage
- 导航菜单
- 首页内容
- 关于我部分
- 工作经历部分（包括所有卡片内容和详情页面的完整内容）
- 教育背景部分（包括所有卡片内容和详情页面的完整内容）
- 技能技术部分
- 联系方式部分
- 页脚版权信息
- 通用按钮和链接文本
- 详情页面的返回按钮
- 详情页面的所有动态内容（职责、成就、活动等）

- Navigation menu
- Homepage content
- About section
- Experience section (including all card content and complete detail page content)
- Education section (including all card content and complete detail page content)
- Skills section
- Contact section
- Footer copyright
- Common buttons and link text
- Detail page back buttons
- All dynamic content in detail pages (responsibilities, achievements, activities, etc.)

## 技术实现 / Technical Implementation

### 文件结构 / File Structure
```
js/
├── i18n.js              # 国际化核心功能
├── detail-translations.js  # 详情页面翻译数据
└── script.js            # 原有JavaScript功能

css/
└── styles.css           # 包含语言切换器样式

index.html               # 主页面，包含data-i18n属性
pages/
├── experience-details.html  # 工作经历详情页面
└── education-details.html   # 教育背景详情页面
```

### 核心功能 / Core Functions

#### 1. 翻译数据 / Translation Data
```javascript
const translations = {
    en: { /* English translations */ },
    zh: { /* Chinese translations */ }
};
```

#### 2. 语言切换 / Language Switching
```javascript
function switchLanguage(lang) {
    // 切换语言逻辑
    // Language switching logic
}
```

#### 3. 自动应用翻译 / Auto-apply Translations
```javascript
function applyTranslations() {
    // 查找所有带有data-i18n属性的元素
    // Find all elements with data-i18n attribute
    // 应用对应语言的翻译
    // Apply corresponding language translation
}
```

## 使用方法 / Usage

### 对于用户 / For Users
1. 点击右上角的语言切换按钮
2. 选择"EN"切换到英文，选择"中文"切换到中文
3. 页面内容会立即更新
4. 语言偏好会自动保存

1. Click the language switcher button in the top right corner
2. Select "EN" to switch to English, select "中文" to switch to Chinese
3. Page content updates immediately
4. Language preference is automatically saved

### 对于开发者 / For Developers

#### 添加新的翻译文本 / Adding New Translated Text
1. 在HTML元素上添加`data-i18n`属性：
```html
<h1 data-i18n="section.title">Original Text</h1>
```

2. 在`js/i18n.js`中添加翻译：
```javascript
const translations = {
    en: {
        section: {
            title: "English Title"
        }
    },
    zh: {
        section: {
            title: "中文标题"
        }
    }
};
```

#### 添加新的语言 / Adding New Languages
1. 在`translations`对象中添加新语言：
```javascript
const translations = {
    en: { /* English */ },
    zh: { /* Chinese */ },
    ja: { /* Japanese */ }  // 新语言
};
```

2. 在HTML中添加对应的语言切换按钮：
```html
<button class="lang-btn" data-lang="ja">日本語</button>
```

## 浏览器兼容性 / Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 移动端浏览器 / Mobile browsers

## 注意事项 / Notes

1. 语言切换功能使用本地存储保存用户偏好
2. 首次访问默认显示中文
3. 所有翻译文本都经过人工审核，确保准确性
4. 支持动态内容更新，包括JavaScript生成的内容

1. Language switching uses local storage to save user preferences
2. First visit defaults to Chinese
3. All translated text is manually reviewed for accuracy
4. Supports dynamic content updates, including JavaScript-generated content

## 测试 / Testing

可以使用`test.html`页面来测试语言切换功能：
You can use the `test.html` page to test the language switching functionality:

```bash
# 启动本地服务器
# Start local server
python3 -m http.server 8000

# 访问测试页面
# Visit test page
http://localhost:8000/test.html
``` 