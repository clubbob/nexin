# Vercel에 nexin 프로젝트 생성하기

현재 Vercel에 nexin 프로젝트가 없습니다. 다음 방법 중 하나로 생성하세요.

## 방법 1: Vercel 웹 대시보드에서 생성 (권장)

### 단계별 가이드

1. **Vercel 대시보드 접속**
   - https://vercel.com 접속
   - 로그인 확인

2. **프로젝트 추가**
   - 우측 상단 "Add New..." 버튼 클릭
   - "Project" 선택

3. **Git 저장소 연결**
   - "Import Git Repository" 선택
   - GitHub 저장소 목록에서 `clubbob/nexin` 찾기
   - "Import" 클릭

4. **프로젝트 설정**
   - Project Name: `nexin` (자동 입력됨)
   - Framework Preset: Next.js (자동 감지)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (기본값)
   - Output Directory: `.next` (기본값)
   - Install Command: `npm install` (기본값)

5. **환경 변수 설정 (중요!)**
   - "Environment Variables" 섹션 클릭
   - 다음 변수들을 하나씩 추가:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=값
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=값
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=값
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=값
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=값
     NEXT_PUBLIC_FIREBASE_APP_ID=값
     ```
   - 각 변수에 대해:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
     모두 체크

6. **배포**
   - "Deploy" 버튼 클릭
   - 배포 완료 대기 (약 1-2분)

## 방법 2: Vercel CLI로 생성

터미널에서 실행:

```bash
# Vercel 로그인 확인
vercel login

# 프로젝트 생성 및 배포
vercel

# 질문에 답변:
# - Set up and deploy? Yes
# - Which scope? clubbob-navercoms-projects
# - Link to existing project? No
# - Project name? nexin
# - Directory? ./
# - Override settings? No
```

환경 변수는 나중에 웹 대시보드에서 설정해야 합니다.

## 방법 3: vercel.json 파일 사용 (고급)

프로젝트 루트에 `vercel.json` 파일 생성 후 CLI로 배포:

```bash
vercel --prod
```

## 환경 변수 설정 위치

프로젝트 생성 후 환경 변수는 다음 위치에서 설정:
- Vercel 대시보드 > nexin 프로젝트 > Settings > Environment Variables

## 문제 해결

### 프로젝트가 보이지 않는 경우
1. 다른 팀/조직에 생성되었는지 확인
2. 검색창에서 "nexin" 검색
3. 필터 확인 (모든 프로젝트 표시)

### 배포 실패 시
1. Deployments 탭에서 Build Logs 확인
2. 환경 변수 누락 확인
3. Firebase 설정 확인

