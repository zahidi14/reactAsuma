import "./sidebar.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import DraftsIcon from '@mui/icons-material/Drafts';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import OutboxIcon from '@mui/icons-material/Outbox';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="logo">admin</div>
            <hr />
            
            <div className="mid">
                <ul>
                    
                    <li>
                        <span><DashboardIcon className="icon"/>Dashboard</span>
                    </li>
                    
                <span className="title"> Transaksi Surat</span>
                    <li>
                        <span><MarkEmailUnreadIcon className="icon" /> Surat Masuk</span>
                    </li>
                    <li>
                        <span><MarkEmailReadIcon className="icon"/> Surat Keluar</span>
                    </li>
                    <li>
                        <span><DraftsIcon className="icon" /> Disposisi Surat</span>
                    </li>
                <span className="title">Referensi</span>
                    <li>
                        <span><LocalLibraryIcon className="icon"/> Kode Surat</span>
                    </li>
                    <span className="title">Buku Agenda</span>
                    <li>
                        <span><MoveToInboxIcon className="icon"/> Surat Masuk</span>
                    </li>
                    <li>
                        <span><OutboxIcon className="icon" /> Surat Keluar</span>
                    </li>
                <span className="title">Pengaturan</span>
                    <li>
                        <span><ManageAccountsIcon className="icon" /> Profile Setting</span>
                    </li>
                    <li>
                        <span><LogoutIcon className="icon" /> Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom"></div> 
        </div>
    );
};

export default Sidebar;