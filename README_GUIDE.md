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

### 자동 배포 (GitHub Actions) - 추천! ⭐

GitHub Actions를 이용하면 코드를 push할 때마다 **자동으로 빌드하고 배포**됩니다!

#### 설정 방법

1. **GitHub 저장소 설정 확인**
   - 저장소 → Settings → Pages
   - Source를 "Deploy from a branch"로 설정
   - Branch를 "gh-pages"로 선택

2. **아무것도 하지 마세요!** 
   - `.github/workflows/deploy.yml` 파일이 이미 설정되어 있습니다
   - 이제 main 브랜치에 push하기만 하면 자동으로 배포됩니다!

3. **자동 배포 작동 확인**
   - GitHub 저장소 → Actions 탭
   - 배포 진행 상황을 실시간으로 볼 수 있습니다
   - ✅ 완료되면 자동으로 웹사이트에 반영됩니다

#### 배포 과정 (자동으로 진행됨)
1. ✅ 코드를 main 브랜치에 push
2. ✅ GitHub Actions가 자동 실행
3. ✅ npm install로 의존성 설치
4. ✅ npm run build로 React 앱 빌드
5. ✅ build 폴더를 gh-pages 브랜치에 배포
6. ✅ GitHub Pages에서 자동 호스팅

### 수동 배포 (선택사항)

자동 배포 대신 수동으로 배포하고 싶다면:

1. 로컬에서 build 폴더 생성:
```bash
npm run build
```

2. 수동으로 배포하려면 추가 도구 설치:
```bash
npm install --save-dev gh-pages
```

3. package.json에 deploy 스크립트 추가 (선택):
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d build"
}
```

4. 배포:
```bash
npm run deploy
```

## 💡 유용한 팁

### GitHub Actions 워크플로우 이해하기

`.github/workflows/deploy.yml` 파일은 자동 배포를 관리합니다. 각 단계를 설명하면:

```yaml
on:
  push:
    branches:
      - main  # main 브랜치에 push될 때 실행
```
- main 브랜치에 push될 때마다 자동 실행

```yaml
- name: Install dependencies
  run: npm install
```
- 필요한 라이브러리 설치

```yaml
- name: Build React app
  run: npm run build
```
- React 코드를 최적화된 형태로 변환

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    publish_dir: ./build
```
- 빌드된 파일을 GitHub Pages에 배포

### 배포가 안 될 때 확인사항

1. **GitHub Pages 설정 확인**
   - Settings → Pages
   - Source가 "Deploy from a branch"인지 확인
   - Branch가 "gh-pages"로 선택되어 있는지 확인

2. **Actions 탭에서 에러 확인**
   - Repository → Actions 탭
   - 실패한 워크플로우를 클릭하여 에러 메시지 확인
   - 에러가 보이면 로그를 읽고 필요시 코드 수정

3. **package.json 확인**
   - react-scripts가 설치되어 있는지 확인
   - 오타가 없는지 확인

- **CSS 수정이 반영 안 됨**: 브라우저 캐시를 지우거나 Ctrl+Shift+R로 강제새로고침
- **이미지가 안 보임**: 이미지 경로가 정확한지 확인 (public 폴더 기준으로 `/images/` 사용)
- **코드 에러**: VS Code의 터미널을 보면 에러 메시지가 나옵니다
- **색상 변경 아이디어**: [Coolors.co](https://coolors.co)에서 색상 조합 찾기

## 📚 더 배우기
- [React 공식 문서](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org) - HTML, CSS, JavaScript
- [CSS Tricks](https://css-tricks.com) - CSS 팁과 트릭

