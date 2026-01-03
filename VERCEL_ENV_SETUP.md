# Vercel 환경 변수 설정 가이드

`.env.local` 파일의 Firebase 설정 값을 Vercel에 추가해야 합니다.

## Vercel에 환경 변수 추가하기

### 1. Vercel 대시보드 접속
1. https://vercel.com 접속
2. 로그인
3. **nexin** 프로젝트 선택

### 2. 환경 변수 설정 페이지로 이동
1. 상단 메뉴에서 **Settings** 클릭
2. 왼쪽 사이드바에서 **Environment Variables** 클릭

### 3. 환경 변수 추가

다음 6개의 변수를 하나씩 추가하세요:

#### 변수 1: API Key
- **Key**: `NEXT_PUBLIC_FIREBASE_API_KEY`
- **Value**: `AIzaSyBDbxvnJKeLV3iV_0IZSaRuZqI94v95Lqg`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development 모두 체크

#### 변수 2: Auth Domain
- **Key**: `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- **Value**: `nexin-7290c.firebaseapp.com`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development 모두 체크

#### 변수 3: Project ID
- **Key**: `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- **Value**: `nexin-7290c`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development 모두 체크

#### 변수 4: Storage Bucket
- **Key**: `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- **Value**: `nexin-7290c.appspot.com`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development 모두 체크

#### 변수 5: Messaging Sender ID
- **Key**: `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- **Value**: `360924414138`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development 모두 체크

#### 변수 6: App ID
- **Key**: `NEXT_PUBLIC_FIREBASE_APP_ID`
- **Value**: `1:360924414138:web:073573b174183233c94283`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development 모두 체크

### 4. 저장 및 재배포

1. 모든 변수 추가 후 **Save** 클릭
2. 상단 메뉴에서 **Deployments** 탭으로 이동
3. 최신 배포 옆 **...** 메뉴 클릭
4. **Redeploy** 선택
5. "Use existing Build Cache" 체크 해제 (선택사항)
6. **Redeploy** 클릭

## 빠른 복사용 텍스트

각 변수를 복사해서 사용하세요:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBDbxvnJKeLV3iV_0IZSaRuZqI94v95Lqg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nexin-7290c.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nexin-7290c
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nexin-7290c.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=360924414138
NEXT_PUBLIC_FIREBASE_APP_ID=1:360924414138:web:073573b174183233c94283
```

## 확인 방법

환경 변수 설정 후:

1. **재배포 완료 대기** (약 1-2분)
2. **배포된 사이트 접속**
   - URL: Vercel 대시보드에서 확인
3. **개발자 도구 콘솔 확인** (F12)
   - Firebase 초기화 오류가 없는지 확인
   - "Firebase 설정이 필요합니다" 같은 오류가 없어야 함

## 중요 사항

- ⚠️ **모든 변수에 대해 Production, Preview, Development 모두 체크해야 합니다**
- ⚠️ **환경 변수 추가 후 반드시 재배포해야 변경사항이 적용됩니다**
- ⚠️ **변수 이름에 오타가 없도록 주의하세요** (`NEXT_PUBLIC_` 접두사 필수)

## 문제 해결

### Firebase 오류가 계속 발생하는 경우
1. 환경 변수가 모두 추가되었는지 확인
2. 변수 이름이 정확한지 확인 (대소문자 구분)
3. 재배포가 완료되었는지 확인
4. Vercel > Deployments > Build Logs에서 오류 확인

