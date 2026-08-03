# レザンジュ コーポレートサイト刷新 — 引き継ぎ書

このファイルをリポジトリ(lesanges-inc.github.io のローカルクローン)に置き、Claude Codeに「HANDOFF.mdを読んで続きを進めて」と指示してください。

## プロジェクト状態

- 公開中: https://lesanges-inc.github.io/ (旧デザイン6ページ+画像)
- 公開中: https://lesanges-inc.github.io/marugoto-ai/ (事業LP。別リポジトリ marugoto-ai。今回は触らない)
- 制作中: ガラスデザイン版 v2。トーン確認用の自己完結プレビュー2ページが完成・承認済み
  - preview-index.html(トップ)/ preview-company.html(企業情報)
  - この2ファイルが v2 のデザイン・文体の正 (canonical)。CSSは各ファイルの<style>内にある

## ゴール

preview 2ページと同じデザイン言語で全10ページを作り、リポジトリを総入れ替えする。
共通CSSは style.css に分離し、画像はb64埋め込みをやめて画像ファイル参照に戻すこと。

## ページ構成(10ページ)

1. index.html — トップ(preview-index.htmlを分離・整理して移植)
2. company.html — 企業情報(preview-company.htmlを移植)
3. service.html — 事業内容: まるごとAI総論+3システム詳細(カレンダー/営業管理/AI秘書。実スクショ+月額5/15/5万円)+「新事業は準備中」
4. first.html — はじめての方へ: ご利用の流れ5ステップ(無料診断30分→業務設計→無料2ヶ月=テスト調整で一緒に作り込み→本稼働3ヶ月目から課金→月4回まで無料修正で磨き続ける)+料金の考え方
5. faq.html — よくあるご質問15問(marugoto-ai LPのFAQ8問を核に、会社・契約・セキュリティ系を追加)
6. news.html — お知らせ(既存4件を移植)
7. column.html — コラム(枠のみ。「準備中です」1枚でOK。後日自動投稿システムを接続予定)
8. contact.html — お問い合わせ(メール+Jicoo予約ボタン https://www.jicoo.com/t/marugoto-ai/e/8ZjM3Cud +電話キャラ画像 img_contact.png)
9. privacy.html — プライバシーポリシー(旧版の内容を移植、制定日2026年8月8日)
10. sitemap.html — サイトマップ

全ページ共通: ガラスナビ(浮遊バー)、メガフッター(全ページへのリンク)、金の羽根が舞うJS、faviconリンク。

## デザイン規約(previewの<style>が正)

- 配色: 墨紺 #16304d / 金 #b98f3e / 背景=青白グラデ(黄味禁止)+淡い光の玉(body::before)
- ガラス: .glass = blur(26px)、透明42%、白縁 rgba(255,255,255,.9)、斜めの光の筋(.glass::before)
- 書体: Shippori Mincho(見出し)/ Noto Sans JP(本文)/ Cormorant Garamond(欧文ラベル)
- モーション: 金の羽根10枚が舞い落ちる(JS、prefers-reduced-motion対応)+ .reveal のスクロール出現
- 表記: ローマ字は「Lesanges」に統一(Les Anges は使わない)。コピーライトは © Lesanges Inc.

## 文体・コピー規約

- 理念:「美しい仕組みは、人を自由にする。」
- キーフレーズ:「つくるものが変わっても、基準はひとつ——美しいか、どうか。」
- バリュー8つ(変更禁止): Beauty 美しく / Craft 誂える / Beside 隣にいる / Honest 正直に / Refine 磨き続ける / Light 軽くする / Swift 速く / Soul 魂を込める
- 本文で「料理」「服」などの具体名詞は使わない(抽象で語る)。具体名は沿革のみOK(マウム・RHONA)
- YOSHIKI的美学=気品×激情×完璧主義を姿勢として保つ。言い切りの短文を効かせる

## 会社情報(確定値)

- 株式会社レザンジュ / 代表取締役 安田 尚未 / まるごとAI事業責任者 安田 海斗
- 設立 2015年10月5日 / 〒465-0002 愛知県名古屋市名東区引山1-508 01/HY 1号 / yasuda@lesanges.biz
- 沿革: 2015.10 設立・韓国料理店「マウム」開業 → 2017 韓国料理教室へ業態変更 → 2020 アパレル「RHONA」立ち上げ → 2026.7 まるごとAI提供開始 → 2026.8 サイト公開
- 価格: 初期0円 / 2ヶ月無料 / カレンダー5万・AI秘書5万・営業管理15万(月額税別)/ 月単位契約・違約金なし / 修正はチャット月4回無料

## 画像資産(リポジトリ内)

- favicon.png / img_greeting.png(お辞儀=ごあいさつ用)/ img_contact.png(電話=お問い合わせ用)/ img_philosophy.jpg(金の羽根=ヒーロー背景)
- 実スクショはpreviewファイル内にb64で埋まっている(カレンダー/営業管理/朝レポート)→ 抽出して img_svc_*.jpg として保存し参照に切り替え

## 残タスク(サイト以外・忘れないこと)

- SUBLINE 050番号取得 → 取得後、会社概要・お問い合わせ・特商法(marugoto-ai側)・FAX原稿に反映
- FAX原稿A4の制作(050番号待ち。指差しキャラ img_pointing 使用予定)
- 国税庁法人番号Web-API(申請済み・ID待ち)→ 診断ツールに住所自動入力
- ハローワーク営業: 手動20通の続き(S級はメールなし→電話)、フォーム送信済2社(ティーエスケー・近藤インスツルメンツ)の返信監視
