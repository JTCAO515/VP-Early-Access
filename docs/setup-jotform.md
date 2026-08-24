# JotForm 报名表配置

## 前置条件

- 一个 JotForm 账号；不要把 API Key 发到聊天或提交到仓库。
- 已创建六个字段：Email、Timing、Source、Feature、Lang、Submitted At。

## 建表单

1. 新建表单，标题为 `VisePanda Early Access`。
2. Email 设为必填邮箱；其余字段可隐藏或由服务端写入。
3. Timing、Source、Feature 的选项值必须与 `lib/copy.ts` 的 `QUESTIONS` 一致。

## 获取配置

1. 在 JotForm Account Settings 创建 API Key。
2. 从表单 URL 复制表单 ID。
3. 调用 `GET https://api.jotform.com/form/<FORM_ID>/questions`，记录六个数字 questionId。
4. 在 Vercel 环境变量填写 `.env.example` 中的 `JOTFORM_*` 项；API Key 只放环境变量。

## 验证

设置 `WAITLIST_PROVIDER=jotform` 后提交一个测试邮箱。JotForm 的 Submissions 页面应出现一行数据。

## 回滚

把 `WAITLIST_PROVIDER` 改回 `console` 并重新部署；页面仍可报名，但只写服务端日志。

## 常见错误

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| 502 | API Key、表单 ID 或题目 ID 缺失 | 检查 Vercel 环境变量名称与值 |
| 表单字段为空 | questionId 配错 | 重新查询 `/questions` 并更新对应变量 |
| 401 / 403 | API Key 无效或已撤销 | 在 JotForm 创建新 Key 后更新环境变量 |
