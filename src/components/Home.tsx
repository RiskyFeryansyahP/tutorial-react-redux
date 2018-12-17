import * as React from 'react'
import { connect } from 'react-redux'

import { RootReducerType } from '../type/ReducerType'

interface Posts {
    id : string
    title : string
    body : string
}

interface Props {
    posts : Posts[]
    addPosts : any
    editPosts : any
    deletePost : any
}

class Home extends React.Component<Props> {
   constructor(props : Props)
    {
        super(props as any)
    }

    public handleClick = () => {
        this.props.addPosts()
    }

    public handleEditClick = (id : string) => {
        this.props.editPosts(id)
    }

    public handleDeleteClick = (id : string) => {
        this.props.deletePost(id)
    }

    public render()
    {
        console.log(this.props)
        return(
            <React.Fragment>
                { this.props.posts.map(post => {
                    return(
                        <div key={post.id}>
                        <h2> {post.title} </h2>
                        <p> <b> {post.body} </b> </p>
                        </div>
                    )
                }) }
                <button onClick={this.handleClick}> Add Post </button>
                <button onClick={() => this.handleEditClick('1')}> edit Post </button>
                <button onClick={() => this.handleDeleteClick('2')}>Delete</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state : RootReducerType) => {
    return {
        posts : state.posts.posts
    }
}

const mapDispatchToProps = (dispatch : React.Dispatch<any>) => {
    return {
        addPosts  : () => { 
            dispatch({ type : 'ADD_POST', id : '4', title : 'King Crab', body : 'King Crab has a return true' })
        },
        editPosts : (id : string) => {
            dispatch({ type : 'EDIT_POST', id, title : 'How edit post', body : 'this a edited post' })
        },
        deletePost : (id : string) => {
            dispatch({ type : 'DELETE_POST', id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)