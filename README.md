# Nexin 프로젝트

SG-LOK 프로젝트와 동일한 기술 환경으로 구성된 독립적인 Next.js 프로젝트입니다.

## 기술 스택

- **Next.js 15.5.7** (App Router, Turbopack)
- **React 19.1.2**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Firebase** (Authentication, Firestore, Storage)
- **Zustand** (상태 관리)

## 초기 설정

### 1. Git 저장소 신설

```bash
# Git 저장소 초기화 (이미 되어있다면 생략)
git init

# 원격 저장소 추가 (GitHub, GitLab 등)
git remote add origin <your-repository-url>

# 첫 커밋
git add .
git commit -m "Initial commit: Nexin project setup"
git branch -M main
git push -u origin main
```

### 2. Firebase 프로젝트 신설

1. [Firebase Console](https://console.firebase.google.com) 접속
2. **프로젝트 추가** 클릭
3. 프로젝트 이름: `nexin` (또는 원하는 이름)
4. Google Analytics 설정 (선택사항)
5. 프로젝트 생성 완료 후:
   - **프로젝트 설정** > **일반** 탭
   - **내 앱** 섹션에서 **웹 앱 추가** (`</>` 아이콘)
   - 앱 닉네임 입력 후 등록
   - Firebase SDK 설정 정보 복사

6. `.firebaserc` 파일 수정:
```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

7. Firebase CLI 로그인 및 프로젝트 연결:
```bash
npm install -g firebase-tools
firebase login
firebase use --add
# 프로젝트 선택 후 별칭 입력 (default)
```

### 3. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
# Nexin 프로젝트 Firebase 설정
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK (서버 사이드용, 선택사항)
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=your-service-account@your-project-id.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

> **참고**: `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다.

### 4. Firebase 보안 규칙 설정

Firebase Console에서 다음 규칙을 설정하세요:

**Firestore Rules** (`firestore.rules`):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 프로젝트에 맞게 규칙 수정 필요
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**Storage Rules** (`storage.rules`):
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 프로젝트에 맞게 규칙 수정 필요
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

규칙 배포:
```bash
firebase deploy --only firestore:rules
firebase deploy --only storage
```

### 5. 의존성 설치

```bash
npm install
```

### 6. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

## Vercel 배포 설정

### 1. Vercel 프로젝트 신설

1. [Vercel](https://vercel.com) 접속 및 로그인
2. **Add New Project** 클릭
3. Git 저장소 연결 (GitHub, GitLab 등)
4. 프로젝트 설정:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (기본값)
   - **Output Directory**: `.next` (기본값)

### 2. 환경 변수 설정

Vercel 대시보드에서:
1. 프로젝트 선택 > **Settings** > **Environment Variables**
2. `.env.local`에 설정한 모든 `NEXT_PUBLIC_*` 환경 변수 추가
3. 각 환경(Production, Preview, Development)에 적용

### 3. 배포

Git에 푸시하면 자동으로 배포됩니다:
```bash
git push origin main
```

또는 수동 배포:
```bash
vercel --prod
```

## Firebase Hosting 배포 (선택사항)

```bash
# 빌드
npm run build

# Firebase Hosting 배포
firebase deploy --only hosting
```

## 프로젝트 구조

```
src/
├── app/          # Next.js App Router 페이지
├── components/   # 재사용 가능한 컴포넌트
│   ├── layout/   # 레이아웃 컴포넌트
│   └── ui/       # UI 컴포넌트
├── hooks/        # Custom hooks
├── lib/          # 유틸리티 함수
│   └── firebase.ts  # Firebase 초기화
├── stores/       # Zustand 스토어
└── types/        # TypeScript 타입 정의
```

## 주요 스크립트

- `npm run dev` - 개발 서버 실행 (Turbopack)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행
- `npm run export` - 정적 사이트 빌드
- `npm run deploy` - Firebase Hosting 배포

## 주의사항

- **Firebase 프로젝트는 SG-LOK와 완전히 독립적**입니다
- **Git 저장소도 별도로 관리**됩니다
- **환경 변수는 각 환경에 맞게 설정**해야 합니다
- `.env.local` 파일은 절대 Git에 커밋하지 마세요
