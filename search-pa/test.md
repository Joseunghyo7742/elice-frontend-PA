### Hooks
함수 컴포넌트에서도 상태관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공해 기존의 함수 컴포넌트에서 할 수 없던 작업을 할 수 있게 해준다.

### 전역상태관리 라이브러리
1. Flux 방식: Redux, Zustand. 중앙 집중식 상태 관리 솔루션
   - Action -> Dispatcher -> store -> view
   - 데이터가 단방향으로 흐름
2. Atomic 방식: Recoil, Jotai. 전체 상태를 원자로 나누는 것을 추구함. 