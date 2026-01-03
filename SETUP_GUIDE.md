# Nexin 프로젝트 신설 가이드

이 문서는 nexin 프로젝트를 처음부터 설정하는 단계별 가이드를 제공합니다.

## 목차

1. [Git 저장소 설정](#1-git-저장소-설정)
2. [Firebase 프로젝트 신설](#2-firebase-프로젝트-신설)
3. [환경 변수 설정](#3-환경-변수-설정)
4. [Firebase 보안 규칙 설정](#4-firebase-보안-규칙-설정)
5. [Vercel 배포 설정](#5-vercel-배포-설정)
6. [Firebase Hosting 설정 (선택사항)](#6-firebase-hosting-설정-선택사항)

---

## 1. Git 저장소 설정

### 1.1 로컬 Git 초기화

```bash
# Git 저장소 초기화 (이미 되어있다면 생략)
git init

# .gitignore 확인 (이미 설정되어 있음)
cat .gitignore
```

### 1.2 원격 저장소 연결

**GitHub 사용 시:**

1. [GitHub](https://github.com)에서 새 저장소 생성
   - Repository name: `nexin` (또는 원하는 이름)
   - Public 또는 Private 선택
   - README, .gitignore, license는 추가하지 않음 (이미 있음)

2. 원격 저장소 추가:
```bash
git remote add origin https://github.com/your-username/nexin.git
# 또는 SSH 사용 시
git remote add origin git@github.com:your-username/nexin.git
```

3. 첫 커밋 및 푸시:
```bash
git add .
git commit -m "Initial commit: Nexin project setup"
git branch -M main
git push -u origin main
```

---

## 2. Firebase 프로젝트 신설

### 2.1 Firebase Console에서 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com) 접속
2. **프로젝트 추가** 클릭
3. 프로젝트 정보 입력:
   - 프로젝트 이름: `nexin` (또는 원하는 이름)
   - Google Analytics 설정 (선택사항)
4. 프로젝트 생성 완료 대기

### 2.2 웹 앱 등록

1. Firebase Console에서 생성한 프로젝트 선택
2. 프로젝트 개요 페이지에서 **웹 앱 추가** (`</>` 아이콘) 클릭
3. 앱 닉네임 입력: `nexin-web`
4. **Firebase Hosting 설정** 체크 (선택사항)
5. **앱 등록** 클릭
6. Firebase SDK 설정 정보 복사 (다음 단계에서 사용)

### 2.3 Firebase CLI 설정

1. Firebase CLI 설치 (전역):
```bash
npm install -g firebase-tools
```

2. Firebase 로그인:
```bash
firebase login
```
브라우저가 열리면 Google 계정으로 로그인

3. 프로젝트 연결:
```bash
firebase use --add
```
- 사용 가능한 프로젝트 목록에서 `nexin` 프로젝트 선택
- 별칭 입력: `default` (또는 Enter)

4. `.firebaserc` 파일 확인:
```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

### 2.4 Firebase 서비스 활성화

Firebase Console에서 다음 서비스를 활성화하세요:

1. **Authentication (인증)**
   - 왼쪽 메뉴 > Authentication > 시작하기
   - 로그인 방법 선택 (이메일/비밀번호 등)

2. **Firestore Database**
   - 왼쪽 메뉴 > Firestore Database > 데이터베이스 만들기
   - 프로덕션 모드 또는 테스트 모드 선택
   - 위치 선택 (asia-northeast3 권장)

3. **Storage**
   - 왼쪽 메뉴 > Storage > 시작하기
   - 기본 보안 규칙 사용
   - 위치 선택 (Firestore와 동일 권장)

---

## 3. 환경 변수 설정

### 3.1 .env.local 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하세요:

```bash
# Windows (PowerShell)
New-Item .env.local

# Mac/Linux
touch .env.local
```

### 3.2 환경 변수 입력

`.env.local` 파일에 다음 내용을 입력하세요. Firebase Console의 프로젝트 설정에서 값을 가져옵니다:

```env
# Firebase Client SDK 설정 (필수)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nexin-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nexin-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nexin-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456

# Firebase Admin SDK 설정 (서버 사이드용, 선택사항)
# Firebase Console > 프로젝트 설정 > 서비스 계정에서 생성
FIREBASE_ADMIN_PROJECT_ID=nexin-project
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@nexin-project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

> **중요**: 
> - `.env.local` 파일은 절대 Git에 커밋하지 마세요 (이미 `.gitignore`에 포함됨)
> - `NEXT_PUBLIC_*` 접두사가 붙은 변수만 클라이언트에서 접근 가능합니다
> - Admin SDK는 서버 사이드 API 라우트에서만 사용됩니다

### 3.3 환경 변수 확인

개발 서버를 실행하여 환경 변수가 제대로 로드되는지 확인:

```bash
npm run dev
```

콘솔에 Firebase 초기화 오류가 없다면 정상입니다.

---

## 4. Firebase 보안 규칙 설정

### 4.1 Firestore Rules

`firestore.rules` 파일을 프로젝트에 맞게 수정하세요:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 예시: 사용자 문서는 본인만 읽기/쓰기 가능
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // 예시: 공개 데이터는 모든 인증된 사용자가 읽기 가능
    match /public/{document=**} {
      allow read: if request.auth != null;
      allow write: if false; // 관리자만 쓰기 가능하도록 별도 규칙 필요
    }
  }
}
```

규칙 배포:
```bash
firebase deploy --only firestore:rules
```

### 4.2 Storage Rules

`storage.rules` 파일을 프로젝트에 맞게 수정하세요:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 예시: 사용자별 폴더는 본인만 접근 가능
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // 예시: 공개 파일은 모든 인증된 사용자가 읽기 가능
    match /public/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```

규칙 배포:
```bash
firebase deploy --only storage
```

---

## 5. Vercel 배포 설정

### 5.1 Vercel 계정 및 프로젝트 생성

1. [Vercel](https://vercel.com) 접속 및 로그인 (GitHub 계정 권장)
2. **Add New Project** 클릭
3. Git 저장소 연결:
   - GitHub/GitLab에서 `nexin` 저장소 선택
   - 또는 저장소 URL 직접 입력

### 5.2 프로젝트 설정

1. 프로젝트 설정 화면에서:
   - **Framework Preset**: Next.js (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (기본값)
   - **Output Directory**: `.next` (기본값)
   - **Install Command**: `npm install` (기본값)

2. **Environment Variables** 섹션에서 환경 변수 추가:
   - `.env.local`에 설정한 모든 `NEXT_PUBLIC_*` 변수 추가
   - 각 변수에 대해 적용 환경 선택:
     - Production
     - Preview
     - Development

3. **Deploy** 클릭

### 5.3 자동 배포 확인

- Git 저장소에 푸시하면 자동으로 배포됩니다
- Pull Request 생성 시 Preview 배포가 자동 생성됩니다

### 5.4 커스텀 도메인 설정 (선택사항)

1. Vercel 프로젝트 > Settings > Domains
2. 도메인 추가 및 DNS 설정

---

## 6. Firebase Hosting 설정 (선택사항)

Vercel 대신 Firebase Hosting을 사용하려면:

### 6.1 Firebase Hosting 초기화

```bash
firebase init hosting
```

설정 옵션:
- **What do you want to use as your public directory?** → `out`
- **Configure as a single-page app?** → `Yes`
- **Set up automatic builds and deploys with GitHub?** → `No` (선택사항)

### 6.2 빌드 및 배포

```bash
# 빌드
npm run build

# 배포
firebase deploy --only hosting
```

### 6.3 자동 배포 설정 (GitHub Actions)

`.github/workflows/firebase-deploy.yml` 파일 생성:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-firebase-project-id
```

---

## 문제 해결

### Firebase 초기화 오류

- `.env.local` 파일이 존재하는지 확인
- 환경 변수 이름이 정확한지 확인 (`NEXT_PUBLIC_` 접두사 필수)
- Firebase Console에서 프로젝트 설정 확인

### 빌드 오류

- `npm install` 실행하여 의존성 설치 확인
- Node.js 버전 확인 (18.x 이상 권장)

### 배포 오류

- Vercel: 환경 변수가 모든 환경에 설정되어 있는지 확인
- Firebase: `firebase login` 및 `firebase use` 확인

---

## 다음 단계

환경 설정이 완료되면:

1. 개발 서버 실행: `npm run dev`
2. Firebase Authentication 설정
3. Firestore 데이터베이스 구조 설계
4. 컴포넌트 및 페이지 개발 시작

자세한 내용은 [README.md](./README.md)를 참고하세요.

