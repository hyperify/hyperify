## 设计原则
- 基本单位使用 `rem` （极小尺寸的可以使用 `px` ，例如细边框等）
- 灵活使用 `%` ， `vh` ， `vw` ， `em` 等单位
- 组件的颜色需使用 `$colors-level` 内定义的颜色
- 组件的CSS类名必须带有 `hyper` 前缀
- 组件最好可以提供三种版本，分别是原始版（hyper-组件名），直角版（hyper-组件名-sharp），大圆角版（hyper-组件名-round）。参考Button组件
- 原始版的组件圆角多大合适？达到大圆角，又不完全圆的那种效果（参考Button组件）
- 擅用 `currentColor` CSS3关键字
- 去除边框，使用 `border: 0` 而不是 `border: none`（尽量少写点字）

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