// 学歴・受賞歴・技術スキルなど、経歴の背景にあたるデータ。

export type EducationText = {
  school: string;
  degree: string;
  period: string;
  advisor: string;
  courseworkLabel: string;
  coursework: string[];
};

export const education: { en: EducationText; ja: EducationText } = {
  en: {
    school: "Allegheny College, Meadville, PA",
    degree: "B.S. in Computer Science, Minor in Economics",
    period: "Expected August 2027",
    advisor: "Research Advisor: Prof. Greg Kapfhammer",
    courseworkLabel: "Relevant coursework",
    coursework: [
      "Operating Systems",
      "Computer Organization",
      "Object-Oriented Programming",
      "Structured Programming",
      "Theory of Computation",
      "Discrete Structures",
      "Applied Statistics",
      "Linear Algebra",
      "Robotic Agents",
    ],
  },
  ja: {
    school: "アレゲニー大学（ペンシルベニア州ミードビル）",
    degree: "コンピュータサイエンス学士（経済学副専攻）",
    period: "2027年8月卒業見込み",
    advisor: "研究指導教員: Greg Kapfhammer 教授",
    courseworkLabel: "主な履修科目",
    coursework: [
      "オペレーティングシステム",
      "コンピュータ構成",
      "オブジェクト指向プログラミング",
      "構造化プログラミング",
      "計算理論",
      "離散構造",
      "応用統計学",
      "線形代数",
      "ロボティックエージェント",
    ],
  },
};

// 受賞・表彰。新しいものから並べる
export const awards: { en: string[]; ja: string[] } = {
  en: [
    "1st Place, Academic Expo research presentation competition, selected from 70 teams",
    "Harold M. State Student Research Fellowship",
    "1st Place, ACM Algorithm Solving Tournament, first- and second-year division",
    "Allegheny College Merit Scholarship for academic excellence",
    "Chancellor's List recognition",
  ],
  ja: [
    "Academic Expo 研究発表コンペティション 1位（70チームから選出）",
    "ハロルド・M・ステート学生研究フェローシップ",
    "ACM アルゴリズムソルビングトーナメント 1位（1・2年生部門）",
    "アレゲニー大学メリット奨学金（学業成績優秀）",
    "Chancellor's List 選出",
  ],
};

// 技術スキル。項目名は固有名詞なので訳さず、見出しだけ言語ごとに持つ
export type SkillGroup = { label: string; items: string[] };

export const skills: { en: SkillGroup[]; ja: SkillGroup[] } = {
  en: [
    { label: "Languages", items: ["C", "C++", "Python", "Go", "SQL"] },
    {
      label: "Systems & Tools",
      items: ["Linux", "Git", "Docker", "GitHub Actions"],
    },
  ],
  ja: [
    { label: "言語", items: ["C", "C++", "Python", "Go", "SQL"] },
    {
      label: "システム・ツール",
      items: ["Linux", "Git", "Docker", "GitHub Actions"],
    },
  ],
};
