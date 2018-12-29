<template>
  <div id="main-content" class="content">
    <div class="content-wrap">
      <div class="work">
        <!-- Mobile Header -->
        <div class="work-mobile-header">
          <div class="work-data">
            <div class="work-block owner">
              <OwnerProfile
                owner="Jan Urschel"
                location="Singapore"
                className="owner-info-header mobile-header"
              />
            </div >
            <div class="highlight">
              <div id="" class="work-block">
                <WorkSummary
                  :title="workSummary.title"
                  :tags="workSummary.tags"
                  :pubTime="workSummary.pubTime"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Work Content -->
        <MainText />
        <!-- Work Sharing -->
        <div class="work-sharing">
          <div class="sharing-links">
            <a class="sharing-link">
              <span>Add to Collection</span>
            </a>
            <a class="sharing-link">
              <span>Copy link</span>
            </a>
          </div>
        </div>
        <!-- Owner Profile -->
        <div class="work-owner-profile zfix">
          <div class="work-owner-profile-wrap">
            <div class="work-owner-profile-info">
              <OwnerProfile owner="Jan Urschel" location="Singapore" className="owner-info-bar" />
            </div>
          </div>
        </div>
        <!-- Other Works -->
        <OtherWorks />
        <!-- Work Footer -->
        <comments></comments>
      </div>
      <!-- Sidebar-->
      <div class="work-sidebar">
        <div class="sticky-bar">
          <sticky className="sidebar-group" >
            <div class="work-block">
              <OwnerProfile owner="Jan Urschel" location="Singapore" className="owner-info-header desktop-header" />
            </div>
            <div class="work-block">
              <WorkSummary
                :title="workSummary.title"
                :tags="workSummary.tags"
                :pubTime="workSummary.pubTime"
              />
            </div>
          </sticky>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainText from '@/components/content/text';
import OtherWorks from '@/components/content/others';
import WorkSummary from '@/components/content/summary';
import OwnerProfile from '@/components/profile/owner';
import comments from '@/components/comment';
import sticky from '@/components/sticky';

export default {
  components: {
    MainText,
    OwnerProfile,
    OtherWorks,
    WorkSummary,
    sticky,
    comments,
  },
  data() {
    return {
      workSummary: {
        title: 'Banu Defender - Star Citizen',
        tags: [
          {
            name: 'Industrial Design',
            link: 'https://www.xiak.com',
          },
          {
            name: 'Game Design',
            link: 'https://www.xiak.com',
          },
          {
            name: 'Illustration',
            link: 'https://www.xiak.com',
          },
        ],
        pubTime: '2018年12月25日 14:50',
      },
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .zfix {
    zoom: 1;
  }
  .content {
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 50px 96px;
    text-align: center;
    z-index: 1;
  }

  .content, .content * {
    box-sizing: border-box;
  }

  .content-wrap {
    position: relative;
    display: inline-block;
    max-width: 100%;
    background: #fafafa;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    text-align: left;
    .work {
      position: relative;
      z-index: 1;
    }
    .work-sidebar {
      z-index: 2;
    }
  }

  .work {
    max-width: 1400px;
    min-width: 700px;
    margin-right: 280px;
  }

  .work-sidebar {
    background: #fafafa;
    border-left: 1px solid #e8e8e8;
    border-radius: 0 3px 3px 0;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 280px;
  }

  .sidebar-group {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    float: left;
    width: 100%;
    z-index: 1;
  }

  .work-mobile-header {
    border-bottom: 1px solid #e8e8e8;
    display: none;
    width: 100%;
    .work-data {
      display: inline-block;
      height: 111px;
      padding: 20px;
      width: 100%;
    }
    .work-block {
      border-bottom-width: 0;
      padding: 0;
    }
    .highlight {
      display: inline-block;
      position: relative;
    }
  }

  .work-block {
    position: relative;
    clear: left;
    float: left;
    color: #6f6f6f;
    font-size: 13px;
    line-height: 22px;
    padding: 20px;
    width: 100%;
    word-wrap: break-word;
    border-bottom: 1px solid #e8e8e8;
    z-index: auto;
  }

  .work-sharing {
    -ms-flex-align: center;
    align-items: center;
    background: #212121;
    display: -ms-flexbox;
    display: flex;
    height: 44px;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 26px;
    .sharing-link {
      color: #b8b8b8;
      font-size: 10px;
      text-decoration: none;
      text-transform: uppercase;
    }
    .sharing-link:first-child {
      margin-right: 15px;
    }
  }

  .work-owner-profile {
    background: #161616;
    padding: 25px;
  }

  .work-owner-profile-wrap {
    margin: auto;
    max-width: 1205px;
    position: relative;
  }

  .work-owner-profile-info {
    max-width: calc(100% - 185px);
  }

  .owner-info-bar {
    height: 90px;
  }

  .work-owner-profile-list {
    padding-top: 0;
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 603px) {
    .content {
      padding-top: 29px;
    }
    .work-owner-profile {
      padding: 15px;
    }
    .work-owner-profile-info {
      max-width: 100%;
    }
    .work-mobile-header {
      .work-data {
        height: auto;
        padding: 0;
        border-bottom-width: 0;
      }
      .work-block {
        padding: 0;
        border-bottom-width: 0;
      }
      .owner {
        padding: 8px 14px;
      }
      .highlight {
        border-top: 1px solid #e8e8e8;
        padding: 8px 14px 7px;
        width: 100%;
      }
    }
  }


  @media (min-width: 604px) and (max-width: 1024px) {
    .work-mobile-header {
      .owner {
        float: right;
        padding: 7px 0 0 20px;
        width: 250px;
      }
      .highlight {
        float: left;
        width: calc(100% - 250px);
      }
      .work-block {
        border-bottom-width: 0;
        clear: none;
      }
    }
  }

  @media (max-width: 1080px) and (min-width: 604px) {
    #main-content {
      &.content {
        max-width: none;
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      padding: 0;
    }
    .content-wrap {
      border-radius: 0;
      box-shadow: none;
      display: block;
    }
    .work {
      border-right-width: 0;
      box-shadow: none;
      margin: 0;
      max-width: none !important;
      min-width: 0;
      width: 100%;
    }
    .work-sidebar {
      display: none;
    }
    .work-mobile-header {
      display: inline-block;
    }
    .work-content {
      border-radius: 0;
    }
  }

  @media (max-width: 1130px) and (min-width: 1025px) {
    .content {
      max-width: 1010px;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }
</style>
