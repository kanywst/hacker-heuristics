<img src="./website/public/header.jpg" alt="Hammurabi — Laws Every Engineer Should Know" width="100%" />

各法則に「対抗力」「現場の指針」「一次資料の出典」を添えた、エンジニアリングの法典。

[![stars](https://img.shields.io/github/stars/kanywst/hammurabi?style=for-the-badge&color=c2884a&labelColor=0c0b08)](https://github.com/kanywst/hammurabi/stargazers)
[![forks](https://img.shields.io/github/forks/kanywst/hammurabi?style=for-the-badge&color=e0aa6b&labelColor=0c0b08)](https://github.com/kanywst/hammurabi/network/members)
[![license](https://img.shields.io/github/license/kanywst/hammurabi?style=for-the-badge&color=a39884&labelColor=0c0b08)](https://github.com/kanywst/hammurabi/blob/main/LICENSE)

[English](./README.md) • **日本語**

---

## Hammurabi とは？

複雑性が増し続ける現代において、エンジニアリングの最大のボトルネックは「コード」ではなく、**「不確実な状況下での意思決定」** です。

Hammurabi は、**認知心理学**、**安全工学**、**システム設計**から選び抜いた、エンジニアリングの法則の法典です。各法則には、それを独断に変えないための **対抗力**、明日から使える **現場の指針**、そして **一次資料の出典** が添えられています。人類最古の成文法典に因んで名付けました。

## 法則

|     カテゴリ      |                                              法則                                               |               核心となるアイデア                |
| :--------------: | :---------------------------------------------------------------------------------------------: | :---------------------------------------------: |
|   **意思決定**   |   [可逆的 vs 不可逆的決定](./translations/jp.md#1-意思決定の可逆性-type-1-vs-type-2-decisions)   |       「双方向のドア」か「一方向のドア」か。       |
|   **安全工学**   |          [逸脱の常態化](./translations/jp.md#2-逸脱の常態化-normalization-of-deviance)           |     小さな異常を「正常」と定義し直してはいけない。     |
|   **安全工学**   |        [スイスチーズモデル](./translations/jp.md#33-スイスチーズモデル-swiss-cheese-model)        |     事故は複数層の穴が一直線に並んだ瞬間に起きる。     |
|   **システム**   |         [チェスタトンの柵](./translations/jp.md#3-チェスタトンの柵-chestertons-fence)         |         消す前に「なぜ存在するか」を説明せよ。         |
|     **文化**     |             [ハンロンの剃刀](./translations/jp.md#12-ハンロンの剃刀-hanlons-razor)             |            悪意ではなく文脈の欠如を疑え。            |
|     **設計**     |            [コンウェイの法則](./translations/jp.md#7-コンウェイの法則-conways-law)            |           ソフトウェアは組織の鏡である。            |
|     **認知**     |          [生存者バイアス](./translations/jp.md#21-生存者バイアス-survivorship-bias)           |           死者はブログ記事を書かない。            |
|     **認知**     | [ダニング・クルーガー効果](./translations/jp.md#31-ダニング・クルーガー効果-dunning-kruger-effect) |     無能な者は自分が無能であることを認識できない。     |
| **インセンティブ** |             [コブラ効果](./translations/jp.md#23-コブラ効果-the-cobra-effect)              |             解決策がより悪い問題を生む。             |
|    **リスク**    |          [マーフィーの法則](./translations/jp.md#28-マーフィーの法則-murphys-law)           |    うまくいかない可能性があることは必ずうまくいかない。    |
|    **複雑性**    | [テスラーの複雑性保存則](./translations/jp.md#30-テスラーの複雑性保存則-teslers-law-of-conservation-of-complexity) |          複雑性は消えずに、ただ移動する。          |
|    *...他多数*    |                          [全リストを見る →](./translations/jp.md)                          |                                                 |

## サイト

碑文・エディトリアル調のサイトで、全法則を番号付きの条文（§ 01–35）として読めます。

```bash
cd website
npm install
npm run dev
```

`http://localhost:3000` にアクセスして法典を読んでください。

## 貢献について

**認知科学**や**エンジニアリング史**に基づいた強力な法則の提案を歓迎します。

1. 既存の[法典](./translations/jp.md)を確認してください。
2. 提案が **概念 / メカニズム / 対立概念 / 判断の指針 / 出典** の構造に従っていることを確認してください。「出典」は原典 (著者・論文・書籍) を引用してください。要約ブログ記事ではありません。
3. `content/en.md` と `translations/jp.md` の両方に追記し、短縮版 (`title / tag / mechanism / counter / guideline / source`) を `website/src/translations/index.ts` の `en` と `jp` 配列に追記してください。
4. PRを作成してください。

## ライセンス

MIT © 2026 Hammurabi.
