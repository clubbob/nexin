# 보안 주의사항

## 중요: API Key 및 민감한 정보 보호

### 절대 하지 말아야 할 것

1. **실제 API Key를 코드나 문서에 포함하지 마세요**
   - GitHub에 커밋하면 누구나 볼 수 있습니다
   - `.env.local` 파일은 `.gitignore`에 포함되어 있어 커밋되지 않습니다

2. **문서 파일에 실제 값을 포함하지 마세요**
   - 예시 값만 사용하세요 (예: `your_api_key_here`, `your-project-id`)
   - 실제 값은 `.env.local` 파일에서만 관리하세요

3. **스크린샷에 민감한 정보가 포함되지 않도록 주의하세요**

### 안전한 방법

1. **환경 변수 사용**
   - 모든 민감한 정보는 `.env.local` 파일에 저장
   - 이 파일은 Git에 커밋되지 않음

2. **문서에는 플레이스홀더 사용**
   - 예시: `NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here`
   - 실제 값은 Firebase Console에서 확인

3. **Vercel 환경 변수 설정**
   - Vercel 대시보드에서 직접 입력
   - Git 저장소에 커밋되지 않음

### API Key가 노출된 경우

1. **즉시 Firebase Console에서 키 무효화**
   - Firebase Console > 프로젝트 설정 > 일반
   - API Key 제한 설정 또는 새 키 생성

2. **GitHub에서 민감한 정보 제거**
   - 파일에서 실제 값 제거
   - Git 히스토리에서도 제거 필요 시 `git filter-branch` 사용

3. **새로운 API Key 생성**
   - Firebase Console에서 새 키 생성
   - `.env.local` 및 Vercel에 새 값 설정

## 참고

- `.env.local` 파일은 절대 Git에 커밋하지 마세요
- 문서 파일에는 예시 값만 사용하세요
- 실제 값은 Firebase Console에서 확인하세요


