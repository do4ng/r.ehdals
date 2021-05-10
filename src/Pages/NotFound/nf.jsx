import Error from '../../Components/Error/err'
export default function App({ match }) {
  return (
    <Error
      title="404 - 페이지를 찾을 수 없음"
      content="URL이 맞는지 다시 확인해주세요."
    ></Error>
  )
}
