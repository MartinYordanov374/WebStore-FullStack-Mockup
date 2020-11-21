import React, { Component } from 'react'
import {connect} from 'react-redux'
import './css/Products.css'
import $ from 'jquery'
import Hoodie from '../Components/Images/Hoodies.png'
import Mask from '../Components/Images/Masks.png'
import Navbar from './Header'
import Footer from './Footer'

import {Button} from 'react-bootstrap'
class Products extends Component {
    render() {
        let {products} = this.props
        const productsList = [
            {
                name: 'KOOLORBS 10X Magnifying Makeup Mirror with Lights',
                image: 'data:image/webp;base64,UklGRg4XAABXRUJQVlA4IAIXAAAwcACdASosASwBPrFSoEskIqG5I9WauygWCeluzoA0U0lE1zqGT1jeA/mKihZZ+xjUj7g/5Prh/s+9/gCu499L1BfdT7V/0f757F01D6m/N+wD+t/+z/NTmoPTPYC/nn99/73+P9h7/x/2Xn9+ov/b/nPgQ/nn96/7H+D9sn//+4f9tf//7r37O//8mfabnvdUko/CetQixJ7DhvUnpRscXNA+XkEiY607QQbBX/PbnrNfN32n3sBqiutM4n/blfM09yd2ft871XeWbvfgje6o8KdwJ5Nx/Xq5cxTnYmDrKNl2dcjAxwm6E8Fw+2yxyo+OksDp0NvsJiVXbUHFrf4+qMFoo4Jdim6Z88KDFYFnsrMZT/Rpp4OgXhdZBefxfVU/vQUJIATQ4gzLNklVI3AXyh8q5AelFxJ93s6zF+j7JaMSiOwRfNMrmRmc5aGiyN9yHsi4Ewu9yc7l9W7DD9ex8ZbYNWDkGY54ss91cxmzsQfMQxOh0dGwL/Sk4nkZRwrZ9t9d4IPRnX5k/vjB1nDrLAN0yqk6speWd3fmb9lJ/Wlh4bRYSOCDIw0HUPrrJrswRkl0SZ5yYaZ8DP+ILJOrq7z3P1yPOL15fTigC2FOKSSyiOzYx8Cg58iFyUQCmLS6OSSkFzJmDrHoYMtto799hsgxn45O2T1prEOi6hN7su+htH5wUN0TJw93TU+GDvk0tbI1Ur2DNyfF51jnL7ksbcPN/71k24CLLaXcNlE0+NvFbHsJsu7n9AR9qk/ONPzsJe/UlJ2Rb9XEgqO10qHD8nSzkyPo3lqon/lsLPVC08o32BeSlx/rLNSfKD6xqyfx2GM4isehlvozWv2vxDqgiEJRLPAOf2Edp961KdHVwW7MaZjLgJJpm8fxaotIH/o+lp5fFPRmv/6dC9t2/gEb5J73sBzsMTDyLXO2XBtqs2HYYdYo6fL4UMAKH2NifgavQM9R/fXJQOdiYPKonCvU/eimnfZwH1f3420EzgTQrcCzyu5C0CKEGtlzeMwUXQ1vFgG0FcMih+Xemsfx3EzBmCoRViXKOCPWxWgaBw24GGYPKuTdoyYJnKAR9ThVOgPrT+KodCN0c4UdfD3WSPyQNDElH8zDjd83Gzw3FnxK2Rl1wfpSwDsuRLJC4hLp78se1LN6a7GJuG2SDCNoVe5pygSMyo9zlz7H2XA2T8E9WTTvhg553y83agAA/sREloMaJfkbflvU31b8zu+1NHWmBwSap8C/eNK8HlJBDRe4i5npSt1VH9xHVGU1td7pGNlC0Kb9rtyE6bxI/aO/kUBw7UGNHeOE+P5bOp4lIpGaDjD0J2UNaabJvF2YK6LB0fpZevXbo7dnX9QTgU7GNHY8KxCfHhcAMW5xUD7usnAvM4FlKNkJgrhZ5mqMb/ncyP8lM17c1Qa6qF+qtDfIksbrsaEKe/GkQWMiqGoFk8Z7fC2wZp99eWecM0wH8DEgHg2NLmkc+0gJJsl08Bzy+SgsDTrrvA0KBu7gXlcW9XCdgnM7EvWcqb5+Hau80hLlV1sQVQHSuFXLJ0JxUQrBikH83norBoN1VnIbJIR8OJfQ6GudTG4tYqNpvmJbVHSsZUnw3d4tFsllGtUwdAE8zsrTX4FjNyYXHraQgLIiyBoQlwI3jvdJzMta+rlj1GTXuzQ2ZtDEeIT5zab+aqv6N5s0nV/E1JsdWY+lZZ3nVgPoBJWpAy/eOjXO1CenycCAYuoyyYSPvncfSrkcnX6K3eW2pkkdMzTKgVWFto6pi9RdNXWc8h3LBp753uRNQONFk30bmtVkqpRJNxXgIRYnBgbH6G63/Cpa1JghrWyXiHhCn0156l/FmprswrPfzJFCQytbGyQ7wLbk88vVHAYmgkSpVbBwOF1lXKnFoBt0+4o9LwpC9pGdGKF2oM2OrsAI/wlAa9grPg3mZGQXhFjeR7tVspWxQF1O3zIsh35wySYY36iopS6ujUAeajnUE5ntwzGVcARM86ElNGovySrzqm9gMDA1iaoapcDQs89H3reqVl360BxDt2Tq5sPD1Jb/Hr1pBkbNYXFa4pup5raVR0d+gcDqA8tgVfZJkS5KTM98AbzvrcDztw+C9crCl/jRsRNWbP4GkaomEfmv4+CAxsjXHJgTJbtwlKZt37Bj3d2Lnpv57CWx4iyLz6vhnR/KesKctx+gAvh5f4PShApTRSf5qbZ9CDxuE5foY9ohYdn+16EB+XlvwR3Mg4V2a+mgUx7QiYddjlf30MZvEfR5gdF0Hnuyc33wD36u4KGPKLblAAyMQpotjQ2GuDfqQjS6/f34CQbTIsmjco39CT7LIsSfdZLuV+srGSILI33YW+0YQMSOU2g1DYU+1cRdbMrBlyBCbUaE2XEA/mv9CL4trPrUVMrdJjHHCZIh3QkD/uRZou4w8WLWHXCMIFTemWNn5HFYZOjeN8c68soEv2vJIiBGafAthVZQeUpTYLGLhqq3muQhzaCAFg0sl4VsOfR6rq+Y/oLOmpMqZUadYIi/Ckf7vcBihUUW0pE6E8DsLx95FWoLkRsQoZScEfHzPcpwAC4oLaaJteBv/uYlglEZ0p+ctUcI+EQoZ2XPKeiDym0RzqD/7XA+hw3N+o+Zn9K4cManGxVeMzdqb2AuQbJ2oLKJQ5wDNrrCzRq+zZRLdH2DUgm3A9JHhvcfDNuI1LouWVQ5YSuZ8cH1PhaTGEffPxseP5PIxSI55em1uma+g2OklG8DspVYeqEY/DvDBO/xioi626nJjDM/O2vmcdqT2x9lLHwY5/T9lYLI3XqMo1zcuyLHsl20K0LPK9xa9io+lo60crevs640xquCUE46XiaVX7J3W/DiGq3GmxxUrQTtxRtqQpJUavgJhmlmnEPADpND8MJ88RRYSc1chVHRkxEeZ0ZC2iJXGCzxHmNfFbSv95+H/oBeSQBg7L/P+9L18k8d39NmADUO43U/7+6+agXlSTTT/R9J249+OhIzGEp715vrsZNXOhgyBEstNCyONUqZ4E5xcHMRxOCWzMZLGPd/uwmUCLVCjlSxFh1jvd9VngbrW5datfUk88M018Z8yO4XuXB2Ozskjs13/GFQMvMrdUAwDCH/BomJIjMgYWXZPhFU0lSzozm7W7yAJEsTHmgyJQGnb4RG2FlHs13Qq8/CAoLgOCz7RUBvSJi6LrZYuOcXEBBPB/JJunp7ZLRNgFpPvd/h24ShTYtC7OnQZFn17uOElFVzr+8XNpJz6ZI2zTC6dOGiA/lEjHj7GCAW34EBjVz7p9MGeSnvIqx/+N9piDXovGrw00Dm9c7Dkv5s/VhZee9mgAYn3vX4QzIJezvf5tTmadMceYLhvvWFD+a5/Ahl4uxa3tFH1aPkxYeJOsnR9FQGPkTzBmwiwZqEePXfs2sxu4kGNod4HOEOcl92lNfi0DFAhHDQdtabN90pj1/npJzpLQQL9l1OtDtLAffycj93WA8oztbMy7fJ93dndqck3iGGba3g9cu6zZfrMgyW2gDjf49dIVe/A1+Q5zVPcEV+MuXPghsfr47uCjEp/I7Omkcl/59zw7gJ6EUtuAV9HBEYYM59c9ATmzcr0VKmFtil6E4xNLa++f6Fq39WAUgKm2XT60I5dnAE1fKW4oGQe3WVO2My89zuLqveJxjC2KTY9jbz4mtTS3GHXB9HPr/GE9ewDn0FOh5ErxwltXgSxDVLWqBz8eNjycUZWQarz57cITbsP3A4FV01gRes3xIUaCcx9bkGfWy97Sx1U9fYYRZx1kIjhQPN1OV+047YKbiFKtz9nnhRjKuqbBbsIDFT6stXTeCt9abx2jQgWu9AONt8gM4yzJDpmmJD/JJyWob3PkM0VqA9bEHAatiY6lSv1eOh4qfvN2Dx0u1tsE6wy4dacJr0LZAFEfUvKk7MZglcVMET03zntOurUu94eqhiwTBMS102GbIAU4MCDc9eakKc4eZtxTUJ+vYaJSWXQD4y/te/f8G+0Mn3qr41Y2ckVCPjbqdse3ONPUqjh1Lg4Z1U6h7pMB91n6+Ej+s+6HXYbHMRisEi/U9foR+Pu1EqCCeDdcbCQK301Ehk+AzFqS6vBSHDkFs+eIefehbMoxBthtdKHNUa1RyCxlOVxl4mWM08bCfcv/a4PL1pCw0mU7+DwlzbMN6wvwkC8Mj+RH5I6kQLH3dJpQ+MCLi6XWbx3JCgQA3y61S3mIHrD8KrcTckHvT7ixoU2smCXTG0id/bnrscDll6ZxjgKaN8+PWseyZ6nfpwrKPlNzCSR+bXqE2s9hHww0+AizO5ldlKh4RPpxq2v7ZlD8oknfWo8GR2P/+uFUP81oIECun0iUWeu4W9Tq1qhZ5yCj7QFSuslI3ETOrLnMzZ0R3m1O6SCtKSYtxJgoJbinNlvHuG6AvU8UKETe9Djv2N6oBh04UEeE5vqvsD9n193V4eR3y8cRShO9fuA07IwKKE0PoHY1gUcHU5OiSSsYVm76RG9hzeHDVMuSVSObbTh9cOrcNYmNWmBuy4VCKUL3QLEXk9hOp1kN7LxpLyacOgQ+L9xLcBf2UZypyP8pw6E6i1Fy1Vraot8t71WHUJqc27Z/YZ0YeLvfrHwYuGRqmXvEPtBlRFheJtyCvqkzPxtnWVuT4ZR+arciW9U3lupYd/iqXUCx1w3dRttxo9jZdlMGThyfoH4cfjS+ZYYuazb1oBXwzeSjitwff51RPliihaLv36MqUYdjisPOS+VcEYIHBq/f8o5vvrx6x7MYqdKx4aUl2S+CEUt+lXUTOYoar+DCoWeS4MOmDFzZJpx+OcDYF32PRRYzoTxGfdyTeD/jg4xr8j+KENKBucvalD3D3yD9Q9ZU3tmkebcPFg5POVHFQsoEHHAOpX8r2lS+h7S+wE44AXthIm0Q/9ngIffgr4YLXSPX9Eqio5zJ5GwAt/pHMpiMzd4R1S7wFHAPFxay4iR/acShrO+Bc6KBAV4d7KyY3t4CQPh8DnCoaauDckZIw4Z9VkgG7o4vnmClcbejHVa2aVc3JAfje9JDWOYrOD/wcLls8JzTJCBCobXYTnDO660mG9raoro1wvvGGmjGpTxG/se5SY4O3eedAA8vysHfuRvdj6HcjNckBbTxyHNUSpeuu6094+RMWbpKr/sPe6vm4P29w0JhGN6cdNgKjsFmVkp6kMBX6ZZ6Q0BHMCg5Y+3NYVONlvnSX3+7OvnL/iwmKCPdNSJSw/Ke6qjlrzwK35ElKoBpch2nhtekjpigplg90z09H+QE+YFsnVZZ1r7YW7RD6JiBtcb1anhC8FAqnW7omlLvLB9haLhW4/I/Jzv/JcaWtCgXMlzOTH6lS9j0No46dX0nawZ1qZKszCcxgm/peNuA9EbxTqfKhr5ynXcMx12HkhyjsEqPbpoMjoR4G7R0M+/WKpUpdWr+DeJecGQCcgEg1PghfajukALrFDRH/YFThLQItXn6Om4kpEXPWYv+6zal7fmwxEBAfjRdpvsL0Vgka7u1rd72bvBdv6JQcM1pV/jMsltn+Vk/a/xS3ikrX0V/nkFAOYWEmuXwkgqqLrSlitfNU1nbLXGwUrs4EdrWb6wDnTbqEGFd2tjb7yN76UwmTcYiuUvoVSUovSNW4ZbyIn39aM6LT3mawUYpbortXAv+5roIg/Ji/GlqYjcBrMX3LrLcnVljLjaW7rXepW/TyCfCm4RK3930AsPZBg8rq7rhz5heQA3rGedqEB26uJFkUmoIfx5B7A8+FivENFwpQoLFM6ZoT/249RwYM2o7S12ONrUgg16mMYv/S7tz2mwIYEnD+tq1UPxTt+eB+2qO//RUbws7vMAhV05sUFYfvpPAL1zIx87WF6rnETY8WxEBPVd9g7aS/vz1TlDqRDPJSQWNtJ4u7lnSEZ4VHfFtAz/UINwdjNl7Hcy2d+WlgqFkep0ZJDLFVKxqUYcsLYtdXdrTVVtN3gnBbOTkk+b52ubLSCNYndJyMoUDk8wpmqiMwQxGpjCW7EZsLKDqPdS5yMF/vXYVGBdsJv1opCilDZRYk/HNMxplAobjvME+DT7mvIiyNVJw+hZtAg6AQhPeRKal/3Bs9drqRWGFe6IYqRQM+z16eLXTT3RHGXK0MP6F980VAcVHyhRORBlZCLCJW/RubzWYpAmQyPxkPqIIp5LPy/3OVpWI7Dx6CxG6auEwU6pjv1nmHDLw6ug2G4Nq552dqVPrqfhb8Brf3AiogJ0XD4Nzb3D5pzotRFTSt/1Qx6ugQfNZwWupA/jc8lIh3DJrAljKvWA522bYEuLo2fjUyI63baSL4M6PA31wLNMKg4P/FF/Eu1ZQP6uG82sN43qSRTOY+zjWSorUk6mrysoTC4LuCHcA2MdTVVMUp1o+cNweNaZLg1bFCC+Urt1rOhKtjNMKQdse12pGVaj9VEcIN1hK861uqXSQ6vZ0OUfa9byE7LRfeSRRSiaLYtODy21ijxNNkOitKeqiqZaORkHzuhRwswzDkyCMiTOA4HGqBNd53rl/DQX4tVbGviAczY85vJPpdk8yzO3CHETQkWXfd9/fSTi2cXSy/L5J2BW9jsn1WwO8nDW6MVg+V13fe4pPcG9K6wWfpFrSrZQOtFxa818vR41Y6rcQXe5ZYzgyA7xUCoWP4OpU1t/VET3Utxq4YF2z0cEc/udGvMat7ywEN+3s1cZHb5vvnZ6TGRjcpFlecrdXKj3DXu2+Nn7OfW7JVa5t82KWGbqZOYp0NLt1faq1sRElW3XXzXxVf+6QxhxLxbYRjI+JcrPZq0YKHMJ+bg+nriFZ8DTgMBCj8XAac+boSFdPToaSSuQzVmrOQZy5ojgyuOs3xJOO4utjMXlnQ15W6yzgcscqxFlGqminl2OIttt+MNUHGNLYFaFs2HS5maG4G6tguJVHIiP10Awus/yCBmg0/vUj+Zf4PTxRrVEBcpvmud0pZV95HK6JaD+oQelVAUAxx3r76OH3OffEzQPxDZHqi/Ns+l+ZAhALanT2lXqqP/3VVc4w8O+LMGsFbl8G9KX5TU/YzPh6+d+N6j+Kn5vM9Tc+bNhnM+6myQFue7LiOeoI8AHZDuMsWp05RIITtxDbJfbTc/lcMpi7RJLio4V5/jvEuKqiOAQkqgrLiNv6yESbOnfaVAfhQfkr+pCD8Ejp7VqmnvHP/ztCqsVuebk7SZIYNUktbMmSTvwFxVQVIbWfZuQqKtizYxQvKus8ns86hVkCMlEfMnODBcY68v2BZ3jcWHcgVBfUdpplyPUmruoWouAmG+ghvxibG9TZ25nx61ZfcElMRmOj1CietntsHgXQKqQUBJDW48Jj9z5z/LfoyVSA36Tp/3V/pQoWzaEEGHcVTyVBcYAM8I8sz0t2dyuiMChZ6pNZbv3PQrcPAMUMU4JsTnHej6Ep6GQB+3rn0HnBNs1L3fIYnXsEDA9+RjhLXh7R3gROCDDM+R9J5dRwli6Msy/jalqWYqdg2hw+jC8BHRS9DPFTa5SDcpcvLaPKRUXYjUibbbNyf46nOsbsow81GAvQNP59KJmodQvn13xGVplYSU5NzA3KAva8PMlb/wF1M7shF/5qssc0mpLxhx3zmA/e4Z9DATPjQbZ4hc0sEWT3hDyY9tZn0ijb3dfAu7pIyB/AakUreqvlPxGOjBDNhuyr6ahUrB61ce6H2JURMaTjTxcbz12GwlEidheEAroOQEY7AABwFFyS46dMoXyWZemBcEBeFOBKZvOC2nFehdr2oUSzOImy1qUw8sChCKzjuYcmYuQENSpM0j4bv9iiPZRncDCjeSDSwX4cl0O+kTbI+jCU9lZiqrO4LGc+mtsYE1wL/l8oCB9CI6q0xN9liQwEgcxUZsmriSLEiwAAAA',
                price: '19.99',
                description: 'About this item 10X Magnification; ideal for applying makeup, wearing contact lenses and eyebrow tweezing , shaving, hair styling, facial care 3 color lighting and adjustable brightness; Press the touch screen switch, changing the color of light; hold the touch switch longer, brightness dim or bright Intelligent switching design; the lights can be turned off automatically when you don’t use the mirror after 30 minutes; 3 AAA batteries operated, batteries not included Powerful integrated suction cup; mounted on anywhere smooth, flat and clean surface, such as a table, window, and even a larger mirror Adjustable angles and portable; 360-degree swivel joint; good for bedroom, bathroom, or traveling'
            },
            {
                name: 'test1',
                image: 'image1',
                price: 'testPrice',
                description: 'lorem ipsum lol'
            }
        ]
        return (
            <div>
                <Navbar></Navbar>
                <div className='Categories'>
                    <div className='Hoodies'>
                        <img src={Hoodie}></img>
                        <br></br>
                        <Button className='goToHoodiesButton' href='/Hoodies'><strong>Go To The Hoodies Page</strong></Button>
                    </div>
                    <div className='Masks'>
                        <img src={Mask}></img>
                        <br></br>
                        <Button className='goToMasksButton' href='/Masks'><strong>Go To The Masks Page</strong></Button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps=(state={products:[{}]})=>{
    return{
        products: state.products
    }
}
export default connect(mapStateToProps)(Products)