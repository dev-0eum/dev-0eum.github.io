# React 프로필 페이지 - 초보자 가이드

## 📁 디렉토리 구조 설명

```
dev-0eum.github.io/
├── index.html              # 메인 HTML 파일 (React 앱이 여기에 마운트됨)
├── package.json            # 프로젝트 설정 및 의존성
├── .gitignore             # Git에서 무시할 파일들
├── public/                # 이미지, 폰트 등 정적 자산 폴더
│   └── images/            # 프로필 이미지 등을 여기에 저장
└── src/                   # 소스 코드 폴더
    ├── index.js          # JavaScript 진입점 (React 앱 시작)
    ├── App.js            # 메인 애플리케이션 컴포넌트
    ├── components/       # React 컴포넌트들이 들어가는 폴더
    │   └── Profile.js    # 프로필 컴포넌트
    └── styles/           # CSS 파일들이 들어가는 폴더
        └── App.css       # 메인 스타일 시트
```

## 🔧 React 기초 개념

### 컴포넌트 (Component)
- **컴포넌트**는 UI를 만드는 재사용 가능한 블록입니다
- `Profile.js`는 프로필 컴포넌트로, 프로필을 보여주는 역할을 합니다
- 예시: 버튼 컴포넌트, 카드 컴포넌트 등

### JSX (JavaScript XML)
- React에서 HTML과 유사한 문법을 사용할 수 있게 해줍니다
- `<div>`, `<h1>` 같은 HTML 태그를 JavaScript 코드에서 직접 작성 가능
- 아래는 JSX 예시입니다:
```jsx
return (
  <div className="profile">
    <h1>프로필</h1>
  </div>
);
```

### Props (프로퍼티즈)
- 컴포넌트에 데이터를 전달하는 방법
- 함수의 인자처럼 생각하면 됩니다
- 예시:
```jsx
function Profile({name, title}) {
  return <h1>{name}</h1>;
}
```

### State (상태)
- 컴포넌트가 변경할 수 있는 데이터
- `useState` Hook을 사용하여 관리합니다
- 예시:
```jsx
const [count, setCount] = useState(0);  // count는 현재값, setCount는 변경함수
```

## ✏️ 사용 방법

### 1. 프로필 정보 수정
`src/components/Profile.js` 파일을 열고 `profileData` 객체를 수정하세요:
```javascript
const profileData = {
  name: '당신의 이름',           // 여기를 수정
  title: '개발자',               // 여기를 수정
  bio: '자기소개 텍스트',         // 여기를 수정
  email: 'your.email@example.com', // 여기를 수정
  github: 'https://github.com/당신의계정', // 여기를 수정
  // ...
};
```

### 2. 프로필 이미지 추가
1. `public/images/` 폴더에 프로필 이미지 파일을 넣습니다 (예: `avatar.jpg`)
2. `src/components/Profile.js`에서 아래 부분 수정:
```jsx
<img src="/images/avatar.jpg" alt="Profile Avatar" />
```

### 3. 프로젝트 추가
`profileData.projects` 배열에 새 프로젝트를 추가하세요:
```javascript
projects: [
  {
    id: 1,
    title: '프로젝트 이름',
    description: '프로젝트 설명',
    link: 'https://project-link.com'
  },
  // 새로운 프로젝트 추가
  {
    id: 2,
    title: '새 프로젝트',
    description: '새 프로젝트 설명',
    link: 'https://new-project.com'
  }
]
```

### 4. 스타일 수정
`src/styles/App.css`를 열어서 색상, 폰트, 레이아웃 등을 수정할 수 있습니다.

예시 - 배경 색상 변경:
```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* 위의 색상 값을 변경하면 됩니다 */
}
```

## 🚀 배포 방법

### GitHub Pages에 배포하기
1. 로컬에서 build 폴더 생성:
```bash
npm run build
```

2. GitHub Pages 설정:
   - GitHub 저장소 → Settings → Pages
   - Source를 "gh-pages" 브랜치로 설정
   - 변경사항을 main 브랜치에 push

3. GitHub Actions를 사용하면 자동 배포 가능

## 💡 유용한 팁

- **CSS 수정이 반영 안 됨**: 브라우저 캐시를 지우거나 Ctrl+Shift+R로 강제새로고침
- **이미지가 안 보임**: 이미지 경로가 정확한지 확인 (public 폴더 기준으로 `/images/` 사용)
- **코드 에러**: VS Code의 터미널을 보면 에러 메시지가 나옵니다
- **색상 변경 아이디어**: [Coolors.co](https://coolors.co)에서 색상 조합 찾기

## 📚 더 배우기
- [React 공식 문서](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org) - HTML, CSS, JavaScript
- [CSS Tricks](https://css-tricks.com) - CSS 팁과 트릭

