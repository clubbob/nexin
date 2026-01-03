# Nexin Firebase 프로젝트 다음 단계

Firebase 프로젝트 `nexin-7290c`가 생성되었습니다. 다음 단계를 진행하세요.

## ✅ 완료된 작업
- [x] Firebase 프로젝트 생성 (nexin-7290c)

## 📋 다음 단계

### 1. 웹 앱 추가 (필수)

Firebase Console에서:

1. **"+ 앱 추가"** 버튼 클릭
2. 웹 앱 아이콘 (`</>`) 선택
3. 앱 닉네임 입력: `nexin-web`
4. **Firebase Hosting 설정** 체크 해제 (Vercel 사용 예정이므로)
5. **앱 등록** 클릭
6. **Firebase SDK 설정 정보 복사** (다음 단계에서 사용)

설정 정보 예시:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "nexin-7290c.firebaseapp.com",
  projectId: "nexin-7290c",
  storageBucket: "nexin-7290c.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 위에서 복사한 정보를 입력하세요:

```env
# Firebase Client SDK 설정
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nexin-7290c.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nexin-7290c
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nexin-7290c.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

> **중요**: `.env.local` 파일은 Git에 커밋되지 않습니다 (`.gitignore`에 포함됨)

### 3. Firebase CLI 연결

터미널에서 실행:

```bash
# Firebase CLI 설치 (아직 안 했다면)
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트 연결
firebase use --add
# → 목록에서 "nexin (nexin-7290c)" 선택
# → 별칭: default (Enter)
```

### 4. Firebase 서비스 활성화

Firebase Console 왼쪽 메뉴에서 다음 서비스를 활성화하세요:

#### 4.1 Authentication (인증)
1. 왼쪽 메뉴 > **Authentication** 클릭
2. **시작하기** 버튼 클릭
3. **로그인 방법** 탭에서 사용할 인증 방법 활성화:
   - 이메일/비밀번호 (권장)
   - Google (선택사항)
   - 기타 필요한 방법

#### 4.2 Firestore Database
1. 왼쪽 메뉴 > **Firestore Database** 클릭
2. **데이터베이스 만들기** 클릭
3. **프로덕션 모드** 또는 **테스트 모드** 선택
   - 테스트 모드: 개발 중에는 모든 읽기/쓰기 허용 (30일 후 만료)
   - 프로덕션 모드: 보안 규칙 필요
4. **위치 선택**: `asia-northeast3` (서울) 권장
5. **사용 설정** 클릭

#### 4.3 Storage
1. 왼쪽 메뉴 > **Storage** 클릭
2. **시작하기** 버튼 클릭
3. **기본 보안 규칙 사용** 선택 (나중에 수정 가능)
4. **위치 선택**: Firestore와 동일한 위치 권장
5. **완료** 클릭

### 5. 보안 규칙 설정 (선택사항, 나중에 수정 가능)

현재 프로젝트에 기본 보안 규칙 파일이 있습니다:

- `firestore.rules` - Firestore 보안 규칙
- `storage.rules` - Storage 보안 규칙

프로젝트 요구사항에 맞게 수정 후 배포:

```bash
# Firestore 규칙 배포
firebase deploy --only firestore:rules

# Storage 규칙 배포
firebase deploy --only storage
```

### 6. 개발 서버 실행 및 테스트

```bash
# 의존성 설치 (아직 안 했다면)
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:3000 접속

콘솔에 Firebase 초기화 오류가 없다면 정상입니다!

## ✅ 체크리스트

- [ ] 웹 앱 추가 완료
- [ ] `.env.local` 파일 생성 및 환경 변수 설정
- [ ] Firebase CLI 로그인 및 프로젝트 연결
- [ ] Authentication 활성화
- [ ] Firestore Database 생성
- [ ] Storage 활성화
- [ ] 개발 서버 실행 및 Firebase 연결 확인

## 🚀 다음 단계 (선택사항)

환경 설정이 완료되면:

1. **Vercel 배포 설정**
   - Vercel에서 새 프로젝트 생성
   - Git 저장소 연결
   - 환경 변수 설정 (`.env.local`의 모든 `NEXT_PUBLIC_*` 변수)

2. **Git 저장소 설정**
   - GitHub/GitLab에 새 저장소 생성
   - 원격 저장소 연결 및 첫 커밋

자세한 내용은 `SETUP_GUIDE.md`를 참고하세요.

