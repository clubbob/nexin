# Vercel 배포 가이드

nexin 프로젝트를 Vercel에 배포하는 단계별 가이드입니다.

## 사전 준비

### 1. Git 저장소 확인

Vercel은 Git 저장소와 연결하여 자동 배포를 제공합니다. 먼저 Git 저장소가 설정되어 있는지 확인하세요:

```bash
# Git 저장소 상태 확인
git status

# 원격 저장소 확인
git remote -v
```

원격 저장소가 없다면:

```bash
# GitHub/GitLab에 새 저장소 생성 후
git init
git add .
git commit -m "Initial commit: Nexin project"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

## Vercel 배포 단계

### 1. Vercel 계정 생성 및 로그인

1. [Vercel](https://vercel.com) 접속
2. **Sign Up** 또는 **Log In** 클릭
3. GitHub, GitLab, Bitbucket 계정으로 로그인 (권장)

### 2. 새 프로젝트 생성

1. Vercel 대시보드에서 **Add New Project** 클릭
2. **Import Git Repository** 선택
3. Git 저장소 선택:
   - GitHub/GitLab에서 `nexin` 저장소 선택
   - 또는 저장소 URL 직접 입력

### 3. 프로젝트 설정

프로젝트 설정 화면에서:

#### 3.1 기본 설정
- **Project Name**: `nexin` (또는 원하는 이름)
- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `.next` (기본값)
- **Install Command**: `npm install` (기본값)

#### 3.2 환경 변수 설정 (중요!)

**Environment Variables** 섹션에서 `.env.local`에 설정한 모든 `NEXT_PUBLIC_*` 환경 변수를 추가하세요:

1. **Add** 버튼 클릭
2. 각 환경 변수 추가:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

3. 각 변수에 대해 적용 환경 선택:
   - ✅ **Production** (프로덕션)
   - ✅ **Preview** (프리뷰/PR)
   - ✅ **Development** (개발)

> **중요**: `.env.local` 파일의 값을 그대로 복사해서 입력하세요.

#### 3.3 배포

1. 모든 설정 확인 후 **Deploy** 버튼 클릭
2. 배포 진행 상황 확인 (약 1-2분 소요)
3. 배포 완료 후 제공되는 URL로 접속 확인

### 4. 배포 확인

배포가 완료되면:

1. Vercel 대시보드에서 프로젝트 선택
2. **Deployments** 탭에서 배포 상태 확인
3. 제공된 URL (예: `nexin.vercel.app`)로 접속하여 사이트 확인

## 자동 배포 설정

### Git 푸시 시 자동 배포

Vercel은 Git 저장소와 연결되어 있으면 자동으로 배포됩니다:

- **main/master 브랜치 푸시** → Production 배포
- **다른 브랜치 푸시** → Preview 배포
- **Pull Request 생성** → Preview 배포

### 배포 확인

```bash
# 코드 변경 후
git add .
git commit -m "Update code"
git push origin main

# Vercel에서 자동으로 배포 시작됨
```

## 커스텀 도메인 설정 (선택사항)

1. Vercel 프로젝트 > **Settings** > **Domains**
2. 도메인 추가
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정

## 환경 변수 업데이트

환경 변수를 변경해야 할 때:

1. Vercel 프로젝트 > **Settings** > **Environment Variables**
2. 변수 수정 또는 추가
3. **Save** 클릭
4. **Redeploy** 클릭하여 변경사항 적용

## 문제 해결

### 빌드 오류

- Vercel 대시보드 > **Deployments** > 실패한 배포 클릭
- **Build Logs** 확인하여 오류 원인 파악
- 일반적인 원인:
  - 환경 변수 누락
  - 의존성 설치 오류
  - 빌드 스크립트 오류

### 환경 변수 오류

- 모든 `NEXT_PUBLIC_*` 변수가 설정되었는지 확인
- Production, Preview, Development 모두에 설정되었는지 확인
- 변수 이름에 오타가 없는지 확인

### Firebase 연결 오류

- Firebase Console에서 프로젝트 설정 확인
- 환경 변수 값이 정확한지 확인
- Firebase 보안 규칙 확인

## Vercel CLI 사용 (선택사항)

Vercel CLI를 사용하여 로컬에서 배포할 수도 있습니다:

```bash
# Vercel CLI 설치
npm install -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 체크리스트

- [ ] Git 저장소 설정 완료
- [ ] Vercel 계정 생성 및 로그인
- [ ] Vercel 프로젝트 생성
- [ ] Git 저장소 연결
- [ ] 환경 변수 설정 (모든 NEXT_PUBLIC_* 변수)
- [ ] 배포 완료 및 사이트 확인
- [ ] 자동 배포 테스트 (Git 푸시)

## 참고

- Vercel 문서: https://vercel.com/docs
- Next.js 배포 가이드: https://nextjs.org/docs/deployment

