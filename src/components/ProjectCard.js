import React from "react";

class ProjectCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            projects:[]
        };
    }

    componentDidMount() {
    
        fetch("https://api.github.com/users/MRGHOSJ/repos")
        .then(res=>res.json())
        .then(res => {
            let newProjects = this.state.projects
            res.map(item =>{
                if(this.state.projects.indexOf(item) == -1)
                {
                    fetch("https://raw.githubusercontent.com/MRGHOSJ/"+item.name+"/main/portfolio.json")
                    .then(resCheck=>resCheck.json())
                    .then(res=>{
                        if(res[0] == true)
                        {
                            newProjects.push(item)
                        }
                        
                        this.setState({projects:newProjects})
                    })
                    .catch(err=>{
                        return console.error(err)
                    })
                }
            })
        })
    }
    
    handleImageError = (e) => {
        e.currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEXMzMx/f3/Q0NB5eXnIyMiVlZWEhITAwMCLi4vR0dF8fHy0tLSjo6OysrLDw8Obm5t1dXWsrKyWlpampqa6urqtra2Ojo6fn59vb28EtcIDAAAFL0lEQVR4nO2bCZejKhBGpRAVUNxQ3///pa9wSUdjejJ9Mp1ovnvOTBYpZriylAajCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAqK0+cQ06ub8lOolM+iPKgEGqQwz0HI4ZgSSAqhnoMQ8pgOYikyTc9AZ0LGr27OjwgOnnP2CA4+ycHU8fcOfIoDits+yZpix8KnOKBc8hoojBT+JuhDHJDilXRCdtuoz3DAvUBckOkm7DMcxFcKxE3YRzig1lw7kOnm8Ec46FcOzGZG+AwHiVg5yOHAtKd3cJsNklrPB8XZHZBXWeNWR6hbzwebBp/OgR6k4XRwkw2uFGzvGp3NwZIQrhMh8tcJwk3MyRxkS683awmdnA8Y4U6dK5NLvga+WbWV0p4vmow05W1NZ3JAqVjNfWsJlHZtW+zdRj+RA7IrA0IkmwbfuYVyIgdUy7UCYZLHWnYaB6vL47+TcBYH1NwqYAnZIzWdxUFvdhTcl0BaX/k7gwOKk30FLKHfWwicMrxILkfO4IDXxPvsSOAFJNxeTZa18wQOyN/rBJOEZptJLbOnsbPDwzvgNPg7BVsJFH9NHXK6kXB4B3tr4obrX9bXuaRsxu8O7oDKPyrgpuZ6DtomUibjXPLYDvS9NfGehJsswghPx3YQ3V0TtxJaHZbEbKe4qQ+9/yB5VAFLqPW0JO51kiM7+BtMfXfyZDOf4UDsd4KZD3HwLXAAB3AAB3AAB3AAB3AAB3AABydzQA/fO3gAc8znWG5/Y/05sj6mg4iKLHkOWXFQBWE/wbtVBAAAAIBfJXZ/WTL90yWAc9eVLsXTO6XfACrkoyXtWFJX9vvMh8pG55eNOlT58dX999P/4b+HrOC/wlbTaN5tOu86Hb/5+jiXZAfS0uXL6XV6e/kYx5QrmmrgKzA/vrpqrvMNCS2jNm1VR7Vqw+/og2o8t9Kq0uVhR874MVo58NbzUf7QqRDTpuFKy8+hZG1wQL5Ug2MHduC6Rwf8L5S3T8O+ntAyLZK2ln1ZiJxc1fq88tSZoksq7tiZLcR49fflQOdCFT27U5m1idJlOOtVuoSWpc6VLmTnleS6TWuTgeuNqO89V/t+EkYHSa5102tdZ9rzW53UJCxRUUWpIa2dXEpGs4NEUyxdVMZaF0KnkrtLEkKJQ/UwOqgLrSOZajNocjJ2FXnBVac3T3q8nqkfcIObnKjOeMAWrTJ1HG4A8bmrk6EsyyqNVmMhDzvSTBppXw8J+0gKnbUcakPo5IC06/I+OAi9X3h2kE91PbwO/RobB3xO+9wndVwtDmxRFHZc37wZA6QfHcQmpV6UXSs05T2Xpzl07gedbFo7O6DJQc91Wfva9u6xdtBrxV2XDI+FMLlV3O4wl9dj0bgKU7zn1k4OXFpx528FT3iy5R40horFgfA8iCp2UBOPmzAWeNRc6noryJrJgRrGfjAkLlWy5SmtKASP86x3rk+mhaGRrW1lSTTwJBhLngSLuDMibMKrCv52Dp3mxKyMfSa9Nsa7rBnnRNG4NNvb5/xqfMOTv+f1seMTP1BUiswXOWnflD6s6Tzgh7koO0oyXiOoC/tQlSPLx2LlwkIajs+hdU1FS04J5XKrG9snOXcVLhFzXfnrWvoNtOQ3y58x01GO53BJ6wd16JI/zXFfidTlcEigloqmt7QUv/vQz3tCTdLV5qh3hZ8EFcPwjjndr3KobgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCv8T8P0EKx6h83/QAAAABJRU5ErkJggg=="
    }

    render() {
        return(
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    this.state.projects.sort((a, b) => {
                        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                     }).map(res=>{
                        return(
                            <a href="#" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src={'https://raw.githubusercontent.com/MRGHOSJ/'+res.name+'/main/preview.png'} onError={this.handleImageError} class="w-full h-full object-center object-cover group-hover:opacity-75"/>
                                </div>
                                <h3 className="mt-4 text-lg text-gray-700">
                                {res.name}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-gray-900">
                                {
                                    res.created_at.replace("T"," ").replace("Z"," ")
                                }
                                </p>
                            </a>
                        )
                })
                }
            </div>
        
        )
        
    }
}

export default ProjectCard