## 设计原则
- 基本单位使用 `rem` （极小尺寸的可以使用 `px` ，例如细边框等）
- 组件的颜色需使用 `$colors-level` 内定义的颜色
- 组件的CSS类名必须带有 `hyper` 前缀

## 颜色介绍
示例：

```css
--hyper-color-X: #13c2c2;
--hyper-color-X-rgb: 19, 194, 194;
--hyper-color-X-shade: #11abab;
--hyper-color-X-tint: #2dc9c9;
--hyper-color-X-contrast: #fff;
--hyper-color-X-contrast-rgb: 255, 255, 255;
```
- `color-X`: 原始色
- `color-X-rgb`: 原始色的RGB
- `color-X-shade`: 原始色的暗淡色
- `color-X-tint`: 原始色的高亮色
- `color-X-contrast`: 原始颜色的对比色
- `color-X-contrast-rgb`: 原始色的对比色的RGB

### 应用场景：
例如设计一个按钮：
1. 按钮背景色使用原始色 `color-X`
2. 按钮文字颜色使用对比色 `color-X-contrast`
3. 按钮在hover状态下切换背景色为原始色的高亮色 `color-X-contrast-tint`
3. 按钮在focus状态下切换背景色为原始色的暗淡色 `color-X-contrast-shade`