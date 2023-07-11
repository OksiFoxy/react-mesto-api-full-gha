// ProtectedRoute (HOC-компонент, чтобы защитить основную часть сайта Main от незалогинненых
//   посетителей. Не должно⛔ быть ситуаций, при которой залогиненный пользователь может попасть
//   на урлы /login и /register, а неавторизованный - открыть главную)
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
