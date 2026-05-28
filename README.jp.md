<div align="center">
  <img src="./website/public/logo.svg" width="100" height="100" alt="Hacker Heuristics Logo" />
  <h1>Hacker Heuristics</h1>
  <p><b>エンジニアリングの大統一理論</b></p>
  <p>未知の領域を切り拓くための、究極の意思決定メンタルモデル集。</p>

  <p>
    <a href="https://github.com/kanywst/hacker-heuristics/stargazers"><img src="https://img.shields.io/github/stars/kanywst/hacker-heuristics?style=for-the-badge&color=00f2ff&labelColor=050505" alt="stars" /></a>
    <a href="https://github.com/kanywst/hacker-heuristics/network/members"><img src="https://img.shields.io/github/forks/kanywst/hacker-heuristics?style=for-the-badge&color=7000ff&labelColor=050505" alt="forks" /></a>
    <a href="https://github.com/kanywst/hacker-heuristics/blob/main/LICENSE"><img src="https://img.shields.io/github/license/kanywst/hacker-heuristics?style=for-the-badge&color=ff007a&labelColor=050505" alt="license" /></a>
  </p>

  <p>
    <kbd><a href="./README.md">English</a></kbd> • <kbd>日本語</kbd>
  </p>
</div>

---

## Hacker Heuristics とは？

複雑性が増し続ける現代において、エンジニアリングの最大のボトルネックは「コード」ではなく、**「不確実な状況下での意思決定」** です。

Hacker Heuristics は、**認知心理学**、**安全工学**、そして**システム設計**の境界線を繋ぐメンタルモデルの厳選されたコレクションです。これは、あなたの脳のための「デバッグログ」であり、バイアスを特定し、それが技術負債やシステム障害として顕在化する前に「パッチ」を当てるための指針を提供します。

## 原理原則

|     カテゴリ     |                                              原理原則                                              |                  核心となるアイデア                  |
| :--------------: | :------------------------------------------------------------------------------------------------: | :--------------------------------------------------: |
|    **意思決定**    | [可逆的 vs 不可逆的決定](./translations/jp.md#1-意思決定の可逆性-type-1-vs-type-2-decisions)         |          「双方向のドア」か「一方向のドア」か。          |
|    **安全工学**    |        [逸脱の常態化](./translations/jp.md#2-逸脱の常態化-normalization-of-deviance)                |     小さな異常を「正常」と定義し直してはいけない。     |
|    **安全工学**    |        [スイスチーズモデル](./translations/jp.md#33-スイスチーズモデル-swiss-cheese-model)           |     事故は複数層の穴が一直線に並んだ瞬間に起きる。     |
|    **システム**    |        [チェスタトンの柵](./translations/jp.md#3-チェスタトンの柵-chestertons-fence)                |        消す前に「なぜ存在するか」を説明せよ。         |
|     **文化**      |             [ハンロンの剃刀](./translations/jp.md#12-ハンロンの剃刀-hanlons-razor)                  |           悪意ではなく文脈の欠如を疑え。              |
|     **設計**      |            [コンウェイの法則](./translations/jp.md#7-コンウェイの法則-conways-law)                  |          ソフトウェアは組織の鏡である。              |
|     **認知**      |       [生存者バイアス](./translations/jp.md#21-生存者バイアス-survivorship-bias)                    |          死者はブログ記事を書かない。               |
|     **認知**      |   [ダニング・クルーガー効果](./translations/jp.md#31-ダニング・クルーガー効果-dunning-kruger-effect)  |     無能な者は自分が無能であることを認識できない。     |
| **インセンティブ** |          [コブラ効果](./translations/jp.md#23-コブラ効果-the-cobra-effect)                          |          解決策がより悪い問題を生む。              |
|    **リスク**     |          [マーフィーの法則](./translations/jp.md#28-マーフィーの法則-murphys-law)                   |    うまくいかない可能性があることは必ずうまくいかない。   |
|    **複雑性**     | [テスラーの複雑性保存則](./translations/jp.md#30-テスラーの複雑性保存則-teslers-law-of-conservation-of-complexity) | 複雑性は消えずに、ただ移動する。 |
|    *...他多数*    |                           [全リストを見る →](./translations/jp.md)                                 |                                                      |

## インタラクティブ・ポータル

最新のサイバーパンク・テーマを追求したポータルサイトで、これらのヒューリスティクスを探索できます。

```bash
cd website
npm install
npm run dev
```

`http://localhost:3000` にアクセスし、2026年仕様のUI/UXを体感してください。

## 貢献について

**認知科学**や**エンジニアリング史**に基づいた強力なヒューリスティクスの提案を歓迎します。

1. 既存の[リスト](./translations/jp.md)を確認してください。
2. 提案が **概念 / メカニズム / 対立概念 / 判断の指針 / 出典** の構造に従っていることを確認してください。「出典」は原典 (著者・論文・書籍) を引用してください。要約ブログ記事ではありません。
3. `content/en.md` と `translations/jp.md` の両方、および `website/src/translations/index.ts` の短縮版 (`iconMap` のアイコン追加も) に追記してください。
4. PRを作成してください。

## ライセンス

MIT © 2026 Hacker Heuristics Project.
