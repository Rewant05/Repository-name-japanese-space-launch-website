export declare const siteData: {
    readonly company: {
        readonly name: "星翔テクノロジーズ";
        readonly romanized: "SEISHO TECHNOLOGIES";
        readonly tagline: "宇宙へ、確かな軌道を描く。";
        readonly address: "東京都江東区青海2-5-10 テレコムセンタービル 14F";
        readonly phone: "03-6457-2094";
        readonly email: "contact@seisho-space.jp";
        readonly hours: "平日 9:30〜18:30";
        readonly facilities: readonly ["種子島実証パートナー施設", "筑波研究連携ラボ"];
    };
    readonly socialLinks: readonly [{
        readonly label: "X";
        readonly href: "https://x.com/";
    }, {
        readonly label: "LinkedIn";
        readonly href: "https://www.linkedin.com/";
    }];
    readonly navigation: readonly [{
        readonly label: "私たちについて";
        readonly href: "/about";
    }, {
        readonly label: "サービス";
        readonly href: "/services";
    }, {
        readonly label: "ミッション";
        readonly href: "/missions";
    }, {
        readonly label: "技術";
        readonly href: "/technology";
    }, {
        readonly label: "お問い合わせ";
        readonly href: "/contact";
    }];
    readonly footerLinks: readonly [{
        readonly label: "プライバシーポリシー";
        readonly href: "/privacy";
    }, {
        readonly label: "利用規約";
        readonly href: "/terms";
    }];
    readonly services: readonly [{
        readonly no: "01";
        readonly title: "小型衛星ミッション設計";
        readonly code: "MISSION ARCHITECTURE";
        readonly description: "目的、観測対象、運用条件から、衛星ミッション全体の要求を整理。実現可能性の検証から開発ロードマップまで設計します。";
        readonly clients: "大学・研究機関、新規宇宙事業を検討する企業";
        readonly deliverables: readonly ["要求仕様書", "実現性評価", "開発・運用計画"];
    }, {
        readonly no: "02";
        readonly title: "軌道投入計画サポート";
        readonly code: "ORBIT INSERTION";
        readonly description: "投入軌道、打ち上げ機会、衛星分離条件を解析し、ミッションに適した軌道投入シナリオを構築します。";
        readonly clients: "超小型衛星開発チーム、衛星事業者";
        readonly deliverables: readonly ["軌道解析レポート", "投入ウィンドウ評価", "分離条件設計"];
    }, {
        readonly no: "03";
        readonly title: "打ち上げデータ可視化";
        readonly code: "LAUNCH VISUALIZATION";
        readonly description: "複雑な飛行・テレメトリーデータを、意思決定に使えるダッシュボードへ。関係者間の状況認識を揃えます。";
        readonly clients: "打ち上げ事業者、プロジェクト管理チーム";
        readonly deliverables: readonly ["ライブ表示設計", "解析画面", "報告用データビュー"];
    }, {
        readonly no: "04";
        readonly title: "宇宙実証プロジェクト支援";
        readonly code: "IN-ORBIT DEMONSTRATION";
        readonly description: "技術実証の目的設定、搭載要件、試験計画、運用後評価までを一貫して伴走します。";
        readonly clients: "素材・電子・通信分野の研究開発部門";
        readonly deliverables: readonly ["実証計画書", "搭載要件整理", "成果評価レポート"];
    }, {
        readonly no: "05";
        readonly title: "研究機関・大学向け連携プログラム";
        readonly code: "RESEARCH PARTNERSHIP";
        readonly description: "研究成果を軌道上へ運ぶための共同検討と、学生を含むチームの実践的な開発支援を行います。";
        readonly clients: "大学研究室、高専、公的研究機関";
        readonly deliverables: readonly ["共同研究設計", "技術レビュー", "人材育成プログラム"];
    }, {
        readonly no: "06";
        readonly title: "地上局データ連携サポート";
        readonly code: "GROUND SEGMENT";
        readonly description: "地上局との通信要件、データ受け渡し、運用フローを整理し、軌道上から利用現場までを接続します。";
        readonly clients: "衛星運用者、データ利用事業者";
        readonly deliverables: readonly ["通信要件定義", "API連携設計", "運用手順書"];
    }];
    readonly missions: readonly [{
        readonly name: "AURORA-01";
        readonly jp: "気象観測データ実証";
        readonly year: "2026";
        readonly status: "運用準備中";
        readonly objective: "局地気象の高頻度観測とデータ配信の実証";
        readonly partner: "気象データ企業";
        readonly orbit: "太陽同期軌道 / 520 km";
        readonly color: "#69b9ff";
    }, {
        readonly name: "TSUBASA-Lite";
        readonly jp: "大学共同超小型衛星";
        readonly year: "2025";
        readonly status: "軌道上運用";
        readonly objective: "低消費電力通信機器の軌道上性能評価";
        readonly partner: "国立大学研究室";
        readonly orbit: "LEO / 480 km";
        readonly color: "#ff7a35";
    }, {
        readonly name: "ORBIT-K";
        readonly jp: "企業向け通信実証";
        readonly year: "2027";
        readonly status: "設計審査中";
        readonly objective: "山間部向けIoT衛星通信の技術実証";
        readonly partner: "通信機器メーカー";
        readonly orbit: "傾斜軌道 / 550 km";
        readonly color: "#a4ffdf";
    }, {
        readonly name: "MINAMO";
        readonly jp: "海洋観測ミッション";
        readonly year: "2026";
        readonly status: "開発中";
        readonly objective: "沿岸域の海面変化と漂流物の観測";
        readonly partner: "海洋研究機関";
        readonly orbit: "太陽同期軌道 / 570 km";
        readonly color: "#839dff";
    }, {
        readonly name: "HIKARI Path";
        readonly jp: "軌道データ可視化実験";
        readonly year: "2024";
        readonly status: "実証完了";
        readonly objective: "衛星位置・通信可視性のリアルタイム共有";
        readonly partner: "宇宙スタートアップ";
        readonly orbit: "複数軌道データ統合";
        readonly color: "#ffd277";
    }];
    readonly technology: readonly [{
        readonly index: "T–01";
        readonly title: "軌道計画インターフェース";
        readonly code: "ORBIT PLANNING";
        readonly text: "複数の投入候補を同一座標系で比較し、観測頻度・通信可能時間・デブリ接近リスクを横断評価します。";
    }, {
        readonly index: "T–02";
        readonly title: "打ち上げシミュレーション";
        readonly code: "FLIGHT SIMULATION";
        readonly text: "飛行イベントと分離条件を時系列で可視化。設計変更の影響をチーム全体で素早く共有できます。";
    }, {
        readonly index: "T–03";
        readonly title: "衛星放出支援";
        readonly code: "DEPLOYMENT SUPPORT";
        readonly text: "衛星の姿勢、相対速度、放出タイミングを検証し、初期運用へ安全に引き渡す条件を設計します。";
    }, {
        readonly index: "T–04";
        readonly title: "安全・リスク評価";
        readonly code: "RISK ASSESSMENT";
        readonly text: "FMEAと確率的解析を組み合わせ、打ち上げ前から運用終了までのリスクを継続的に管理します。";
    }, {
        readonly index: "T–05";
        readonly title: "ミッションダッシュボード";
        readonly code: "MISSION DASHBOARD";
        readonly text: "テレメトリー、手順、判断履歴をひとつの運用画面に統合。必要な情報へ迷わず到達できます。";
    }, {
        readonly index: "T–06";
        readonly title: "研究連携パイプライン";
        readonly code: "RESEARCH PIPELINE";
        readonly text: "研究段階のアイデアを、技術成熟度に応じた試験・審査・軌道上実証へ接続します。";
    }];
    readonly faqs: readonly [{
        readonly q: "構想段階でも相談できますか？";
        readonly a: "はい。衛星の仕様が固まる前の目的整理からご相談いただけます。初回のヒアリングでは、実現したい観測・通信・実証内容と想定時期を伺います。";
    }, {
        readonly q: "打ち上げ機の手配も依頼できますか？";
        readonly a: "国内外の打ち上げサービス事業者と連携し、候補選定や技術調整を支援します。契約主体や調達範囲は案件ごとにご提案します。";
    }, {
        readonly q: "大学の小規模なプロジェクトにも対応していますか？";
        readonly a: "対応しています。予算・教育目的・開発体制を踏まえ、段階的なミッション計画や共同研究の枠組みをご案内します。";
    }, {
        readonly q: "機密情報はどのように扱われますか？";
        readonly a: "ご相談前の秘密保持契約に対応しています。プロジェクト情報は権限管理された環境で取り扱い、目的外利用を行いません。";
    }];
    readonly legal: {
        readonly privacy: readonly [{
            readonly title: "個人情報の取得について";
            readonly text: "当社は、お問い合わせ、サービス提供、採用活動等に必要な範囲で、適法かつ公正な手段により個人情報を取得します。";
        }, {
            readonly title: "利用目的";
            readonly text: "取得した情報は、お問い合わせへの回答、提案・契約の履行、サービス改善、重要なお知らせ、採用選考および法令上必要な対応に利用します。";
        }, {
            readonly title: "第三者提供について";
            readonly text: "法令に基づく場合または本人の同意がある場合を除き、個人情報を第三者へ提供しません。業務委託先には必要な監督を行います。";
        }, {
            readonly title: "研究・技術情報の取り扱い";
            readonly text: "共同研究および技術相談で受領した未公開情報は、契約上の機密区分とアクセス権限に従い、個人情報とは別に厳格に管理します。";
        }, {
            readonly title: "安全管理";
            readonly text: "不正アクセス、紛失、改ざん、漏えいを防ぐため、組織的・人的・物理的・技術的な安全管理措置を継続的に見直します。";
        }, {
            readonly title: "Cookieの利用";
            readonly text: "当サイトは利便性向上と利用状況の把握にCookieを利用する場合があります。ブラウザ設定により無効化できますが、一部機能に影響することがあります。";
        }, {
            readonly title: "お問い合わせ窓口";
            readonly text: "保有個人データの開示、訂正、利用停止等のご請求は、当社お問い合わせ窓口までご連絡ください。本人確認後、法令に基づき対応します。";
        }, {
            readonly title: "改定について";
            readonly text: "法令や事業内容の変更に応じて本方針を改定することがあります。重要な変更は当サイト上でお知らせします。";
        }];
        readonly terms: readonly [{
            readonly title: "サービスの利用条件";
            readonly text: "利用者は、本規約および個別契約の内容に従って当サイトと当社サービスを利用するものとします。個別契約と本規約が異なる場合は個別契約を優先します。";
        }, {
            readonly title: "技術情報の取り扱い";
            readonly text: "当サイトの技術資料は一般的な情報提供を目的とし、特定ミッションの安全性や性能を保証するものではありません。個別の設計判断には正式な技術審査が必要です。";
        }, {
            readonly title: "禁止事項";
            readonly text: "法令違反、第三者の権利侵害、不正アクセス、当サイトの運営妨害、情報の不正取得、虚偽情報の送信その他当社が不適切と判断する行為を禁止します。";
        }, {
            readonly title: "免責事項";
            readonly text: "当社は掲載情報の正確性維持に努めますが、完全性・最新性を保証しません。利用により生じた損害について、当社の故意または重過失による場合を除き責任を負いません。";
        }, {
            readonly title: "知的財産権";
            readonly text: "当サイトの文章、図面、映像、ロゴ、プログラム等の権利は当社または正当な権利者に帰属します。許可なく複製、改変、再配布することはできません。";
        }, {
            readonly title: "掲載情報の変更";
            readonly text: "当社は予告なく掲載内容、提供機能または本規約を変更・停止することがあります。重要な変更は合理的な方法で周知します。";
        }, {
            readonly title: "準拠法";
            readonly text: "本規約は日本法に準拠し、当サイトまたはサービスに関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。";
        }, {
            readonly title: "お問い合わせ";
            readonly text: "本規約に関するお問い合わせは、当社お問い合わせ窓口までご連絡ください。";
        }];
    };
};
export type Service = (typeof siteData.services)[number];
export type Mission = (typeof siteData.missions)[number];
