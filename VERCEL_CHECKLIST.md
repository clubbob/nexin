# Vercel nexin 프로젝트 확인 체크리스트

## ✅ 완료된 작업
- [x] Vercel에서 nexin 프로젝트 생성
- [x] Git 저장소 연결 (clubbob/nexin)

## 🔍 확인 필요 사항

### 1. 환경 변수 설정 확인

Vercel 프로젝트 > Settings > Environment Variables에서 다음 변수들이 모두 설정되어 있는지 확인:

- [ ] `NEXT_PUBLIC_FIREBASE_API_KEY`
- [ ] `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- [ ] `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- [ ] `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- [ ] `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- [ ] `NEXT_PUBLIC_FIREBASE_APP_ID`

**중요**: 각 변수에 대해 다음 환경 모두에 체크되어 있어야 합니다:
- ✅ Production
- ✅ Preview
- ✅ Development

### 2. 배포 상태 확인

1. Vercel 대시보드 > nexin 프로젝트 선택
2. **Deployments** 탭에서 최신 배포 상태 확인
   - ✅ 성공 (Ready): 정상
   - ❌ 실패 (Error): Build Logs 확인 필요

### 3. 사이트 접속 확인

배포가 완료되면 제공된 URL로 접속:
- 예: `nexin.vercel.app` 또는 `nexin-clubbob.vercel.app`
- 사이트가 정상적으로 로드되는지 확인
- 개발자 도구 콘솔에서 Firebase 오류 확인

## 🚨 문제 해결

### 배포 실패 시

1. **Build Logs 확인**
   - Vercel > nexin 프로젝트 > Deployments > 실패한 배포 클릭
   - Build Logs 탭에서 오류 메시지 확인

2. **일반적인 오류 원인**
   - 환경 변수 누락
   - Firebase 설정 오류
   - 의존성 설치 오류

### 환경 변수 누락 시

1. Vercel > nexin 프로젝트 > Settings > Environment Variables
2. `.env.local` 파일의 값과 비교하여 누락된 변수 추가
3. **Redeploy** 클릭하여 재배포

## 📋 다음 단계

환경 변수 설정이 완료되면:

1. **자동 배포 테스트**
   ```bash
   # 코드 수정 후
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
   - Vercel에서 자동으로 배포 시작됨

2. **커스텀 도메인 설정** (선택사항)
   - Vercel > nexin 프로젝트 > Settings > Domains
   - 도메인 추가 및 DNS 설정

3. **개발 계속**
   - 로컬에서 개발: `npm run dev`
   - 변경사항 푸시 시 자동 배포

