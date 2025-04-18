import { Navigate, Route, Routes, useNavigate } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoute"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth"


export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    }
    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={< JournalRoutes />} />
                    : <Route path="auth/*" element={<AuthRoutes />} />
            }
            <Route path='/*' element={<Navigate to='/auth/login' /> } />
            {/* Login y registro */}
            {/* <Route path="auth/*" element={<AuthRoutes />} /> */}

            {/* JOurnaAPp */}
            {/* <Route path="/*" element={< JournalRoutes />} /> */}
        </Routes>
    )
}