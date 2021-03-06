import axios from 'axios';
import URL from '../../info';

const fetchDraftsThunk = (id, pageNum) => (dispatch) => {
    // console.log('fetch drafts', id);
    axios.get(URL + 'db/fetch/drafts/' + id + '?pageNum=' + pageNum)
        .then((res) => {
            if (res.data.success) {
                console.log('fetch drafts success', res);
                dispatch({type: 'USER_DRAFTS_FETCH', drafts:res.data.drafts});
                return;
            }
            console.log('fetch drafts failure', res);
        })
        .catch((err) => {
            console.log('fetch drafts error', err);
        })
};

export default fetchDraftsThunk;